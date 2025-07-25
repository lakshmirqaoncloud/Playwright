import { test, expect } from '../util/AdvisorBaseTest';
import TestDataManager from '../util/TestDataManager';

test.describe('Advisor Login', () => {

    test('should navigate to login page', async ({ page, advisorLoginPage }) => {
        await advisorLoginPage.navigateToLogin();
        await expect(page).toHaveURL(/.*login/);
    });

    test.skip('should login with valid credentials via google sign in', async ({ page, advisorLoginPage }) => {
        const credentials = TestDataManager.getCredentials();
        
        await advisorLoginPage.navigateToLogin();
        await advisorLoginPage.foraEmailLogin(credentials.email, credentials.password);
        
        await advisorLoginPage.waitForPageLoad();
        
        await expect(page).not.toHaveURL(/.*login/);
    });

    test('should login with valid credentials via manual login', async ({ page, advisorLoginPage }) => {
        const credentials = TestDataManager.getCredentials();
        
        await advisorLoginPage.navigateToLogin();
        await advisorLoginPage.manualLogin(credentials.email, credentials.password);
        
        await advisorLoginPage.waitForPageLoad();
        
        await expect(page).not.toHaveURL(/.*login/);
    });
    
    test('should display error for invalid credentials', async ({ page, advisorLoginPage }) => {
        await advisorLoginPage.navigateToLogin();
        await advisorLoginPage.manualLogin('invalid@email.com', 'wrongpassword');
        // Assert that the error message is visible
        await expect(advisorLoginPage.loginError).toHaveText('Unable to log in with provided credentials.');
    });
});