#!/usr/bin/env node

// node generateComponent.js name label

import fs from 'fs';
import path from 'path';

function convertToTitleCase(str) {
  // Split the string into an array of words
  const words = str.split('_');

  // Capitalize the first letter of each word
  const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words back into a single string
  const titleCaseString = titleCaseWords.join('');

  return titleCaseString;
}

function generateComponent(name, label) {
  const componentDir = `src/components/${label}/${name}`
  const docsDir = `src/content/docs/components/${label}`

  // Create the component directory
  fs.mkdirSync(componentDir, { recursive: true });
  // Create the docs directory
  fs.mkdirSync(docsDir, { recursive: true });

  // Generate the component files
  generateComponentMDX(name, label, docsDir);
  generateReactJSX(name, label, componentDir);
  generateReactCSS(name, label, componentDir);
  generateCSSJS(name, label, componentDir);
  generateReactJS(name, label, componentDir);
}

function generateComponentMDX(name, label, docsDir) {
  const mdxContent = `---
title: ${name}
---

import { ${convertToTitleCase(name)} } from '../../../../components/${label}/${name}/${name}.jsx';
import { Tabs, TabItem } from '@astrojs/starlight/components';
import { Code } from '@astrojs/starlight/components';
import reactCode from '../../../../components/${label}/${name}/react.js'
import cssCode from '../../../../components/${label}/${name}/css.js'
import '../comps.css'

<div class="comp_card">
  <${convertToTitleCase(name)} client:load/>
</div>

<h4>Props</h4>

| Prop                 | Datatype | Possible Values          |
|----------------------|----------|--------------------------|
| title                | String   |                          |
| subtitle             | String   |                          |

<h4>Notes</h4>
1. You may have to edit the font styling, padding, and margin due to your sites existing stylesheets.

<h4>Code</h4>

<Tabs>
  <TabItem label="React" icon="seti:react">
    <Code code={reactCode} lang="js" title="${name}.jsx" />
  </TabItem>
  <TabItem label="Css" icon="seti:css">
    <Code code={cssCode} lang="css" title="${name}.css" />
  </TabItem>
</Tabs>
`;

  fs.writeFileSync(path.join(docsDir, `${name}.mdx`), mdxContent);
}

function generateReactJSX(name, label, componentDir) {
  const reactJSContent = `import React from 'react';
import './${name}.css';

const ${convertToTitleCase(name)} = () => {
  return (
    <div className="${name}">
      hello
    </div>
  );
};

export { ${convertToTitleCase(name)} };
`;

  fs.writeFileSync(path.join(componentDir, `${name}.jsx`), reactJSContent);
}

function generateReactCSS(name, label, componentDir) {
  const reactCSSContent = `.${name}{

}
`;

  fs.writeFileSync(path.join(componentDir, `${name}.css`), reactCSSContent);
}

function generateCSSJS(name, label, componentDir) {
  const cssJSContent = `export default \`
  some_css
\`
`;

  fs.writeFileSync(path.join(componentDir, 'css.js'), cssJSContent);
}

function generateReactJS(name, label, componentDir) {
  const reactJSContent = `export default \`
  some_react_code
\`
`;

  fs.writeFileSync(path.join(componentDir, 'react.js'), reactJSContent);
}

// Usage example
const [, , name, label] = process.argv;
generateComponent(name, label);
