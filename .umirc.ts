import { defineConfig } from 'dumi';

let BaseUrl = '/dumi-animate'; // 仓库的路径

export default defineConfig({
  title: 'animatecss',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config

  base: BaseUrl,
  publicPath: BaseUrl + '/',

  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: 'css',
  //     },
  //     'antd',
  //   ],
  // ],
});
