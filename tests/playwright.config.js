const { defineConfig } = require("@playwright/test");
const path = require("path");

const PORT = 8123;

module.exports = defineConfig({
  testDir: "./specs",
  timeout: 60000,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never", outputFolder: "../test-results" }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    serviceWorkers: "block"
  },
  webServer: {
    command: `node tools/serve.js ${PORT}`,
    cwd: path.resolve(__dirname, ".."),
    port: PORT,
    reuseExistingServer: !process.env.CI
  },
  projects: [
    { name: "desktop", use: { browserName: "chromium", viewport: { width: 1200, height: 900 } } },
    { name: "tablet", use: { browserName: "chromium", viewport: { width: 820, height: 1180 }, hasTouch: true } }
  ]
});
