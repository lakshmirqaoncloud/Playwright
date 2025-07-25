# E2E Test Automation Framework

This repository contains end-to-end tests using Playwright for automated testing of the application.

## Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

## Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd e2e-automation
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
e2e-automation/
├── pages/                    # Page Object Models
│   ├── adminPages/          # Admin-specific pages
│   ├── advisorPages/        # Advisor-specific pages
│   │   ├── book/          
│   │   ├── home/    
│   │   ├── learn/        
│   ├── TestConfig.ts        # Test configuration
│   ├── TestDataManager.ts   # Test data management
│   └── Utilities.ts         # Helper functions
├── tests/                   # Test specifications
│   ├── AdvisorBaseTest.ts   # Base test class
│   └── *.spec.ts           # Test files
├── playwright.config.ts     # Playwright configuration
└── package.json            # Project dependencies
```

## Running Tests

### Basic Commands

```bash
# Run all tests
npm run test

# Run specific test file
npx playwright test tests/advisorLogin.spec.ts

# Run tests in headed mode (browser visible)
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Run tests with UI mode
npm run test:ui

# View test report
npm run report
```

### Browser-Specific Commands

```bash
# Run tests on specific browsers
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Run tests on mobile devices
npm run test:mobile
```

### Test Suite Commands

```bash
# Run specific test suites
npm run test:login
npm run test:bookings
npm run test:payments

# Run tests by tags
npm run test:smoke
npm run test:regression
```

### Development Commands

```bash
# Install browsers
npm run install:browsers

# Install system dependencies
npm run install:deps

# Generate test code
npm run codegen

# View trace files
npm run trace
```

### Test Reports

- HTML report is generated in `playwright-report/` directory
- Test results are stored in `test-results/` directory

## Framework Components

### 1. Helper Functions

#### TestDataManager
```typescript
// Get test credentials
const credentials = TestDataManager.getCredentials();

// Get test payment info
const paymentInfo = TestDataManager.getTestPaymentInfo();

// Get booking details
const bookingDetails = TestDataManager.getDefaultBookingDetails();
```

#### Utilities
```typescript
// Date handling
const currentDate = Utilities.getCurrentDate();
const dateRange = Utilities.calendarDateRange();

// Test data generation
const randomEmail = Utilities.generateRandomEmail();
const randomString = Utilities.generateRandomString();

// Formatting
const formattedCurrency = Utilities.formatCurrency(100, 'USD');
```

### 2. Page Object Pattern

#### Base Page Structure
```typescript
export class AdvisorBasePage {
    protected page: Page;
    
    // Common elements
    readonly homeButton: Locator;
    readonly bookButton: Locator;
    
    async waitForPageLoad() {
        // Common wait logic
    }
}
```

#### Specialized Pages
```typescript
export class AdvisorLoginPage extends AdvisorBasePage {
    async login(email: string, password: string) {
        // Login implementation
    }
}
```

### 3. Base Test Class

```typescript
// Test fixtures
export interface TestFixtures {
    advisorLoginPage: AdvisorLoginPage;
    advisorHomePage: AdvisorHomePage;
    advisorPartnersPage: AdvisorPartnersPage;
    authenticatedPage: Page;
}
```

## Setup and Teardown

The framework uses Playwright's built-in lifecycle management for reliable test execution. Page and browser contexts are automatically managed - no manual cleanup required.

### Test Fixtures

#### Pre-authenticated Page

```typescript
test('booking test', async ({ authenticatedPage, advisorHomePage }) => {
    // Page is already logged in and ready to use
    await advisorHomePage.bookButton.click();
    // Continue with test...
});
```

#### Individual Page Objects

```typescript
test('login test', async ({ advisorLoginPage }) => {
    // Use specific page object without authentication
    await advisorLoginPage.navigateToLogin();
    await advisorLoginPage.manualLogin('email', 'password');
});
```

### Best Practices for Setup/Teardown

#### 1. Test Independence

```typescript
test.describe('Feature Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Setup unique test data for each test
        const testData = TestDataManager.generateUniqueTestData();
        await setupTestData(testData);
    });

    test.afterEach(async ({ page }) => {
        // Clean up after each test
        await cleanupTestData();
    });
});
```

#### 2. Resource Management

```typescript
test.describe('File Upload Tests', () => {
    const testFiles: string[] = [];

    test.afterEach(async () => {
        // Clean up uploaded files
        for (const file of testFiles) {
            await deleteTestFile(file);
        }
        testFiles.length = 0;
    });
});
```

#### 3. Database State Management

```typescript
test.beforeEach(async ({ page }) => {
    // Reset database state before each test
    await resetTestDatabase();
    await seedTestData();
});

test.afterEach(async ({ page }) => {
    // Clean up test data after each test
    await cleanupTestData();
});
```

## Writing Tests

### 1. Basic Test Structure

```typescript
import { test, expect } from './AdvisorBaseTest';
import TestDataManager from '../pages/TestDataManager';

test.describe('Feature Name', () => {
    test('should perform specific action', async ({ 
        authenticatedPage,
        advisorHomePage 
    }) => {
        // Test implementation
    });
});
```

### 2. Using Page Objects

```typescript
test('book a hotel', async ({ advisorPartnersPage }) => {
    const bookingDetails = TestDataManager.getDefaultBookingDetails();
    await advisorPartnersPage.performCompleteBookingWorkflow(
        bookingDetails.destination,
        dateRange.firstDateFormatted,
        dateRange.secondDateFormatted,
        bookingDetails.clientName,
        bookingDetails.guestCount
    );
});
```

### 3. Test Hooks

```typescript
test.describe('Feature', () => {
    test.beforeEach(async ({ page }) => {
        // Setup before each test
    });

    test.afterEach(async ({ page }) => {
        // Cleanup after each test
    });
});
```

## Best Practices

### 1. Page Objects
- Keep selectors in page objects
- Use data-test-id attributes when possible
- Implement common actions as methods
- Extend AdvisorBasePage for shared functionality

### 2. Test Data
- Use TestDataManager for consistent test data
- Avoid hardcoding test data in specs
- Use environment-specific configurations

### 3. Test Independence
- Each test should be self-contained
- Clean up after tests using hooks
- Use unique test data per test
- Avoid dependencies between tests

### 4. Error Handling
- Add appropriate wait conditions
- Use explicit timeouts when needed
- Add descriptive error messages
- Handle cleanup in afterEach hooks

## Configuration

The `playwright.config.ts` file contains settings for:
- Browser configurations
- Timeout values
- Parallel execution
- Reporter settings
- Screenshot/video capture
- Retry logic

## Troubleshooting

1. Tests failing due to timeout:
   - Increase timeout in playwright.config.ts
   - Check network connectivity
   - Verify element selectors
   - Add explicit waits if needed

2. Browser not launching:
   - Run `npx playwright install`
   - Check system requirements
   - Verify browser dependencies

3. Test data issues:
   - Check TestDataManager configuration
   - Verify environment variables
   - Ensure test data exists in the system

4. Selector issues:
   - Update selectors in page objects
   - Use more reliable selectors (data-test-id)
   - Add wait conditions for dynamic elements

## Contributing

1. Follow the existing page object pattern
2. Add appropriate test data to TestDataManager
3. Update README for new features/changes
4. Maintain test independence
5. Add proper error handling
