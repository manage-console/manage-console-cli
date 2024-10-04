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

## 🛠️ Usage

### Remove console.log statements

To remove console.log statements from a specific file:

```bash
console-manager remove --file path/to/your/file.js
```

To remove console.log statements from all files in the current directory and its subdirectories:

```bash
console-manager remove --all
```

### Comment out console.log statements

To comment out console.log statements in a specific file:

```bash
console-manager comment --file path/to/your/file.js
```

To comment out console.log statements in all files in the current directory and its subdirectories:

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

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/muhammad-nabih/manage-console-cli/issues).

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## 👨‍💻 Author

**Mohamed Nabih**

- Github: [@muhammad-nabih](https://github.com/muhammad-nabih)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---
