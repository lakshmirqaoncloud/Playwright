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
       
        await advisorSettingsMainPage.advisorIdsEditButton.click();


        
        await advisorSettingsMainPage.fillAdvisorIDsForm(ClientSettingsData);
        await advisorSettingsMainPage.advisorIdSaveButton.click();

        // Wait for modal to close
        await expect(advisorSettingsMainPage.modalTitle).not.toBeVisible();

        await advisorSettingsMainPage.hyattValue.scrollIntoViewIfNeeded();
        await expect(advisorSettingsMainPage.hyattValue).toContainText(ClientSettingsData.worldOfHyatt);
        await expect(advisorSettingsMainPage.heraValue).toContainText(ClientSettingsData.hera);
        await expect(advisorSettingsMainPage.leadingAdvisorValue).toContainText(ClientSettingsData.leadingAdvisor);

     
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
test('Should be able to set personal information details manually', async ({
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



        //genneral tab check for personal information details section edit button
        await advisorSettingsMainPage.personalInformationEditButton.click();
       // await advisorSettingsMainPage.bookingPlatformEditButton.waitFor({ state: 'visible' });


        //await expect(advisorSettingsMainPage.bookingsmodaltitle).toBeVisible();
        await advisorSettingsMainPage.fillPersonalInformation(ClientSettingsData);
        
        await advisorSettingsMainPage.personalInformationSaveButton.click();

        await expect(advisorSettingsMainPage.personalInformationcountry).toContainText(ClientSettingsData.country);
        await expect(advisorSettingsMainPage.personalInformationaddress).toContainText(ClientSettingsData.Address);
        await expect(advisorSettingsMainPage.personalInformationcity).toHaveValue(ClientSettingsData.city);
       await expect(advisorSettingsMainPage.personalInformationstate).toHaveValue(ClientSettingsData.state);
        await expect(advisorSettingsMainPage.personalInformationzipcode).toContainText(ClientSettingsData.zipcode);
        await expect(advisorSettingsMainPage.personalInformationphone).toContainText(ClientSettingsData.phoneNumber);
        //await expect(advisorSettingsMainPage.personalInformationtimezone).toContainText(ClientSettingsData.timezone);

       //s await advisorSettingsMainPage.personalInformationaddress.scrollIntoViewIfNeeded();
/*
        // Wait for modal to close
        await expect(advisorSettingsMainPage.bookingsmodaltitle).not.toBeVisible();

        await advisorSettingsMainPage.selectedCurrencyLabel.scrollIntoViewIfNeeded();
        await expect(advisorSettingsMainPage.selectedCurrencyLabel).toHaveText(ClientSettingsData.defaultCurrency);

        //await advisorSettingsMainPage.waitForPageLoad();


*/

    });

});