const fs = require("fs").promises;
const path = require("path");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

async function processCSS() {
  const inputDir = path.join(__dirname, "../src/css");
  const outputDir = path.join(__dirname, "../_site/css");

  // Ensure output directory exists
  await fs.mkdir(outputDir, { recursive: true });

  // Read all CSS files in input directory
  const files = await fs.readdir(inputDir);
  const cssFiles = files.filter((file) => file.endsWith(".css"));

  for (const file of cssFiles) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    // Read CSS content
    const css = await fs.readFile(inputPath, "utf8");

    // Only process in production mode
    if (process.env.ELEVENTY_ENV === "production") {
      // Process with PostCSS
      const result = await postcss([autoprefixer, cssnano({ preset: "default" })]).process(css, {
        from: inputPath,
        to: outputPath,
      });

      // Write processed CSS
      await fs.writeFile(outputPath, result.css);

      if (result.map) {
        await fs.writeFile(outputPath + ".map", result.map.toString());
      }

      console.log(`✓ Processed CSS: ${file} (minified)`);
    } else {
      // In development, just copy the file
      await fs.writeFile(outputPath, css);
      console.log(`✓ Copied CSS: ${file}`);
    }
  }
}

module.exports = processCSS;

// Allow running directly
if (require.main === module) {
  processCSS().catch(console.error);
}
