# Contentful CMS Setup Guide

This guide will help you set up Contentful CMS for the Helxon blogs page.

## Prerequisites

- A Contentful account (sign up at [contentful.com](https://www.contentful.com))
- Access to your Contentful space

## Step 1: Create a Contentful Space

1. Log in to your Contentful account
2. Create a new space or use an existing one
3. Navigate to your space settings

## Step 2: Create the Blog Post Content Model

1. Go to **Content model** in your Contentful space
2. Click **Add content type**
3. Name it `Blog Post` with ID `blogPost`
4. Add the following fields:

### Required Fields:

| Field Name | Field ID | Field Type | Description |
|------------|----------|------------|-------------|
| Title | `title` | Short text | Blog post title |
| Slug | `slug` | Short text | URL-friendly slug (unique) |
| Excerpt | `excerpt` | Long text | Brief summary of the post |
| Content | `content` | Rich text | Full blog post content |
| Featured Image | `featuredImage` | Media (Image) | Blog post thumbnail |
| Category | `category` | Short text | Blog category/tag |
| Read Time | `readTime` | Number (Integer) | Estimated reading time in minutes |
| Author | `author` | Short text | Author name |
| Published Date | `publishedDate` | Date & time | Publication date |

### Optional Fields:
- Tags (Short text, multiple values)
- Meta Description (Short text)
- SEO Keywords (Short text, multiple values)

## Step 3: Get Your API Keys

1. Go to **Settings > API keys** in your Contentful space
2. Click **Add API key** or use the default "Example space token 1"
3. Copy the following values:
   - **Space ID**
   - **Content Delivery API - access token**

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your Contentful credentials:

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id_here
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

**Important:** Replace `your_space_id_here` and `your_access_token_here` with your actual Contentful credentials.

## Step 5: Add Sample Content

1. Go to **Content** in your Contentful space
2. Click **Add entry** and select **Blog Post**
3. Fill in all required fields:
   - Title: e.g., "Introduction to SOC-as-a-Service"
   - Slug: e.g., "introduction-to-soc-as-a-service"
   - Excerpt: A brief summary (2-3 sentences)
   - Content: Full blog post content
   - Featured Image: Upload an image
   - Category: e.g., "Cybersecurity"
   - Read Time: e.g., 5
   - Author: Your name
   - Published Date: Today's date
4. Click **Publish**
5. Repeat to add more blog posts

## Step 6: Test Your Setup

1. Restart your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/blogs`
3. You should see your blog posts displayed in a grid layout

## Content Model Structure

The Contentful client utility (`src/lib/contentful.js`) expects the following structure:

```javascript
{
  sys: {
    id: "unique-id",
    createdAt: "2024-01-01T00:00:00.000Z"
  },
  fields: {
    title: "Blog Post Title",
    slug: "blog-post-slug",
    excerpt: "Brief summary...",
    content: "Full content...",
    featuredImage: {
      fields: {
        file: {
          url: "//images.ctfassets.net/..."
        }
      }
    },
    category: "Category Name",
    readTime: 5,
    author: "Author Name",
    publishedDate: "2024-01-01T00:00:00.000Z"
  }
}
```

## Features Implemented

✅ Dynamic blog listing from Contentful CMS
✅ Responsive grid layout matching FAQ page theme
✅ Featured images with hover effects
✅ Category badges
✅ Read time estimates
✅ Publication dates
✅ Loading states
✅ Error handling
✅ Empty state message
✅ Navigation integration (Company dropdown)
✅ Smooth animations with Framer Motion

## Troubleshooting

### "Failed to load blog posts"
- Check your environment variables are correct
- Ensure your Contentful space ID and access token are valid
- Verify your content type ID is `blogPost` (case-sensitive)

### "No blog posts available"
- Ensure you have published at least one blog post in Contentful
- Check that all required fields are filled in
- Verify the content type ID matches `blogPost`

### Images not loading
- Ensure the `featuredImage` field is properly configured
- Check that images are uploaded and published in Contentful
- Verify the image URL format: `https:${blog.fields.featuredImage.fields.file.url}`

## Next Steps

You can extend the blogs functionality by:
- Creating individual blog post pages (`/blogs/[slug]`)
- Adding pagination for large numbers of posts
- Implementing search and filtering
- Adding related posts functionality
- Creating author profile pages
- Adding social sharing buttons

## Support

For more information about Contentful, visit:
- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Contentful JavaScript SDK](https://github.com/contentful/contentful.js)

