// One-time helper: downloads the images that used to be hosted on
// storage.helloreaddy.io (readdy.ai's CDN) into public/images, with
// clean, descriptive filenames, so the site no longer depends on
// readdy's storage at all.
//
// Run once after cloning:
//   node scripts/download-images.mjs
//
// (These original URLs are still live as of the export, but they are
// a third-party's storage bucket, not yours — so it's worth mirroring
// them permanently into your own /public/images folder.)

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const files = [
  {
    url: 'https://storage.helloreaddy.io/project_files/a3176efe-6e36-486c-8fd5-1c39db40b1fe/149caa61-0b70-4830-bc56-22b170df2734_compressed_1st-image.png-01.webp',
    out: 'public/images/solution/01-accurate-conversion-tracking.webp',
  },
  {
    url: 'https://storage.helloreaddy.io/project_files/a3176efe-6e36-486c-8fd5-1c39db40b1fe/984cdce2-fb72-4dba-afca-c42380f35621_compressed_2nd-image2.webp',
    out: 'public/images/solution/02-reliable-attribution-reporting.webp',
  },
  {
    url: 'https://storage.helloreaddy.io/project_files/a3176efe-6e36-486c-8fd5-1c39db40b1fe/f7cabfc7-a15a-4103-98a3-185c367eded0_compressed_3rd-image3.webp',
    out: 'public/images/solution/03-better-ad-optimization-signals.webp',
  },
  {
    url: 'https://storage.helloreaddy.io/project_files/a3176efe-6e36-486c-8fd5-1c39db40b1fe/efecd5f1-bb18-4ee2-9d10-5942c5f50eef_compressed_4th-image.webp',
    out: 'public/images/solution/04-improved-marketing-insights.webp',
  },
  {
    url: 'https://storage.helloreaddy.io/project_files/a3176efe-6e36-486c-8fd5-1c39db40b1fe/29c55811-7843-4813-8fd1-e1e68a081b15_compressed_5th-image.webp',
    out: 'public/images/solution/05-scalable-campaign-performance.webp',
  },
  {
    url: 'https://storage.helloreaddy.io/project_files/a3176efe-6e36-486c-8fd5-1c39db40b1fe/981e099c-71b4-4bc0-80f9-6d19cf353b04_compressed_Impact-image1.webp',
    out: 'public/images/impact/01-tracking-accuracy.webp',
  },
  {
    url: 'https://storage.helloreaddy.io/project_files/a3176efe-6e36-486c-8fd5-1c39db40b1fe/168fbab9-55f5-485d-8662-48dd79579c05_compressed_Impact-image2.webp',
    out: 'public/images/impact/02-cpa-reduction.webp',
  },
  {
    url: 'https://storage.helloreaddy.io/project_files/a3176efe-6e36-486c-8fd5-1c39db40b1fe/dc039122-51c9-4fee-8db5-063a43106f11_compressed_Impact-image3.webp',
    out: 'public/images/impact/03-campaign-scale.webp',
  },
  {
    url: 'https://storage.helloreaddy.io/project_files/a3176efe-6e36-486c-8fd5-1c39db40b1fe/f3628a49-d5ec-4a9d-a1bc-6ede32eb4221_compressed_Frame-35.webp',
    out: 'public/images/problem/tracking-audit-dashboard.webp',
  },
];

async function run() {
  for (const { url, out } of files) {
    const dest = join(root, out);
    await mkdir(dirname(dest), { recursive: true });
    console.log(`Downloading ${out} ...`);
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  Failed (${res.status}) — skipping. Old URL may have expired.`);
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buffer);
    console.log(`  Saved (${(buffer.length / 1024).toFixed(0)} KB)`);
  }
  console.log('\nDone. All images now live locally under public/images/.');
}

run();
