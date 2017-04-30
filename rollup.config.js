export default {
    entry     : 'index.js',
    dest      : 'bundles/ngx-bb-emojione-picker.umd.tmp',
    format    : 'umd',
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
    moduleName: 'ngx.bb.emojione.picker'
}
