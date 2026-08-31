import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';

const localAppData = process.env.LOCALAPPDATA || path.join(process.env.USERPROFILE, 'AppData', 'Local');
const minGitDir = path.join(localAppData, 'MinGit');
const zipPath = path.join(localAppData, 'mingit.zip');
const gitExe = path.join(minGitDir, 'cmd', 'git.exe');

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          setTimeout(resolve, 500);
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  if (!fs.existsSync(gitExe)) {
    console.log('Downloading MinGit portable binary...');
    await download(
      'https://github.com/git-for-windows/git/releases/download/v2.48.1.windows.1/MinGit-2.48.1-64-bit.zip',
      zipPath
    );
    console.log('Extracting MinGit to', minGitDir);
    if (!fs.existsSync(minGitDir)) fs.mkdirSync(minGitDir, { recursive: true });
    execSync(`powershell -Command "Expand-Archive -LiteralPath '${zipPath}' -DestinationPath '${minGitDir}' -Force"`, {
      stdio: 'inherit',
    });
    if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
  }

  console.log('Git binary ready:');
  const version = execSync(`"${gitExe}" --version`, { encoding: 'utf-8' });
  console.log(version.trim());
}

main().catch(console.error);
