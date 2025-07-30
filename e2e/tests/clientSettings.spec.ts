import { test, expect } from '../util/AdvisorBaseTest';
import TestDataManager, { ClientSettingsData } from '../util/TestDataManager';
import Utilities from '../util/Utilities';



test.describe('Apply Customer Settings', () => {

    let ClientSettingsData: ClientSettingsData;
test.beforeEach(async () => {
    ClientSettingsData = TestDataManager.getClientSettingsData();
  });

    test('Should be able to set advisorsid manually', async ({
        authenticatedPage,
        advisorHomePage,
        advisorSettingsMainPage


    }) => {
        // Get test data
      //  const advisorSettingsData = TestDataManager.getClientSettingsData();

        // Navigate to settings in the home page
        await advisorHomePage.settingsButton.click();
      

        //navigate to general tab in settings page        
        await advisorSettingsMainPage.generalTab.click()        
        await advisorSettingsMainPage.waitForPageLoad();
      await advisorSettingsMainPage.hyattValue.textContent();
        await advisorSettingsMainPage.heraValue.textContent();
        await advisorSettingsMainPage.leadingAdvisorValue.textContent();

        //genneral tab check for advisor IDs section edit button
       // await advisorSettingsMainPage.advisorIdsEditButton.waitFor({ state: 'visible' });
        await advisorSettingsMainPage.advisorIdsEditButton.click();


        //await expect(advisorSettingsMainPage.modalTitle).toBeVisible();
        await advisorSettingsMainPage.fillAdvisorIDsForm(ClientSettingsData);
        await advisorSettingsMainPage.advisorIdSaveButton.click();

        // Wait for modal to close
        await expect(advisorSettingsMainPage.modalTitle).not.toBeVisible();

        await advisorSettingsMainPage.hyattValue.scrollIntoViewIfNeeded();
        await expect(advisorSettingsMainPage.hyattValue).toContainText(ClientSettingsData.worldOfHyatt);
        await expect(advisorSettingsMainPage.heraValue).toContainText(ClientSettingsData.hera);
        await expect(advisorSettingsMainPage.leadingAdvisorValue).toContainText(ClientSettingsData.leadingAdvisor);

      //  await advisorSettingsMainPage.waitForPageLoad();
    });


    test('Should be able to set booking platform settings manually', async ({
        authenticatedPage,
        advisorHomePage,
        advisorSettingsMainPage

    }) => {
        // Get test data
        //const advisorSettingsData = TestDataManager.getClientSettingsData();

        // Navigate to settings in the home page
        await advisorHomePage.settingsButton.click();


        //navigate to general tab in settings page        
        await advisorSettingsMainPage.generalTab.click()
        await advisorSettingsMainPage.waitForPageLoad();

        //genneral tab check for advisor IDs section edit button
        await advisorSettingsMainPage.bookingPlatformEditButton.click();
       // await advisorSettingsMainPage.bookingPlatformEditButton.waitFor({ state: 'visible' });


        //await expect(advisorSettingsMainPage.bookingsmodaltitle).toBeVisible();
        await advisorSettingsMainPage.fillDefaultCurrency(ClientSettingsData);
        
        await advisorSettingsMainPage.bookingsSaveButton.click();

        // Wait for modal to close
        await expect(advisorSettingsMainPage.bookingsmodaltitle).not.toBeVisible();

        await advisorSettingsMainPage.selectedCurrencyLabel.scrollIntoViewIfNeeded();
        await expect(advisorSettingsMainPage.selectedCurrencyLabel).toHaveText(ClientSettingsData.defaultCurrency);

        //await advisorSettingsMainPage.waitForPageLoad();




    });

});