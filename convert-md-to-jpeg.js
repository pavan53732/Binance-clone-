const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const puppeteer = require('puppeteer');

// Dark theme CSS matching Binance style
const darkThemeCSS = `
  :root {
    --bg-primary: #0B0E11;
    --bg-secondary: #1E2329;
    --bg-tertiary: #2B3139;
    --text-primary: #EAECEF;
    --text-secondary: #848E9C;
    --accent-yellow: #F0B90B;
    --accent-green: #0ECB81;
    --accent-red: #F6465D;
    --border-color: #2B3139;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html {
    background-color: var(--bg-primary);
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    padding: 40px 60px;
    margin: 0;
    line-height: 1.7;
    max-width: 1200px;
    min-width: 800px;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: var(--text-primary);
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
  
  h1 {
    font-size: 2em;
    padding-bottom: 0.3em;
    border-bottom: 2px solid var(--accent-yellow);
    color: var(--accent-yellow);
  }
  
  h2 {
    font-size: 1.5em;
    padding-bottom: 0.3em;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-primary);
  }
  
  h3 {
    font-size: 1.25em;
    color: var(--text-primary);
  }
  
  h4 {
    font-size: 1em;
    color: var(--text-secondary);
  }
  
  p {
    margin: 0 0 16px 0;
    color: var(--text-primary);
  }
  
  a {
    color: var(--accent-yellow);
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  code {
    background-color: var(--bg-tertiary);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.9em;
    color: var(--accent-green);
  }
  
  pre {
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 16px;
    overflow-x: auto;
    margin: 16px 0;
  }
  
  pre code {
    background-color: transparent;
    padding: 0;
    color: var(--text-primary);
  }
  
  blockquote {
    border-left: 4px solid var(--accent-yellow);
    padding: 0 16px;
    margin: 16px 0;
    color: var(--text-secondary);
    background-color: var(--bg-secondary);
    border-radius: 0 8px 8px 0;
    padding: 16px;
  }
  
  ul, ol {
    padding-left: 2em;
    margin: 0 0 16px 0;
  }
  
  li {
    margin: 4px 0;
    color: var(--text-primary);
  }
  
  li::marker {
    color: var(--accent-yellow);
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 16px 0;
    background-color: var(--bg-secondary);
    border-radius: 8px;
    overflow: hidden;
  }
  
  th, td {
    border: 1px solid var(--border-color);
    padding: 12px 16px;
    text-align: left;
  }
  
  th {
    background-color: var(--bg-tertiary);
    color: var(--accent-yellow);
    font-weight: 600;
  }
  
  td {
    color: var(--text-primary);
  }
  
  tr:nth-child(even) {
    background-color: var(--bg-primary);
  }
  
  hr {
    border: none;
    border-top: 1px solid var(--border-color);
    margin: 24px 0;
  }
  
  img {
    max-width: 100%;
    border-radius: 8px;
  }
  
  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
  
  em {
    color: var(--text-secondary);
  }
  
  /* Custom classes for better visibility */
  .highlight {
    background-color: var(--bg-tertiary);
    padding: 16px;
    border-radius: 8px;
    border-left: 4px solid var(--accent-yellow);
    margin: 16px 0;
  }
  
  .warning {
    border-left-color: var(--accent-red);
  }
  
  .success {
    border-left-color: var(--accent-green);
  }
`;

// List of markdown files to convert
const markdownFiles = [
  '01-colors-theme.md',
  '02-typography.md',
  '03-dimensions-spacing.md',
  '04-screens-layouts.md',
  '05-components.md',
  '06-navigation.md',
  '07-drawables-icons.md',
  '08-strings-content.md',
  '09-animations.md',
  '10-complete-ui-specification.md',
  '11-logo-icon-specifications.md',
  '12-button-specifications.md',
  '13-screen-flows-navigation.md',
  '14-features-functions.md',
  '15-transaction-history.md',
  '16-swap-feature.md',
  '17-input-fields.md',
  '18-cards-lists.md',
  '19-dialogs-bottom-sheets.md',
  '20-complete-screen-catalog.md'
];

// Maximum viewport height (Chrome's limit is around 16384px)
const MAX_VIEWPORT_HEIGHT = 16000;
const DEFAULT_VIEWPORT_HEIGHT = 2000;

async function convertMarkdownToJPEG(browser, mdFilePath, outputFilePath) {
  console.log(`Converting: ${mdFilePath} -> ${outputFilePath}`);
  
  // Read markdown content
  const mdContent = fs.readFileSync(mdFilePath, 'utf-8');
  
  // Convert markdown to HTML
  const htmlContent = marked(mdContent);
  
  // Create full HTML document with dark theme
  const fullHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${darkThemeCSS}</style>
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `;
  
  // Create new page
  const page = await browser.newPage();
  
  try {
    // Set initial viewport with reasonable height
    await page.setViewport({ 
      width: 1200, 
      height: DEFAULT_VIEWPORT_HEIGHT 
    });
    
    // Set content
    await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
    
    // Get content dimensions
    const bodyHandle = await page.$('body');
    const boundingBox = await bodyHandle.boundingBox();
    await bodyHandle.dispose();
    
    // Calculate the actual content height, capping at maximum
    const contentHeight = boundingBox ? Math.min(Math.ceil(boundingBox.height) + 100, MAX_VIEWPORT_HEIGHT) : DEFAULT_VIEWPORT_HEIGHT;
    
    // Take screenshot as JPEG with full page option
    await page.screenshot({
      path: outputFilePath,
      type: 'jpeg',
      quality: 95,
      fullPage: true
    });
    
    console.log(`  ✓ Created: ${outputFilePath} (height: ${contentHeight}px)`);
  } finally {
    await page.close();
  }
}

async function main() {
  const docsDir = path.join(__dirname, 'docs');
  
  console.log('Starting Markdown to JPEG conversion...\n');
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--window-size=1200,16000'
    ]
  });
  
  try {
    let successCount = 0;
    let failCount = 0;
    
    for (const mdFile of markdownFiles) {
      const mdPath = path.join(docsDir, mdFile);
      const jpgFile = mdFile.replace('.md', '.jpg');
      const jpgPath = path.join(docsDir, jpgFile);
      
      // Check if markdown file exists
      if (!fs.existsSync(mdPath)) {
        console.log(`  ✗ Skipping: ${mdFile} (not found)`);
        failCount++;
        continue;
      }
      
      try {
        await convertMarkdownToJPEG(browser, mdPath, jpgPath);
        successCount++;
      } catch (error) {
        console.log(`  ✗ Error converting ${mdFile}: ${error.message}`);
        failCount++;
      }
    }
    
    console.log('\n-----------------------------------');
    console.log(`Conversion complete!`);
    console.log(`  Successful: ${successCount}`);
    console.log(`  Failed: ${failCount}`);
    console.log('-----------------------------------');
    
  } finally {
    await browser.close();
  }
}

main().catch(console.error);
