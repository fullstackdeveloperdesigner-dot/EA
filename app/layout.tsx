import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eric Analytics — Fix Broken Tracking. Scale Profitable Campaigns.',
  description:
    'Eric Analytics fixes tracking foundations before scaling campaigns. Specialists in GA4, Google Tag Manager, Server-Side Tracking, and Conversion Optimization for eCommerce, SaaS, and lead generation businesses.',
  icons: {
    icon: 'https://ericanalytics.net/images/log.png',
  },
  openGraph: {
    title: 'Eric Analytics — Fix Broken Tracking. Scale Profitable Campaigns.',
    description:
      'Eric Analytics fixes tracking foundations before scaling campaigns. Specialists in GA4, Google Tag Manager, Server-Side Tracking, and Conversion Optimization.',
    type: 'website',
    url: 'https://ericanalytics.net/',
    images: ['https://ericanalytics.net/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css"
        />
      </head>
      <body className="min-h-screen bg-[#080808] text-white">{children}</body>
    </html>
  );
}
