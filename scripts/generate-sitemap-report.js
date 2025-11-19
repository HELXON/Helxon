#!/usr/bin/env node

/**
 * Sitemap Report Generator
 * Generates a detailed report of all URLs in your sitemaps
 * Run after build to verify all routes are included
 */

const https = require('https');
const http = require('http');

const BASE_URL = process.env.BASE_URL || 'https://helxon.com';
const protocol = BASE_URL.startsWith('https') ? https : http;

// Agent to ignore SSL certificate errors (for development only)
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

async function fetchSitemap(url) {
  return new Promise((resolve, reject) => {
    const options = BASE_URL.startsWith('https') ? { agent: httpsAgent } : {};
    
    protocol.get(url, options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

function parseSitemapIndex(xml) {
  const sitemapRegex = /<loc>(.*?)<\/loc>/g;
  const matches = [];
  let match;
  
  while ((match = sitemapRegex.exec(xml)) !== null) {
    matches.push(match[1]);
  }
  
  return matches;
}

function parseUrlSet(xml) {
  const urlPattern = /<url>([\s\S]*?)<\/url>/g;
  const urls = [];
  let match;
  
  while ((match = urlPattern.exec(xml)) !== null) {
    const urlBlock = match[1];
    const loc = /<loc>(.*?)<\/loc>/.exec(urlBlock)?.[1];
    const lastmod = /<lastmod>(.*?)<\/lastmod>/.exec(urlBlock)?.[1];
    const priority = /<priority>(.*?)<\/priority>/.exec(urlBlock)?.[1];
    const changefreq = /<changefreq>(.*?)<\/changefreq>/.exec(urlBlock)?.[1];
    
    if (loc) {
      urls.push({ loc, lastmod, priority, changefreq });
    }
  }
  
  return urls;
}

async function generateReport() {
  console.log('📊 Sitemap Report Generator\n');
  console.log(`Base URL: ${BASE_URL}\n`);
  
  if (!BASE_URL.startsWith('http://localhost')) {
    console.log('💡 Tip: For local testing, use:');
    console.log('   BASE_URL=http://localhost:3000 npm run sitemap-report\n');
  }
  
  console.log('Fetching sitemap index...\n');
  
  try {
    // Fetch sitemap index
    const indexXml = await fetchSitemap(`${BASE_URL}/sitemap.xml`);
    const childSitemaps = parseSitemapIndex(indexXml);
    
    console.log(`✅ Found ${childSitemaps.length} child sitemaps\n`);
    console.log('━'.repeat(60) + '\n');
    
    let totalUrls = 0;
    
    // Fetch each child sitemap
    for (const sitemapUrl of childSitemaps) {
      console.log(`📄 ${sitemapUrl}`);
      
      try {
        const sitemapXml = await fetchSitemap(sitemapUrl);
        const urls = parseUrlSet(sitemapXml);
        
        console.log(`   URLs: ${urls.length}\n`);
        
        urls.forEach((url, index) => {
          console.log(`   ${index + 1}. ${url.loc}`);
          if (url.priority) console.log(`      Priority: ${url.priority}`);
          if (url.changefreq) console.log(`      Change Frequency: ${url.changefreq}`);
          console.log('');
        });
        
        totalUrls += urls.length;
      } catch (error) {
        console.log(`   ❌ Error: ${error.message}\n`);
      }
      
      console.log('━'.repeat(60) + '\n');
    }
    
    console.log(`\n✅ Total URLs across all sitemaps: ${totalUrls}`);
    console.log(`\n📝 Report generated successfully!\n`);
    
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}\n`);
    
    if (error.message.includes('certificate') || error.message.includes('SSL') || error.message.includes('ECONNREFUSED')) {
      console.log('💡 This usually means:');
      console.log('   1. The production site is not deployed yet, or');
      console.log('   2. There are SSL certificate issues, or');
      console.log('   3. The site is not accessible from your network\n');
      console.log('✅ Solution: Test locally instead:');
      console.log('   npm run dev');
      console.log('   BASE_URL=http://localhost:3000 npm run sitemap-report\n');
    }
    
    process.exit(1);
  }
}

// Add a note about SSL
if (BASE_URL.startsWith('https') && !BASE_URL.includes('localhost')) {
  console.log('⚠️  Note: SSL certificate validation is disabled for this script.');
  console.log('   This is normal for development. For production validation,');
  console.log('   test using Google Search Console or online XML validators.\n');
}

generateReport();

