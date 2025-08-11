import { test, expect } from '../util/AdvisorBaseTest';
import TestDataManager from '../util/TestDataManager';
import Utilities from '../util/Utilities';

test.describe('Cancel Bookings', () => {

    test('Cancel an upcoming hotel booking for an existing client via the Portal', async ({
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

        await expect(advisorPartnersPage.finalizingBooking).toBeVisible();
        await expect(advisorPartnersPage.bookingConfirmation).toBeVisible({ timeout: 60000 });
        await expect(advisorPartnersPage.upcomingBadge).toBeVisible();
        await advisorPartnersPage.performCancelBooking('portal');
        await expect(advisorPartnersPage.canceledBadge).toBeVisible();


    });

     test('Cancel an upcoming hotel booking for an existing client via the partner', async ({
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

        await expect(advisorPartnersPage.finalizingBooking).toBeVisible();
        await expect(advisorPartnersPage.bookingConfirmation).toBeVisible({ timeout: 60000 });
        await expect(advisorPartnersPage.upcomingBadge).toBeVisible();
        await advisorPartnersPage.performCancelBooking('partner');
        await expect(advisorPartnersPage.canceledBadge).toBeVisible();


    });


    test('Cancel a hotel booking in Travelling status for an existing client via the Partner', async ({
        authenticatedPage,
        advisorHomePage,
        advisorPartnersPage
    }) => {
        await advisorHomePage.bookButton.click();

        const { firstDateFormatted, secondDateFormatted } = Utilities.calendarDateRange(0, 0, 2, 2);

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

        await expect(advisorPartnersPage.finalizingBooking).toBeVisible();
        await expect(advisorPartnersPage.bookingConfirmation).toBeVisible({ timeout: 60000 });
        await expect(advisorPartnersPage.travelingBadge).toBeVisible();
        await advisorPartnersPage.performCancelBooking('partner');
        await expect(advisorPartnersPage.canceledBadge).toBeVisible();


    });
});

