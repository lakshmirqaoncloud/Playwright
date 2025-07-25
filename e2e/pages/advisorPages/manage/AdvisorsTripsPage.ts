import { Locator, Page } from "@playwright/test";
import { AdvisorBasePage } from "../AdvisorBasePage";

export class AdvisorTripsPage extends AdvisorBasePage {

    // Selectors
    private createTripButtonSelector = '[href="/trips/create"][0]'; // Opens in a new tab
    readonly createTripButton: Locator;

    private submitBookingButtonSelector = 'button:has-text("Submit booking")';
    readonly submitBookingButton: Locator;

    



    constructor(page: Page) {
        super(page);

        this.createTripButton = this.page.locator(this.createTripButtonSelector);
        
    }
}