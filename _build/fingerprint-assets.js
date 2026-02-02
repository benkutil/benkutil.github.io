const crypto = require('crypto');
const fs = require('fs').promises;
const path = require('path');

/**
 * Generate hash for file content
 * @param {string} content - File content
 * @returns {string} Hash string (first 8 characters)
 */
function generateHash(content) {
  return crypto.createHash('md5').update(content).digest('hex').substring(0, 8);
}

/**
 * Add cache-busting hash to CSS files in production
 * @param {string} outputDir - Output directory path
 * @returns {Object} Mapping of original filenames to hashed filenames
 */
async function fingerprintAssets(outputDir = '_site/css') {
  const cssDir = path.join(__dirname, '..', outputDir);
  const assetMap = {};
  
  try {
    const files = await fs.readdir(cssDir);
    // Only fingerprint original CSS files (not already hashed ones or manifest)
    const cssFiles = files.filter(file => 
      file.endsWith('.css') && 
      !file.includes('.css.') &&
      !/\.[a-f0-9]{8}\.css$/.test(file) &&
      file !== 'asset-manifest.json'
    );
    
    for (const file of cssFiles) {
      const filePath = path.join(cssDir, file);
      const content = await fs.readFile(filePath, 'utf8');
      const hash = generateHash(content);
      
      // Generate new filename with hash
      const ext = path.extname(file);
      const basename = path.basename(file, ext);
      const hashedFilename = `${basename}.${hash}${ext}`;
      const hashedPath = path.join(cssDir, hashedFilename);
      
      // Copy file with hashed name (keep original for compatibility)
      await fs.writeFile(hashedPath, content);
      
      assetMap[file] = hashedFilename;
      console.log(`✓ Fingerprinted: ${file} → ${hashedFilename}`);
    }
    
    // Save asset map for reference
    const mapPath = path.join(cssDir, 'asset-manifest.json');
    await fs.writeFile(mapPath, JSON.stringify(assetMap, null, 2));
    
    return assetMap;
  } catch (error) {
    console.error('Error fingerprinting assets:', error);
    return {};
  }
}

module.exports = { fingerprintAssets, generateHash };

// Allow running directly
if (require.main === module) {
  fingerprintAssets().catch(console.error);
}
