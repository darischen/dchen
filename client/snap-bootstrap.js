// Calls @sparticuz/chromium's executablePath() in THIS process so that its
// side effects (setting LD_LIBRARY_PATH to the extracted /tmp/al2023/lib,
// FONTCONFIG_PATH, and HOME) apply here. Then it spawns react-snap, which
// inherits this environment so the bundled chromium can find libnspr4.so etc.
const chromium = require('@sparticuz/chromium');
const { spawn } = require('child_process');
const path = require('path');

(async () => {
  try {
    const executablePath = await chromium.default.executablePath();
    console.log('Chromium path:', executablePath);
    console.log('LD_LIBRARY_PATH:', process.env.LD_LIBRARY_PATH);

    const reactSnapBin = path.resolve(
      __dirname,
      'node_modules',
      '.bin',
      process.platform === 'win32' ? 'react-snap.cmd' : 'react-snap'
    );

    const snap = spawn(reactSnapBin, [], {
      stdio: 'inherit',
      shell: process.platform === 'win32',
      env: { ...process.env, PUPPETEER_EXECUTABLE_PATH: executablePath }
    });

    snap.on('exit', (code) => process.exit(code));
  } catch (err) {
    console.error('snap-bootstrap failed:', err);
    process.exit(1);
  }
})();
