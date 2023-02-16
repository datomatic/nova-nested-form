let mix = require("laravel-mix");
let path = require('path')

require("./mix");

mix
    .setPublicPath("dist")
    .js("resources/js/field.js", "js")
    .sourceMaps()
    .vue({ version: 3 })
    .sass("resources/sass/field.scss", "css")
    .alias({
        '@': path.join(__dirname, 'vendor/laravel/nova/resources/js')
    })
    .nova("handleglobal/nova-nested-form");

module.exports = {};
