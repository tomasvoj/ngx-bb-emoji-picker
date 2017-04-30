import uglify from "rollup-plugin-uglify";

export default {
  entry: 'index.js',
  dest: 'bundles/ngx-bb-emojione-picker.umd.min.tmp',
  format: 'umd',
  moduleName: 'ngx.bb.emojione.picker',
  external  : [
    '@angular/core',
    '@angular/common',
    '@angular/material',
    '@angular/http',
    'emojione',
    'underscore'
  ],
  globals   : {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/material': 'ng.material',
    '@angular/http': 'ng.http',
    'emojione': '_emojione',
    'underscore': '_underscore'
  },
  plugins: [
      uglify()
  ]
}
