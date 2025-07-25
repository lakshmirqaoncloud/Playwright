import { Page, Locator } from "@playwright/test";
import { AdvisorBasePage } from "../AdvisorBasePage";

export class AdvisorHomePage extends AdvisorBasePage {

    constructor(page: Page) {
        super(page);
    }

    async navigateToHome() {
        await this.goto('/');
        await this.waitForPageLoad();
    }
}