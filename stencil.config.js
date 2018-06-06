const sass = require('@stencil/sass');

exports.config = {
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js'
      }
    }
  ],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/styles/_global.scss',
  sassConfig: {
    includePaths: ['src/global/styles/']
  },
  plugins: [
    sass(
      {injectGlobalPaths: [
      'src/global/styles/_variables.scss',
      'src/global/styles/mixins.scss'      
    ]})
  ],
  enableCache: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
