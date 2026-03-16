'use strict';

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const rootDir = path.resolve(__dirname, '..');
const sourceDir = path.join(rootDir, 'src', 'assets', 'fonts', 'woff2');
const distDir = path.join(rootDir, 'dist', 'fonts');
const fontFiles = [
  'OpenSans-Light.woff2',
  'OpenSans-Regular.woff2',
  'OpenSans-Semibold.woff2',
  'OpenSans-Bold.woff2',
];

const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const rmdir = promisify(fs.rmdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);

async function removeDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  const entries = await readdir(dirPath);

  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dirPath, entry);
      const entryStats = await stat(entryPath);

      if (entryStats.isDirectory()) {
        await removeDirectory(entryPath);
        return;
      }

      await unlink(entryPath);
    })
  );

  await rmdir(dirPath);
}

async function copyFonts() {
  await removeDirectory(distDir);
  await mkdir(distDir, { recursive: true });

  await Promise.all(
    fontFiles.map((file) =>
      copyFile(path.join(sourceDir, file), path.join(distDir, file))
    )
  );
}

copyFonts().catch((error) => {
  console.error('Failed to copy Open Sans font files to dist/fonts.');
  console.error(error);
  process.exitCode = 1;
});
