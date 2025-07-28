import { test as base, Page } from '@playwright/test';
import { AdvisorLoginPage } from '../pages/advisorPages/AdvisorLoginPage';
import { AdvisorHomePage } from '../pages/advisorPages/home/AdvisorHomePage';
import { AdvisorPartnersPage } from '../pages/advisorPages/book/AdvisorsPartnersPage';
import { AdvisorSettingsMainPage } from '../pages/advisorPages/settings/AdvisorSettingsMainPage';

import TestDataManager from './TestDataManager';

export interface TestFixtures {
    advisorLoginPage: AdvisorLoginPage;
    advisorHomePage: AdvisorHomePage;
    advisorPartnersPage: AdvisorPartnersPage;
    advisorSettingsMainPage: AdvisorSettingsMainPage;
    
    authenticatedPage: Page;
}

export const test = base.extend<TestFixtures>({
    advisorLoginPage: async ({ page }, use) => {
        const advisorLoginPage = new AdvisorLoginPage(page);
        await use(advisorLoginPage);
    },

    advisorHomePage: async ({ page }, use) => {
        const advisorHomePage = new AdvisorHomePage(page);
        await use(advisorHomePage);
    },

    advisorPartnersPage: async ({ page }, use) => {
        const advisorPartnersPage = new AdvisorPartnersPage(page);
        await use(advisorPartnersPage);
    },
     
    advisorSettingsMainPage: async ({ page }, use) => {
        const advisorSettingsMainPage = new AdvisorSettingsMainPage(page);
        await use(advisorSettingsMainPage);
    },

   
   

    // Pre-authenticated page fixture for tests that need login
    authenticatedPage: async ({ page, advisorLoginPage, advisorHomePage }, use) => {
        const credentials = TestDataManager.getCredentials();
        
        await advisorLoginPage.navigateToLogin();
        await advisorLoginPage.manualLogin(credentials.email, credentials.password);
        
        // Wait for home page to load after login
        await advisorHomePage.waitForPageLoad();
        
        await use(page);
        
    }
});

export { expect } from '@playwright/test'; 