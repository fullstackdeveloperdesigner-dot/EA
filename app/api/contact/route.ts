import { NextRequest, NextResponse } from 'next/server';

// This route replaces the old readdy.ai form endpoint
// (https://readdy.ai/api/form/...) that the site used to submit to.
//
// Right now it just validates the payload and logs it. Wire it up to
// whatever you actually want to happen on submit, e.g.:
//   - send an email via Resend / Nodemailer / SendGrid
//   - save the lead to a database
//   - forward it to a CRM (HubSpot, etc.)
//
// Example with Resend (npm i resend):
//   import { Resend } from 'resend';
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: 'Website <noreply@ericanalytics.net>',
//     to: 'info@ericanalytics.net',
//     subject: `New inquiry: ${subject || 'Website contact form'}`,
//     text: `${firstName} ${lastName} <${email}>\nService: ${service}\n\n${message}`,
//   });

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const honeypot = (formData.get('company_alt') as string)?.trim();
    if (honeypot) {
      // Bot submission — pretend success, do nothing further.
      return NextResponse.json({ code: 'OK' });
    }

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { code: 'ERROR', message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // TODO: send email / save to DB / forward to CRM here.
    console.log('New contact form submission:', {
      firstName,
      lastName,
      email,
      subject,
      service,
      message,
    });

    return NextResponse.json({ code: 'OK' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { code: 'ERROR', message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
