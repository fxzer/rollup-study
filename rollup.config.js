import json from '@rollup/plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
export default {
  // input:'src/index.code-split.js',

  //多入口打包
  input:{
    foo:'src/index.js',
    bar:'src/util.js',
  },
  output:{
    // file:'ext/dist-code-split.js',
    // format: 'iife', /** 自执行函数形式 */

    //DynamicImport：动态导入实现代码拆分
    dir:'dist-inputs',
    format:'amd'
  },
  plugins:[
    json(),
    resolve(),
    commonjs(),
  ]
}
