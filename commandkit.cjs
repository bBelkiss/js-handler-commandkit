const { defineConfig } = require('commandkit');

module.exports = defineConfig({
    src: 'src',
    main: 'index.js',
    requirePolyfill: true,
});