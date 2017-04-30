import uglify from "rollup-plugin-uglify";

export default {
    entry: 'index.js',
    dest: 'bundles/ngx-bb-emojione-picker.umd.min.tmp',
    format: 'umd',
    moduleName: 'ngx.bb.emojione.picker',
    external: [
        '@angular/core'
    ],
    globals: {
        '@angular/core': 'ng.core'
    },
    plugins: [
        uglify()
    ]
}
