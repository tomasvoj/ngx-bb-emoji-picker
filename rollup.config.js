export default {
    entry     : 'index.js',
    dest      : 'bundles/ngx-bb-emojione-picker.umd.tmp',
    format    : 'umd',
    external  : [
        '@angular/core'
    ],
    globals   : {
        '@angular/core': 'ng.core',
    },
    moduleName: 'ngx.bb.emojione.picker'
}
