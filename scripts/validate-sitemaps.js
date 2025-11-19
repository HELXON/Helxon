#!/usr/bin/env node

/**
 * Sitemap Validation Script
 * Validates that all sitemap routes are accessible and properly formatted
 */

const http = require('http');

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

const sitemaps = [
  '/sitemap.xml',      // Sitemap index
  '/sitemap-0.xml',    // Static pages
  '/sitemap-1.xml',    // Blog pages
];

console.log('🔍 Validating sitemaps...\n');
console.log(`Testing against: ${BASE_URL}\n`);

async function validateSitemap(path) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}${path}`;
    
    http.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          const isXML = data.includes('<?xml') && (
            data.includes('<urlset') || data.includes('<sitemapindex')
          );
          
          if (isXML) {
            const urlCount = (data.match(/<loc>/g) || []).length;
            resolve({
              path,
              status: 'success',
              statusCode: res.statusCode,
              contentType: res.headers['content-type'],
              urlCount,
              size: data.length,
            });
          } else {
            resolve({
              path,
              status: 'error',
              message: 'Response is not valid XML',
              statusCode: res.statusCode,
            });
          }
        } else {
          resolve({
            path,
            status: 'error',
            message: `HTTP ${res.statusCode}`,
            statusCode: res.statusCode,
          });
        }
      });
    }).on('error', (err) => {
      resolve({
        path,
        status: 'error',
        message: err.message,
      });
    });
  });
}

async function validateAll() {
  console.log('Testing all sitemap routes:\n');
  
  const results = await Promise.all(
    sitemaps.map(sitemap => validateSitemap(sitemap))
  );
  
  let hasErrors = false;
  
  results.forEach(result => {
    if (result.status === 'success') {
      console.log(`✅ ${result.path}`);
      console.log(`   Status: ${result.statusCode}`);
      console.log(`   Content-Type: ${result.contentType}`);
      console.log(`   URLs: ${result.urlCount}`);
      console.log(`   Size: ${(result.size / 1024).toFixed(2)} KB\n`);
    } else {
      hasErrors = true;
      console.log(`❌ ${result.path}`);
      console.log(`   Error: ${result.message}\n`);
    }
  });
  
  if (hasErrors) {
    console.log('\n❌ Some sitemaps failed validation');
    console.log('\nMake sure your dev server is running:');
    console.log('  npm run dev\n');
    process.exit(1);
  } else {
    console.log('✅ All sitemaps validated successfully!\n');
    process.exit(0);
  }
}

validateAll();

