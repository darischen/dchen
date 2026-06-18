module.exports = {
  source: 'build',
  puppeteerArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--single-process',
    '--no-zygote',
    '--disable-gpu'
  ],
  minifyHtml: {
    collapseWhitespace: false,
    removeComments: false
  },
  include: [
    '/',
    '/about',
    '/projects',
    '/contact',
    '/resume',
    '/projects/HB100',
    '/projects/patentiq',
    '/projects/chess',
    '/projects/flipperzillow',
    '/projects/simplerfy',
    '/projects/groundworks',
    '/projects/CPU',
    '/projects/redshift',
    '/projects/16bit-adder',
    '/projects/weatherapp',
    '/projects/eews',
    '/projects/devblog',
    '/projects/hearthpebble',
    '/projects/darischen'
  ]
};
