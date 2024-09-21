const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost/wordpress", // Replace with your actual URL
    env: {
      WP_USER: process.env.WP_USER,
      WP_PASS: process.env.WP_PASS,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
