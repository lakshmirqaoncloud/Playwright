import { test, expect } from '../util/AdvisorBaseTest';
import TestDataManager from '../util/TestDataManager';
import Utilities from '../util/Utilities';
import { AdvisorHomePage } from '../pages/advisorPages/home/AdvisorHomePage';
import { AdvisorClientsPage } from '../pages/advisorPages/manage/AdvisorsClientsPage';

test.describe('Adding Cards', () => {

    test('Should be able to add a card in Manage manually', async ({ 
        authenticatedPage, 
        advisorHomePage 
    }) => {
        const paymentInfo = TestDataManager.getTestPaymentInfo();
        const clientName = TestDataManager.getDefaultBookingDetails().clientName;
        const advisorClientsPage = new AdvisorClientsPage(authenticatedPage);

        await advisorHomePage.manageButton.click();
        await advisorClientsPage.navigateToClient(clientName);
        await advisorClientsPage.creditCardsButton.click();
        await advisorClientsPage.addCardButton.click();
        await advisorClientsPage.enterManuallyButton.click();
        
        // Use page object method for payment form filling
        await advisorClientsPage.fillManualPaymentForm(paymentInfo);

        await expect(advisorClientsPage.successMessage).toBeVisible();
        await advisorClientsPage.gotItButton.click();
    });

    test('Should be able to add a card while booking', async ({ 
        authenticatedPage, 
        advisorHomePage, 
        advisorPartnersPage 
    }) => {
        // Navigate to booking section
        await advisorHomePage.bookButton.click();

        // Get dynamic date range for booking
        const { firstDateFormatted, secondDateFormatted } = Utilities.calendarDateRange();
        
        // Get test data
        const bookingDetails = TestDataManager.getDefaultBookingDetails();
        const paymentInfo = TestDataManager.getTestPaymentInfo();

        // Perform hotel search and selection
        await advisorPartnersPage.searchForHotels(
            bookingDetails.destination,
            firstDateFormatted,
            secondDateFormatted,
            bookingDetails.guestCount
        );
        
        await advisorPartnersPage.selectFirstAvailableHotel();
        await advisorPartnersPage.selectClient(bookingDetails.clientName);
        
        // Fill payment form (this is the main test focus)
        await advisorPartnersPage.fillPaymentForm(paymentInfo);

        //validation for the card being added and newly added card to be selected
        await advisorPartnersPage.validateCardSummary(paymentInfo)

       // TODO: Teardown for card deletion
    });

});