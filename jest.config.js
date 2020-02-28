// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // A set of global variables that need to be available in all test environments
  globals: { rootURL: "http://5df9c4eee9f79e0014b6b2eb.mockapi.io/charge/" },

  // Use this configuration option to add custom reporters to Jest
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "outputPath": `./report/test-report.html`,
      "pageTitle": "Test Report",
      "includeFailureMsg": true,
      "dateFormat": "yyyy-mm-dd HH:MM:ss"

    }]
  ],

  // The test environment that will be used for testing
  testEnvironment: "node"
};
