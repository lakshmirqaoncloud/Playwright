import { test, expect } from '../util/AdvisorBaseTest';
import TestDataManager from '../util/TestDataManager';
import Utilities from '../util/Utilities';


test.describe('Apply Customer Settings', () => {

    test('Should be able to set advisorsid manually', async ({
        authenticatedPage,
        advisorHomePage,
        advisorSettingsMainPage
        

    }) => {
        // Get test data
        const advisorSettingsData = TestDataManager.getClientSettingsData();

        // Navigate to settings in the home page
        await advisorHomePage.settingsButton.click();
        //await advisorHomePage.goto('/settings');
        //await advisorHomePage.waitForPageLoad();

        //navigate to general tab in settings page        
        await advisorSettingsMainPage.generalTab.click()
        await advisorSettingsMainPage.waitForPageLoad();

        //genneral tab check for advisor IDs section edit button
        await advisorSettingsMainPage.advisorIdsEditButton.waitFor({ state: 'visible' });
        await advisorSettingsMainPage.advisorIdsEditButton.click();


        await expect(advisorSettingsMainPage.modalTitle).toBeVisible();
        await advisorSettingsMainPage.fillAdvisorIDsForm(advisorSettingsData);        
         await advisorSettingsMainPage.advisorIdSaveButton.click();

         // Wait for modal to close
        await expect(advisorSettingsMainPage.modalTitle).not.toBeVisible();        

        await advisorSettingsMainPage.hyattValue.scrollIntoViewIfNeeded();
        await expect(advisorSettingsMainPage.hyattValue).toContainText(advisorSettingsData.worldOfHyatt);
        await expect(advisorSettingsMainPage.heraValue).toContainText(advisorSettingsData.hera);
        await expect(advisorSettingsMainPage.leadingAdvisorValue).toContainText(advisorSettingsData.leadingAdvisor);

        await advisorSettingsMainPage.waitForPageLoad();
        

        
    });


test('Should be able to set booking platform settings manually', async ({
        authenticatedPage,
        advisorHomePage,
        advisorSettingsMainPage
        

    }) => {
        // Get test data
        const advisorSettingsData = TestDataManager.getClientSettingsData();

        // Navigate to settings in the home page
        await advisorHomePage.settingsButton.click();
        //await advisorHomePage.goto('/settings');
        //await advisorHomePage.waitForPageLoad();

        //navigate to general tab in settings page        
        await advisorSettingsMainPage.generalTab.click()
        await advisorSettingsMainPage.waitForPageLoad();

        //genneral tab check for advisor IDs section edit button
        await advisorSettingsMainPage.bookingPlatformEditButton.click();
        await advisorSettingsMainPage.bookingPlatformEditButton.waitFor({ state: 'visible' });
     

        await expect(advisorSettingsMainPage.bookingsmodaltitle).toBeVisible();
       await advisorSettingsMainPage.fillDefaultCurrency(advisorSettingsData);        
        await advisorSettingsMainPage.bookingsSaveButton.click();

         // Wait for modal to close
        await expect(advisorSettingsMainPage.bookingsmodaltitle).not.toBeVisible();        

       await advisorSettingsMainPage.selectedCurrencyLabel.scrollIntoViewIfNeeded();
        await expect(advisorSettingsMainPage.selectedCurrencyLabel).toHaveText(advisorSettingsData.defaultCurrency)
        /*await expect(advisorSettingsMainPage.hyattValue).toContainText(advisorSettingsData.worldOfHyatt);
        await expect(advisorSettingsMainPage.heraValue).toContainText(advisorSettingsData.hera);
        await expect(advisorSettingsMainPage.leadingAdvisorValue).toContainText(advisorSettingsData.leadingAdvisor);*/

        //await advisorSettingsMainPage.waitForPageLoad();
       
    

        
    });

});