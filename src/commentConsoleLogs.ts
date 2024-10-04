import * as fs from 'fs';

export function commentConsoleLogs(text: string): string {
  // Regular expression to match console.log statements that are not already commented
  const consoleLogRegex = /^(?!.*\/\/).*console\.log\s*\([^)]*\);?/gm;

  return text.replace(consoleLogRegex, (match) => {
    return `// ${match}`; // Comment out the console.log statement
  });
}

export function commentConsoleLogsInFile(filePath: string): void {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const commentedContent = commentConsoleLogs(content);

    if (content !== commentedContent) {
      fs.writeFileSync(filePath, commentedContent, 'utf8');
    } else {
    }
  } catch (error) {
    console.error(
      `Error processing file ${filePath}: ${(error as Error).message}`,
    );
  }
}
