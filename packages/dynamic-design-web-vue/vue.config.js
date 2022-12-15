const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  outputDir: 'dist',
  publicPath: './',
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 要公用的scss的路径
          resources: './src/styles/index.scss',
        })
        .end();
    });

    config.resolve.alias
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/views'))
      .set('@views', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@directive', resolve('src/directive'))
      .set('@filters', resolve('src/filters'))
      .set('@hooks', resolve('src/hooks'))
      .set('@layout', resolve('src/layout'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@styles', resolve('src/styles'))
      .set('@utils', resolve('src/utils'))
      .set('@views', resolve('src/views'));
  },
};
