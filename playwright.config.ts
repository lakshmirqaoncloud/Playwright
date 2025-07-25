import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
import TestConfig from './e2e/util/TestConfig';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Get configuration from TestConfig
const envConfig = TestConfig.getEnvironmentConfig();
const testSettings = TestConfig.getTestSettings();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e/tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only - using TestConfig */
  retries: envConfig.retries,
  /* Use multiple workers even in CI for faster execution */
  workers: process.env.CI ? 3 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  
  /* Individual test timeout - prevent premature browser closure */
  timeout: 240000, // 4 minutes per individual test
  
  /* Expect timeout configuration - using TestConfig */
  expect: { timeout: testSettings.defaultTimeout },
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: envConfig.baseUrl,
    headless: envConfig.headless,

    /* Timeout for page load - using TestConfig */
    actionTimeout: testSettings.defaultTimeout,
    navigationTimeout: testSettings.defaultTimeout,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
    /* Screenshots and video from TestConfig */
    screenshot: testSettings.screenshotOnFailure ? 'only-on-failure' : 'off',
    video: testSettings.videoOnFailure ? 'retain-on-failure' : 'off',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
        launchOptions: {
          args: ['--window-size=2000,1200']
        }
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1440, height: 900 },
      },
    },

    // /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //     viewport: { width: 1440, height: 900 },
    //     launchOptions: {
    //       args: ['--window-size=2000,1200']
    //     }
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
