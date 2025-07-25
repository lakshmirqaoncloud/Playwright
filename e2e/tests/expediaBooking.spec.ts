import { test, expect } from '../util/AdvisorBaseTest';
import TestDataManager from '../util/TestDataManager';
import Utilities from '../util/Utilities';

test.describe('Expedia Booking', () => {

    test('should be able to book hotel with existing client under expedia rate in portal', async ({ 
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
        await advisorPartnersPage.performExpediaCompleteBookingWorkflow(
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

    //Do negative flow 'should not be able to book hotel with existing client under expedia rate in portal'

});

// We should move this to bookings spec, this is still a booking test but just add a different describe block for Expedia