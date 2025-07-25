import { AdvisorBasePage } from "../AdvisorBasePage";
import { Locator, Page } from "@playwright/test";

export class AdvisorBookingsPage extends AdvisorBasePage {
    // Selectors
    private submitBookingButtonSelector = 'button:has-text("Submit booking")';
    readonly submitBookingButton: Locator;

    constructor(page: Page) {
        super(page);
        this.submitBookingButton = this.page.locator(this.submitBookingButtonSelector);
    }
}