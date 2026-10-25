// Public site URL used for metadata, sitemap and robots.
// Set NEXT_PUBLIC_SITE_URL when a custom domain is added; on Vercel the production URL is used automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
