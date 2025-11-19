// Blog Posts Sitemap
// This sitemap can be expanded to include dynamic blog posts from Contentful
export async function GET() {
  const baseUrl = 'https://helxon.com';
  
  const blogPages = [
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Add individual blog posts here when fetching from Contentful
    // Example:
    // {
    //   url: `${baseUrl}/blogs/blog-post-slug`,
    //   lastModified: new Date(post.updatedAt),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

