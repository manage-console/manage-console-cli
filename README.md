# Console Manager CLI

🧹A powerful CLI tool to manage console.log statements in your JavaScript/TypeScript projects.

[![npm version](https://img.shields.io/npm/v/manage-console-cli.svg)](https://www.npmjs.com/package/manage-console-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features

- Remove console.log statements from your code
- Comment out console.log statements
- Process individual files or entire projects
- Exclude specific files or directories

## 📦 Installation

Install the package globally using npm:

```bash
npm install -g manage-console-cli
```

Install the package as a dev dependency in your project:

```bash
npm install manage-console-cli --save-dev
```

## 🛠️ Usage

### Remove console.log statements

To remove console.log statements from a specific file:

```bash
console-manager remove --file path/to/your/file.js
```

To remove console.log statements from all files in the current directory and its subdirectories:

```bash
console-manager comment --all
```

## ⚙️ Configuration

By default, the tool processes .js, .ts, .jsx, and .tsx files. It excludes the following directories:

- node_modules
- dist
- build
- .git

And the following files:

- config.js
- config.json
- package.json
- package-lock.json

## 🧩 VS Code Extension

If you prefer a visual interface, you can use our VS Code extension that provides the same functionality:

[CLG Manager for VS Code](https://marketplace.visualstudio.com/items?itemName=ConsoleManager.clg-manger)

This extension allows you to manage console.log statements directly from your VS Code editor.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/manage-console/manage-console-cli/issues).

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## 👨‍💻 Author

**Mohamed Nabih**

- Github: [@muhammad-nabih](https://github.com/muhammad-nabih)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---
