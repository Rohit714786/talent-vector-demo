/**
 * Canonical site URL for metadata, sitemap, and robots.
 * On Vercel, VERCEL_URL is set automatically (e.g. my-app.vercel.app).
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://talentvector.com";
}
