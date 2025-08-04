import { test, expect } from '../util/AdvisorBaseTest';
import TestDataManager, { ClientSettingsData } from '../util/TestDataManager';
import Utilities from '../util/Utilities';



test.describe('End-to-End Customer Settings Workflow', () => {

    let ClientSettingsData: ClientSettingsData;
test.beforeEach(async () => {
    ClientSettingsData = TestDataManager.getClientSettingsData();
  });

    test('Should allow manual entry of Advisor ID', async ({
        authenticatedPage,
        advisorHomePage,
        advisorSettingsMainPage


    }) => {
        

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
       // await advisorSettingsMainPage.advisorIdcancelButton.click();


        // Wait for modal to close
        await expect(advisorSettingsMainPage.modalTitle).not.toBeVisible();

        await advisorSettingsMainPage.hyattValue.scrollIntoViewIfNeeded();
        await expect(advisorSettingsMainPage.hyattValue).toContainText(ClientSettingsData.worldOfHyatt);
        await expect(advisorSettingsMainPage.heraValue).toContainText(ClientSettingsData.hera);
        await expect(advisorSettingsMainPage.leadingAdvisorValue).toContainText(ClientSettingsData.leadingAdvisor);

     
    });


    test('Should allow manual configuration of booking platform settings', async ({
        authenticatedPage,
        advisorHomePage,
        advisorSettingsMainPage

    }) => {
        
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
test('Should manually set and verify personal information fields', async ({
        authenticatedPage,
        advisorHomePage,
        advisorSettingsMainPage

    }) => {
      
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
        await expect(advisorSettingsMainPage.personalInformationcity).toContainText(ClientSettingsData.city);
       await expect(advisorSettingsMainPage.personalInformationstate).toContainText(ClientSettingsData.state);
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

    test('Should NOT save changes when advisor IDs form is cancelled', async ({
    authenticatedPage,
    advisorHomePage,
    advisorSettingsMainPage,
  }) => {
    await advisorHomePage.settingsButton.click();
    await advisorSettingsMainPage.generalTab.click();
    await advisorSettingsMainPage.waitForPageLoad();

    const originalHyatt = (await advisorSettingsMainPage.hyattValue.textContent()) ?? '';
  const originalHera = (await advisorSettingsMainPage.heraValue.textContent()) ?? '';
  const originalLeadingAdvisor = (await advisorSettingsMainPage.leadingAdvisorValue.textContent()) ?? '';

   


    await advisorSettingsMainPage.advisorIdsEditButton.click();
    await advisorSettingsMainPage.fillAdvisorIDsForm(ClientSettingsData);
    await advisorSettingsMainPage.advisorIdcancelButton.click();

    await advisorSettingsMainPage.hyattValue.scrollIntoViewIfNeeded();
    await expect(advisorSettingsMainPage.hyattValue).toHaveText(originalHyatt);
    await expect(advisorSettingsMainPage.heraValue).toHaveText(originalHera);
    await expect(advisorSettingsMainPage.leadingAdvisorValue).toHaveText(originalLeadingAdvisor);
  });

    test('Should NOT save changes when booking platform settings form is cancelled', async ({
        authenticatedPage,
        advisorHomePage,
        advisorSettingsMainPage,
    }) => {
        await advisorHomePage.settingsButton.click();
        await advisorSettingsMainPage.generalTab.click();
        await advisorSettingsMainPage.waitForPageLoad();
    
        const originalCurrency = (await advisorSettingsMainPage.selectedCurrencyLabel.textContent()) ?? '';
    
        await advisorSettingsMainPage.bookingPlatformEditButton.click();
        await advisorSettingsMainPage.fillDefaultCurrency(ClientSettingsData);
        await advisorSettingsMainPage.bookingsCancelButton.click();
    
        await expect(advisorSettingsMainPage.selectedCurrencyLabel).toHaveText(originalCurrency);
    });

test('Should NOT save changes when personal information form is cancelled', async ({
  authenticatedPage,
  advisorHomePage,
  advisorSettingsMainPage,
}) => {
  // Navigate to settings in the home page
  await advisorHomePage.settingsButton.click();

  // Navigate to general tab in settings page
  await advisorSettingsMainPage.generalTab.click();
  await advisorSettingsMainPage.waitForPageLoad();

  // Store original values
  const originalCountry = (await advisorSettingsMainPage.personalInformationcountry.textContent()) ?? '';
  const originalAddress = (await advisorSettingsMainPage.personalInformationaddress.textContent()) ?? '';
  
   const originalCity = (await advisorSettingsMainPage.personalInformationcity.textContent())?.trim() ?? '';

  await advisorSettingsMainPage.personalInformationstate.waitFor({ state: 'visible' });
  //const originalState = (await advisorSettingsMainPage.personalInformationstate.inputValue()) ?? '';
  const originalState = (await advisorSettingsMainPage.personalInformationstate.textContent())?.trim() ?? '';
  const originalZip = (await advisorSettingsMainPage.personalInformationzipcode.textContent())?.trim() ?? '';
  //const originalZip = (await advisorSettingsMainPage.personalInformationzipcode.textContent()) ?? '';
  const originalPhone = (await advisorSettingsMainPage.personalInformationphone.textContent()) ?? '';

  // Click edit 
  await advisorSettingsMainPage.personalInformationEditButton.click();
  await advisorSettingsMainPage.fillPersonalInformation(ClientSettingsData);

  // Click cancel 
  await advisorSettingsMainPage.personalInformationCancelButton.click();

  // Assertions: values should remain the same (unchanged)
  await expect(advisorSettingsMainPage.personalInformationcountry).toHaveText(originalCountry);
  await expect(advisorSettingsMainPage.personalInformationaddress).toHaveText(originalAddress);
  await expect(advisorSettingsMainPage.personalInformationcity).toHaveText(originalCity);
  await expect(advisorSettingsMainPage.personalInformationstate).toHaveText(originalState);
  await expect(advisorSettingsMainPage.personalInformationzipcode).toHaveText(originalZip);
  await expect(advisorSettingsMainPage.personalInformationphone).toHaveText(originalPhone);
});

});