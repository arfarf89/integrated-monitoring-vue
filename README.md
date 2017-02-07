# 통합 관제 VueJS 버전

> Vue를 이용한 기본적인 SPA 예제입니다.
> [vue-cli, webpack](https://github.com/vuejs-templates/webpack)을 이용했습니다.

## Usage

**node 6.x 버전으로 scaffold 했고, node 4+ 가 권장사항입니다.**

``` bash
$ git clone https://github.com/arfarf89/integrated-monitoring-vue.git
$ cd integrated-monitoring-vue
$ npm install
$ npm run dev
```
9000 Port를 이용합니다.



## vue-webpack-boilerplate 포함 사항
- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

## Notes
- [ElementUI](http://element.eleme.io/#/en-US/component/installation) UI Component 라이브러리 이용
- [Vuex](http://vuex.vuejs.org/en/intro.html) 추가 필요
- [Axios](https://github.com/mzabriskie/axios) for async calls 추가 필요
- Sass for styles
