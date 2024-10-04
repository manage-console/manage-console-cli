#!/usr/bin/env node

import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import { removeConsoleLogsFromFile } from './removeConsoleLogs';
import { commentConsoleLogsInFile } from './commentConsoleLogs';

const program = new Command();

program
  .name('console-manager')
  .description('CLI to manage console.log statements in your project')
  .version('1.0.0');

program
  .command('remove')
  .description('Remove console.log statements')
  .option('-f, --file <path>', 'Remove from a specific file')
  .option('-a, --all', 'Remove from all files in the project')
  .action((options) => {
    if (options.file) {
      removeConsoleLogsFromFile(options.file);
    } else if (options.all) {
      removeConsoleLogsFromAllFiles();
    } else {
      console.error('Please specify either --file <path> or --all');
    }
  });

program
  .command('comment')
  .description('Comment out console.log statements')
  .option('-f, --file <path>', 'Comment in a specific file')
  .option('-a, --all', 'Comment in all files in the project')
  .action((options) => {
    if (options.file) {
      commentConsoleLogsInFile(options.file);
    } else if (options.all) {
      commentConsoleLogsInAllFiles();
    } else {
      console.error('Please specify either --file <path> or --all');
    }
  });

function removeConsoleLogsFromAllFiles() {
  processAllFiles(removeConsoleLogsFromFile);
}

function commentConsoleLogsInAllFiles() {
  processAllFiles(commentConsoleLogsInFile);
}

function processAllFiles(processor: (filePath: string) => void) {
  const settings = getSettings();
  const filesProcessed = processFiles('.', settings, processor);
}

function processFiles(
  dir: string,
  settings: ExtensionSettings,
  processor: (filePath: string) => void,
): number {
  let filesProcessed = 0;
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !settings.excludedFolders.includes(file)) {
      filesProcessed += processFiles(filePath, settings, processor);
    } else if (
      stat.isFile() &&
      settings.includedExtensions.some((ext) => file.endsWith(ext)) &&
      !settings.excludedFiles.includes(file)
    ) {
      try {
        processor(filePath);
        filesProcessed++;
      } catch (error) {
        console.error(
          `  ✗ Error processing ${filePath}: ${(error as Error).message}`,
        );
      }
    }
  }

  return filesProcessed;
}

function getSettings(): ExtensionSettings {
  return {
    includedExtensions: ['.js', '.ts', '.jsx', '.tsx'],
    excludedFolders: ['node_modules', 'dist', 'build', '.git'],
    excludedFiles: [
      'config.js',
      'config.json',
      'package.json',
      'package-lock.json',
    ],
  };
}

interface ExtensionSettings {
  includedExtensions: string[];
  excludedFolders: string[];
  excludedFiles: string[];
}

program.parse(process.argv);
