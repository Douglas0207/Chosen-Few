// src/api/sitemap.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://chosen-few.vercel.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  <!-- Add more URLs here as needed -->
</urlset>`;

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
