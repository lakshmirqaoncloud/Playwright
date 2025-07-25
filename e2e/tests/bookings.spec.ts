import { test, expect } from '../util/AdvisorBaseTest';
import TestDataManager from '../util/TestDataManager';
import Utilities from '../util/Utilities';

test.describe('Bookings', () => {

    test('Book hotel with existing client in portal', async ({ 
        authenticatedPage, 
        advisorHomePage, 
        advisorPartnersPage 
    }) => {
        await advisorHomePage.bookButton.click();

        const { firstDateFormatted, secondDateFormatted } = Utilities.calendarDateRange();
        
        // Get test data
        const bookingDetails = TestDataManager.getDefaultBookingDetails();
        const paymentInfo = TestDataManager.getTestPaymentInfo();

        // Perform complete booking workflow using page object methods
        await advisorPartnersPage.performCompleteBookingWorkflow(
            bookingDetails.destination,
            firstDateFormatted,
            secondDateFormatted,
            bookingDetails.clientName,
            bookingDetails.guestCount
        );

        // Verify booking confirmation
        await expect(advisorPartnersPage.finalizingBooking).toBeVisible();
        await expect(advisorPartnersPage.bookingConfirmation).toBeVisible({ timeout: 60000 });
    });

    test('Book hotel with different destination', async ({ 
        authenticatedPage, 
        advisorHomePage, 
        advisorPartnersPage 
    }) => {
        await advisorHomePage.bookButton.click();

        const { firstDateFormatted, secondDateFormatted } = Utilities.calendarDateRange();

        const bookingDetails = TestDataManager.getDefaultBookingDetails(); 
        await advisorPartnersPage.performCompleteBookingWorkflow(
            bookingDetails.destination,
            firstDateFormatted,
            secondDateFormatted,
            bookingDetails.clientName,
            bookingDetails.guestCount
        );

        // Verify booking confirmation
        await expect(advisorPartnersPage.finalizingBooking).toBeVisible();
        await expect(advisorPartnersPage.bookingConfirmation).toBeVisible({ timeout: 60000 });
    });
});

