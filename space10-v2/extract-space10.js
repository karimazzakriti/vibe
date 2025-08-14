const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function extractSpace10() {
  console.log('🚀 Starting space10.com extraction...');
  
  // Create extraction directory
  const extractDir = path.join(__dirname, 'extracted');
  if (!fs.existsSync(extractDir)) {
    fs.mkdirSync(extractDir, { recursive: true });
  }

  // Launch browser
  const browser = await chromium.launch({ 
    headless: false, // Set to true for production
    devtools: true 
  });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  try {
    console.log('📡 Navigating to space10.com...');
    await page.goto('https://space10.com', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });

    // Wait for full page load and any dynamic content
    console.log('⏳ Waiting for page to fully load...');
    await page.waitForTimeout(5000);

    // Extract HTML structure
    console.log('📄 Extracting HTML structure...');
    const htmlContent = await page.content();
    fs.writeFileSync(path.join(extractDir, 'full-page.html'), htmlContent, 'utf8');

    // Extract outer HTML with all computed styles
    console.log('🎨 Extracting HTML with computed styles...');
    const htmlWithStyles = await page.evaluate(() => {
      const html = document.documentElement.outerHTML;
      return html;
    });
    fs.writeFileSync(path.join(extractDir, 'page-with-styles.html'), htmlWithStyles, 'utf8');

    // Extract all CSS styles
    console.log('🎨 Extracting all CSS stylesheets...');
    const allCSS = await page.evaluate(() => {
      const styles = [];
      
      // Get all stylesheets
      Array.from(document.styleSheets).forEach((styleSheet, index) => {
        try {
          let css = '';
          Array.from(styleSheet.cssRules).forEach(rule => {
            css += rule.cssText + '\n';
          });
          styles.push({
            index: index,
            href: styleSheet.href,
            css: css
          });
        } catch (e) {
          console.log('Could not access stylesheet:', styleSheet.href);
        }
      });

      // Get all inline styles
      const inlineStyles = [];
      document.querySelectorAll('[style]').forEach((el, index) => {
        inlineStyles.push({
          element: el.tagName + (el.className ? '.' + el.className : '') + (el.id ? '#' + el.id : ''),
          style: el.getAttribute('style')
        });
      });

      return { stylesheets: styles, inlineStyles: inlineStyles };
    });

    // Save CSS data
    fs.writeFileSync(path.join(extractDir, 'all-styles.json'), JSON.stringify(allCSS, null, 2), 'utf8');

    // Create combined CSS file
    let combinedCSS = '/* Extracted CSS from space10.com */\n\n';
    allCSS.stylesheets.forEach(sheet => {
      combinedCSS += `/* Stylesheet: ${sheet.href || 'inline'} */\n`;
      combinedCSS += sheet.css + '\n\n';
    });
    fs.writeFileSync(path.join(extractDir, 'combined-styles.css'), combinedCSS, 'utf8');

    // Extract all computed styles for each element
    console.log('🧮 Extracting computed styles...');
    const computedStyles = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const computedData = [];
      
      elements.forEach((el, index) => {
        if (index > 200) return; // Limit for performance
        
        const computed = window.getComputedStyle(el);
        const importantStyles = {};
        
        // Extract key CSS properties
        const keyProps = [
          'display', 'position', 'width', 'height', 'margin', 'padding',
          'color', 'background', 'font-family', 'font-size', 'font-weight',
          'border', 'border-radius', 'box-shadow', 'transform', 'transition',
          'flex', 'grid', 'z-index', 'opacity'
        ];
        
        keyProps.forEach(prop => {
          const value = computed.getPropertyValue(prop);
          if (value && value !== 'initial' && value !== 'normal') {
            importantStyles[prop] = value;
          }
        });

        computedData.push({
          selector: el.tagName.toLowerCase() + 
                   (el.className ? '.' + Array.from(el.classList).join('.') : '') +
                   (el.id ? '#' + el.id : ''),
          styles: importantStyles
        });
      });
      
      return computedData;
    });

    fs.writeFileSync(path.join(extractDir, 'computed-styles.json'), JSON.stringify(computedStyles, null, 2), 'utf8');

    // Extract all JavaScript
    console.log('📜 Extracting JavaScript...');
    const scripts = await page.evaluate(() => {
      const scriptData = [];
      
      document.querySelectorAll('script').forEach((script, index) => {
        scriptData.push({
          index: index,
          src: script.src,
          content: script.innerHTML,
          type: script.type,
          async: script.async,
          defer: script.defer
        });
      });
      
      return scriptData;
    });

    fs.writeFileSync(path.join(extractDir, 'scripts.json'), JSON.stringify(scripts, null, 2), 'utf8');

    // Extract page structure and classes
    console.log('🏗️ Extracting page structure...');
    const pageStructure = await page.evaluate(() => {
      const extractElement = (element, depth = 0) => {
        if (depth > 10) return null; // Prevent infinite recursion
        
        return {
          tag: element.tagName.toLowerCase(),
          id: element.id,
          classes: Array.from(element.classList),
          attributes: Array.from(element.attributes).reduce((acc, attr) => {
            acc[attr.name] = attr.value;
            return acc;
          }, {}),
          text: element.childNodes.length === 1 && element.firstChild?.nodeType === 3 
                ? element.textContent.trim() : null,
          children: Array.from(element.children).map(child => extractElement(child, depth + 1)).filter(Boolean)
        };
      };
      
      return extractElement(document.body);
    });

    fs.writeFileSync(path.join(extractDir, 'page-structure.json'), JSON.stringify(pageStructure, null, 2), 'utf8');

    // Extract all CSS classes used
    console.log('📝 Extracting all CSS classes...');
    const allClasses = await page.evaluate(() => {
      const classes = new Set();
      document.querySelectorAll('*').forEach(el => {
        el.classList.forEach(cls => classes.add(cls));
      });
      return Array.from(classes).sort();
    });

    fs.writeFileSync(path.join(extractDir, 'all-classes.json'), JSON.stringify(allClasses, null, 2), 'utf8');

    // Extract interactive elements and event handlers
    console.log('⚡ Extracting interactive elements...');
    const interactiveElements = await page.evaluate(() => {
      const interactive = [];
      
      // Find clickable elements
      document.querySelectorAll('button, a, [onclick], [role="button"]').forEach(el => {
        interactive.push({
          type: 'clickable',
          tag: el.tagName,
          classes: Array.from(el.classList),
          id: el.id,
          text: el.textContent.trim(),
          href: el.href || null,
          onclick: el.getAttribute('onclick') || null
        });
      });

      // Find form elements
      document.querySelectorAll('input, select, textarea, form').forEach(el => {
        interactive.push({
          type: 'form',
          tag: el.tagName,
          inputType: el.type || null,
          name: el.name || null,
          id: el.id,
          classes: Array.from(el.classList)
        });
      });

      return interactive;
    });

    fs.writeFileSync(path.join(extractDir, 'interactive-elements.json'), JSON.stringify(interactiveElements, null, 2), 'utf8');

    // Extract theme/color information
    console.log('🎨 Extracting color theme...');
    const colorTheme = await page.evaluate(() => {
      const colors = new Set();
      const elements = document.querySelectorAll('*');
      
      elements.forEach(el => {
        const computed = window.getComputedStyle(el);
        const color = computed.color;
        const bgColor = computed.backgroundColor;
        const borderColor = computed.borderColor;
        
        if (color && color !== 'rgba(0, 0, 0, 0)') colors.add(color);
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') colors.add(bgColor);
        if (borderColor && borderColor !== 'rgba(0, 0, 0, 0)') colors.add(borderColor);
      });
      
      return Array.from(colors);
    });

    fs.writeFileSync(path.join(extractDir, 'color-theme.json'), JSON.stringify(colorTheme, null, 2), 'utf8');

    // Take screenshot
    console.log('📸 Taking screenshot...');
    await page.screenshot({ 
      path: path.join(extractDir, 'space10-screenshot.png'), 
      fullPage: true 
    });

    // Extract font information
    console.log('🔤 Extracting font information...');
    const fontInfo = await page.evaluate(() => {
      const fonts = new Set();
      document.querySelectorAll('*').forEach(el => {
        const computed = window.getComputedStyle(el);
        const fontFamily = computed.fontFamily;
        const fontSize = computed.fontSize;
        const fontWeight = computed.fontWeight;
        
        if (fontFamily) {
          fonts.add(`${fontFamily} | ${fontSize} | ${fontWeight}`);
        }
      });
      
      return Array.from(fonts);
    });

    fs.writeFileSync(path.join(extractDir, 'fonts.json'), JSON.stringify(fontInfo, null, 2), 'utf8');

    console.log('✅ Extraction complete! Files saved to:', extractDir);
    console.log('📁 Extracted files:');
    console.log('  - full-page.html - Complete HTML');
    console.log('  - page-with-styles.html - HTML with inline styles');
    console.log('  - all-styles.json - All CSS data');
    console.log('  - combined-styles.css - All CSS in one file');
    console.log('  - computed-styles.json - Computed styles for elements');
    console.log('  - scripts.json - All JavaScript code');
    console.log('  - page-structure.json - Complete DOM structure');
    console.log('  - all-classes.json - All CSS classes used');
    console.log('  - interactive-elements.json - Clickable/interactive elements');
    console.log('  - color-theme.json - All colors used');
    console.log('  - fonts.json - All font information');
    console.log('  - space10-screenshot.png - Full page screenshot');

  } catch (error) {
    console.error('❌ Extraction failed:', error);
  } finally {
    await browser.close();
  }
}

// Run the extraction
extractSpace10().catch(console.error);