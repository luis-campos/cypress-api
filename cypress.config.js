const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  reporterOptions: {
    charts: true,
    reportDir: 'cypress/reports/mochawesome-report',
    overwrite: false,
    reportPageTitle: 'custom-title',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
