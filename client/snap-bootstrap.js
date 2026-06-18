const chromium = require('@sparticuz/chromium');
const { spawn } = require('child_process');

(async () => {
  try {
    const executablePath = await chromium.default.executablePath();
    console.log('Chromium path:', executablePath);

    const snap = spawn('react-snap', ['--config', 'snap.js'], {
      stdio: 'inherit',
      env: { ...process.env, PUPPETEER_EXECUTABLE_PATH: executablePath }
    });

    snap.on('exit', (code) => {
      process.exit(code);
    });
  } catch (err) {
    console.error('Failed to get chromium path:', err);
    process.exit(1);
  }
})();
