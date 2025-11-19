# 🚀 Netlify Deployment Guide for Next.js with Sitemaps

## ✅ Files Created

- `netlify.toml` - Netlify configuration for proper Next.js routing and sitemap handling

## 📋 Deployment Steps

### 1. Push Your Code to Repository

```bash
# Add all changes including netlify.toml
git add .

# Commit
git commit -m "Add Netlify configuration and fix sitemap Content-Type headers"

# Push to main
git push origin main
```

### 2. Configure Netlify (First Time Setup)

If this is your first deployment:

1. **Go to Netlify Dashboard**: https://app.netlify.com/
2. **Click "Add new site" → "Import an existing project"**
3. **Connect your Git repository** (GitHub, GitLab, or Bitbucket)
4. **Build Settings** (Netlify should auto-detect these):
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `20` (set in Environment Variables)

5. **Deploy site**

### 3. Environment Variables (If Needed)

Go to **Site settings → Environment variables** and add:

```
NODE_VERSION = 20
```

If you have any other environment variables (like API keys), add them here.

### 4. Install Next.js Plugin (Automatic)

Netlify should automatically detect and install `@netlify/plugin-nextjs`. 

**To verify:**
- Go to **Site settings → Plugins**
- You should see "Next.js Runtime" installed
- If not, click "Install plugin" and search for "Next.js Runtime"

### 5. Verify Deployment

After deployment completes:

#### Check Build Logs
Look for:
```
✅ Build complete! Sitemaps are generated at /sitemap.xml
```

#### Test Sitemaps
Open these URLs in your browser:
- `https://helxon.com/sitemap.xml`
- `https://helxon.com/sitemap-0.xml`
- `https://helxon.com/sitemap-1.xml`

All should return XML (not 404 or 502 errors).

#### Verify Content-Type Headers
```bash
curl -I https://helxon.com/sitemap.xml
```

Should show:
```
Content-Type: application/xml; charset=utf-8
```

### 6. Validate Sitemaps

**XML Validator:**
- https://xml-sitemaps.com/validate-xml-sitemap.html
- Enter: `https://helxon.com/sitemap.xml`
- Should show: ✅ **"Sitemap is valid: Yes"**

**Google Search Console:**
1. Go to **Sitemaps** section
2. Submit: `https://helxon.com/sitemap.xml`
3. Wait 1-2 days for Google to process

## 🔧 Troubleshooting

### Issue: 502 Bad Gateway on Sitemaps

**Problem:** Netlify can't handle Next.js route handlers  
**Solution:** 
- Ensure `netlify.toml` is committed and pushed
- Redeploy the site
- Check that Next.js Runtime plugin is installed

### Issue: Content-Type is text/html

**Problem:** Headers not properly set  
**Solution:**
- Verify `netlify.toml` headers configuration
- Clear Netlify cache: **Site settings → Build & deploy → Clear cache and retry deploy**

### Issue: Sitemaps return 404

**Problem:** Routes not properly handled  
**Solution:**
- Check build logs for errors
- Ensure all sitemap route files exist in `src/app/sitemap*.xml/route.js`
- Verify Next.js build completed successfully

### Issue: Old version still showing

**Problem:** CDN cache  
**Solution:**
- Go to **Site settings → Build & deploy → Post processing**
- Click **Clear cache**
- Redeploy

## 📊 Netlify Configuration Explained

### `netlify.toml` Breakdown

```toml
[build]
  command = "npm run build"    # Build command
  publish = ".next"            # Next.js output directory

[[plugins]]
  package = "@netlify/plugin-nextjs"  # Enables Next.js features

[[headers]]
  for = "/sitemap*.xml"
  [headers.values]
    Content-Type = "application/xml; charset=utf-8"  # Fix Content-Type
    Cache-Control = "public, max-age=3600"           # Cache for 1 hour
```

## ✅ Post-Deployment Checklist

After successful deployment:

- [ ] All pages load correctly
- [ ] Sitemaps return XML (not 404/502)
- [ ] Content-Type headers are `application/xml`
- [ ] XML validation passes
- [ ] Google Analytics tracking works
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor indexing in Search Console

## 🔄 Future Deployments

Every time you push to `main`:
1. Netlify automatically detects changes
2. Runs `npm run build`
3. Deploys new version
4. Sitemaps are regenerated automatically
5. CDN cache updates

## 📝 Important Notes

### Automatic Sitemap Generation
- Sitemaps are **automatically generated** during `npm run build`
- Next.js executes the route handlers at build time
- No manual generation needed

### Custom Domain
If using a custom domain:
1. Go to **Site settings → Domain management**
2. Add custom domain: `helxon.com`
3. Configure DNS records as instructed by Netlify
4. Wait for SSL certificate (automatic)

### Build Time
- Typical build: 2-5 minutes
- First build may take longer

## 🎉 You're All Set!

Your Next.js site with sitemaps is now properly configured for Netlify!

**Next Steps:**
1. Push code with `netlify.toml`
2. Wait for automatic deployment
3. Verify sitemaps work
4. Submit to Google Search Console

---

**Need Help?**
- Netlify Docs: https://docs.netlify.com/frameworks/next-js/overview/
- Check build logs in Netlify dashboard
- Review `netlify.toml` configuration

