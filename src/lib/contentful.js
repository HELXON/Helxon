import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: '5j4kelqums2p',
  accessToken: 'QyNnKFv4SKhp2HoLRHpLVEyu9Png0HDx_mzvZzS7wZA',
});

/**
 * Fetch all blog posts from Contentful
 * @returns {Promise<Array>} Array of blog post entries
 */
export async function getBlogPosts() {
  try {
    const entries = await client.getEntries({
      content_type: 'cyberSecurityBlog', // Make sure this matches your Contentful content type ID
      order: '-sys.createdAt', // Sort by newest first
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug
 * @param {string} slug - The blog post slug
 * @returns {Promise<Object|null>} Blog post entry or null
 */
export async function getBlogPostBySlug(slug) {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}

