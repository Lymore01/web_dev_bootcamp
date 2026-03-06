
### 1. Overview
*   **Runtime Environment:** Executes JavaScript outside the browser.
*   **V8 Engine:** Uses Chrome's engine to compile JS to machine code.
*   **No DOM:** No `window` or `document`. Use `global` instead of `window`.

### 2. REPL & Execution
*   **REPL:** Type `node` in terminal for an interactive shell (testing snippets).
*   **Running Files:** `node app.js`.
*   **Arguments:** `process.argv` stores CLI inputs.
    *   `[0]`: Node path | `[1]`: File path | `[2]+`: User arguments.

### 3. File System (`fs`) Module

```javascript
const fs = require('fs');

// Directory & File Operations
fs.mkdirSync('DirName');           // Create folder
fs.writeFileSync('file.txt', '');  // Create/Overwrite file
fs.readFileSync('file.txt');       // Read file
```

### 4. Project Boilerplate Script
```javascript
const fs = require('fs');
const folder = process.argv[2] || 'Project';

try {
    fs.mkdirSync(folder);
    fs.writeFileSync(`${folder}/index.html`, '');
    fs.writeFileSync(`${folder}/app.js`, '');
    fs.writeFileSync(`${folder}/styles.css`, '');
    console.log(`Scaffolded ${folder} successfully.`);
} catch (err) {
    console.error("Error:", err.message);
}