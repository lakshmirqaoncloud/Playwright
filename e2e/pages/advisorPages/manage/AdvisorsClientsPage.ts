import { AdvisorBasePage } from "../AdvisorBasePage";
import { Locator, Page } from "@playwright/test";

export class AdvisorClientsPage extends AdvisorBasePage {
    // Selectors
    private addClientButtonSelector = 'button:has-text("Add Client")';
    readonly addClientButton: Locator;
    
    private clientsLinkSelector = 'Clients';
    readonly clientsLink: Locator;
    
    private creditCardsButtonSelector = 'button:has-text("Credit Cards")';
    readonly creditCardsButton: Locator;
    
    private addCardButtonSelector = 'button:has-text("Add Card")';
    readonly addCardButton: Locator;
    
    private enterManuallyButtonSelector = 'Enter manually';
    readonly enterManuallyButton: Locator;
    
    private successMessageSelector = "Successfully added credit card";
    readonly successMessage: Locator;
    
    private gotItButtonSelector = 'button:has-text("Got it")';
    readonly gotItButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addClientButton = this.page.locator(this.addClientButtonSelector);
        this.clientsLink = this.page.getByRole('link', { name: this.clientsLinkSelector });
        this.creditCardsButton = this.page.locator(this.creditCardsButtonSelector);
        this.addCardButton = this.page.locator(this.addCardButtonSelector);
        this.enterManuallyButton = this.page.getByText(this.enterManuallyButtonSelector);
        this.successMessage = this.page.getByText(this.successMessageSelector);
        this.gotItButton = this.page.locator(this.gotItButtonSelector);
    }

    /**
     * Navigates to a specific client by name
     * @param clientName The name of the client to navigate to
     */
    async navigateToClient(clientName: string) {
        await this.clientsLink.click();
        await this.page.getByText(clientName).first().click();
    }

    /**
     * Fills the manual payment form with the provided payment information
     * @param paymentInfo Object containing payment details (cardNumber, expiryDate, cvv, cardHolder, address, etc.)
     */
    async fillManualPaymentForm(paymentInfo: any) {
        await this.page.frameLocator('iframe[name="tx_iframe_card-tokenex-element"]')
            .locator('input[name="cardNumber"]')
            .fill(paymentInfo.cardNumber);
        
        await this.page.locator('input[name="expiringDate"]').fill(paymentInfo.expiryDate);
        
        await this.page.frameLocator('iframe[name="tx_iframe_cvv-tokenex-element"]')
            .getByPlaceholder('CVC')
            .fill(paymentInfo.cvv);
        
        await this.page.locator('input[name="cardHolder"]').fill(paymentInfo.cardHolder);
        
        await this.page.getByTestId('address').fill(paymentInfo.address);
        await this.page.getByTestId('address_additional').fill(paymentInfo.addressAdditional);
        await this.page.getByTestId('city').fill(paymentInfo.city);
        await this.page.getByTestId('state').fill(paymentInfo.state);
        await this.page.getByTestId('postal_code').fill(paymentInfo.postalCode);
        
        await this.page.locator('#btnSubmit').click();
    }
}