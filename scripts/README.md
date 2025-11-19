# 🛠️ Sitemap Scripts

This folder contains utility scripts for testing and validating your sitemap structure.

## Scripts

### 1. `validate-sitemaps.js`

Validates that all sitemap routes are accessible and properly formatted.

**Usage:**
```bash
# Start dev server first
npm run dev

# In another terminal
npm run validate-sitemaps
```

**What it checks:**
- ✅ HTTP status codes (should be 200)
- ✅ Content-Type headers (should be application/xml)
- ✅ Valid XML structure
- ✅ Number of URLs in each sitemap
- ✅ File size of generated sitemaps

**Example output:**
```
🔍 Validating sitemaps...

Testing against: http://localhost:3000

Testing all sitemap routes:

✅ /sitemap.xml
   Status: 200
   Content-Type: application/xml
   URLs: 2
   Size: 0.45 KB

✅ /sitemap-0.xml
   Status: 200
   Content-Type: application/xml
   URLs: 5
   Size: 1.23 KB

✅ /sitemap-1.xml
   Status: 200
   Content-Type: application/xml
   URLs: 1
   Size: 0.56 KB

✅ All sitemaps validated successfully!
```

### 2. `generate-sitemap-report.js`

Generates a detailed report of all URLs in your sitemaps.

**Usage:**
```bash
# For production
npm run sitemap-report

# For local testing
BASE_URL=http://localhost:3000 npm run sitemap-report
```

**What it shows:**
- 📊 List of all child sitemaps
- 🔗 Complete list of URLs
- ⚡ Priority values
- 🔄 Change frequencies
- 📈 Total URL count

**Example output:**
```
📊 Sitemap Report Generator

Base URL: https://helxon.com

Fetching sitemap index...

✅ Found 2 child sitemaps

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 https://helxon.com/sitemap-0.xml
   URLs: 5

   1. https://helxon.com
      Priority: 1.0
      Change Frequency: weekly

   2. https://helxon.com/vorxoc
      Priority: 0.9
      Change Frequency: monthly

   3. https://helxon.com/about-us
      Priority: 0.8
      Change Frequency: monthly

   4. https://helxon.com/contact-us
      Priority: 0.7
      Change Frequency: monthly

   5. https://helxon.com/faq
      Priority: 0.6
      Change Frequency: monthly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 https://helxon.com/sitemap-1.xml
   URLs: 1

   1. https://helxon.com/blogs
      Priority: 0.8
      Change Frequency: weekly

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


✅ Total URLs across all sitemaps: 6

📝 Report generated successfully!
```

## When to Use These Scripts

### During Development
- Run `validate-sitemaps` after making changes to sitemap routes
- Use it to verify your sitemap structure before committing

### Before Deployment
- Run `validate-sitemaps` to ensure all routes work correctly
- Run `sitemap-report` to review all URLs that will be submitted to search engines

### After Deployment
- Run `sitemap-report` against production to verify deployment
- Use it to generate documentation of your sitemap structure

### In CI/CD Pipeline
Add these scripts to your CI/CD pipeline for automated validation:

```yaml
# Example GitHub Actions
- name: Validate Sitemaps
  run: |
    npm run dev &
    sleep 5
    npm run validate-sitemaps
```

## Troubleshooting

### "Connection refused" Error
**Problem:** Dev server is not running  
**Solution:** Start the dev server first: `npm run dev`

### "Response is not valid XML" Error
**Problem:** Sitemap route is returning invalid XML  
**Solution:** Check your route handler for syntax errors

### Empty URL Count
**Problem:** No URLs found in sitemap  
**Solution:** Verify your sitemap route is generating URL entries correctly

## Adding More Sitemaps

When you add new sitemap routes (e.g., `sitemap-2.xml`, `sitemap-3.xml`), update the `sitemaps` array in `validate-sitemaps.js`:

```javascript
const sitemaps = [
  '/sitemap.xml',      // Sitemap index
  '/sitemap-0.xml',    // Static pages
  '/sitemap-1.xml',    // Blog pages
  '/sitemap-2.xml',    // Your new sitemap
];
```

## Contributing

If you add new validation checks or improve the scripts, please update this README accordingly.

