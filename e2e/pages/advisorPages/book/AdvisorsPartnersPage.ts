import { AdvisorBasePage } from "../AdvisorBasePage";
import { Locator, Page } from "@playwright/test";
import TestDataManager from "../../../util/TestDataManager";

export class AdvisorPartnersPage extends AdvisorBasePage {
    // Selectors
    private hotelsButtonSelector = '.swiper-wrapper:has-text("Hotels")';
    readonly hotelsButton: Locator;

    private cruisesButtonSelector = '.swiper-wrapper:has-text("Cruises")';
    readonly cruisesButton: Locator;

    private toursButtonSelector = '.swiper-wrapper:has-text("Day Tours & Activities")';
    readonly toursButton: Locator;

    private dmcButtonSelector = '.swiper-wrapper:has-text("DMCs")';
    readonly dmcButton: Locator;

    private flightsButtonSelector = '.swiper-wrapper:has-text("Flights")';
    readonly flightsButton: Locator;

    private homesAndVillasButtonSelector = '.swiper-wrapper:has-text("Homes & Villas")';
    readonly homesAndVillasButton: Locator;

    private insuranceButtonSelector = '.swiper-wrapper:has-text("Insurance & Travel Protection")';
    readonly insuranceButton: Locator;

    private multidayToursButtonSelector = '.swiper-wrapper:has-text("Multiday Tours")';
    readonly multidayToursButton: Locator;

    private packagesButtonSelector = '.swiper-wrapper:has-text("Packages")';
    readonly packagesButton: Locator;

    private transportationButtonSelector = '.swiper-wrapper:has-text("Transportation")';
    readonly transportationButton: Locator;

    private searchBarSelector = '[data-test-id="search-input-where"]';
    readonly searchBar: Locator;

    private dateRangeSelector = '[data-test-id="search-input-when"]';
    readonly dateRange: Locator;

    private guestsSelector = '[data-test-id="search-input-who"]';
    readonly guests: Locator;

    private searchButtonSelector = 'hotels-search-button';
    readonly searchButton: Locator;

    private calendarNextMonthButtonSelector = 'button[aria-label="Go to the Next Month"]';
    readonly calendarNextMonthButton: Locator;

    private calendarPreviousMonthButtonSelector = 'button[aria-label="Go to the Previous Month"]';
    readonly calendarPreviousMonthButton: Locator;

    private decrementGuestsButtonSelector = 'decrement-travelers';
    readonly decrementGuestsButton: Locator;

    private incrementGuestsButtonSelector = 'increment-travelers';
    readonly incrementGuestsButton: Locator;

    // NEW: Booking flow selectors
    private firstHotelPriceSelector = '.text-medium.text-secondaryDark:has-text("$")';
    readonly firstHotelPrice: Locator;

    private ratesListItemSelector = 'rates-list-item';
    readonly ratesListItem: Locator;

    private scrollToBookButtonSelector = 'button#scrollToBook';
    readonly scrollToBookButton: Locator;

    private continueButtonSelector = 'button:has-text("Continue")';
    readonly continueButton: Locator;

    private clientSelectorSelector = '[placeholder="Select a client"]';
    readonly clientSelector: Locator;

    private addCardButtonSelector = 'add-card';
    readonly addCardButton: Locator;

    private completeBookingButtonSelector = 'button:has-text("Complete Booking")';
    readonly completeBookingButton: Locator;

    private bookingConfirmationSelector = 'banner-Booking confirmed';
    readonly bookingConfirmation: Locator;

    private automatedCardRadioSelector = 'Automation Test'; //Fix this later
    readonly automatedCardRadio: Locator;

    private finalizingBookingSelector = 'Finalizing your booking';
    readonly finalizingBooking: Locator;

    private supplierTabSelector = 'supplier-tab-';

    // Payment form selectors
    private cardNumberIframeSelector = 'iframe[name="tx_iframe_card-tokenex-element"]';
    private cardNumberInputSelector = 'input[name="cardNumber"]';
    
    private cvvIframeSelector = 'iframe[name="tx_iframe_cvv-tokenex-element"]';
    private cvvInputSelector = '[placeholder="CVC"]';
    
    private expiryDateSelector = 'input[name="expiringDate"]';
    private cardHolderSelector = 'input[name="cardHolder"]';
    private addressSelector = 'address';
    private addressAdditionalSelector = 'address_additional';
    private citySelector = 'city';
    private stateSelector = 'state';
    private postalCodeSelector = 'postal_code';
    private submitPaymentSelector = '#btnSubmit';


// Card data assertions
private viewMoreSelector = 'span.cursor-pointer:has-text("View")';
readonly viewMore: Locator;

    constructor(page: Page) {

        super(page);

        this.hotelsButton = this.page.locator(this.hotelsButtonSelector);
        this.cruisesButton = this.page.locator(this.cruisesButtonSelector);
        this.toursButton = this.page.locator(this.toursButtonSelector);
        this.dmcButton = this.page.locator(this.dmcButtonSelector);
        this.flightsButton = this.page.locator(this.flightsButtonSelector);
        this.homesAndVillasButton = this.page.locator(this.homesAndVillasButtonSelector);
        this.insuranceButton = this.page.locator(this.insuranceButtonSelector);
        this.multidayToursButton = this.page.locator(this.multidayToursButtonSelector);
        this.packagesButton = this.page.locator(this.packagesButtonSelector);   
        this.transportationButton = this.page.locator(this.transportationButtonSelector);
        this.searchBar = this.page.locator(this.searchBarSelector);
        this.dateRange = this.page.locator(this.dateRangeSelector);
        this.guests = this.page.locator(this.guestsSelector);
        this.searchButton = this.page.getByTestId(this.searchButtonSelector);
        this.calendarNextMonthButton = this.page.locator(this.calendarNextMonthButtonSelector);
        this.calendarPreviousMonthButton = this.page.locator(this.calendarPreviousMonthButtonSelector);
        this.decrementGuestsButton = this.page.getByTestId(this.decrementGuestsButtonSelector);
        this.incrementGuestsButton = this.page.getByTestId(this.incrementGuestsButtonSelector);
        // Booking flow elements
        this.firstHotelPrice = this.page.locator(this.firstHotelPriceSelector);
        this.ratesListItem = this.page.getByTestId(this.ratesListItemSelector);
        this.scrollToBookButton = this.page.locator(this.scrollToBookButtonSelector);
        this.continueButton = this.page.locator(this.continueButtonSelector);
        this.clientSelector = this.page.locator(this.clientSelectorSelector);
        this.addCardButton = this.page.getByTestId(this.addCardButtonSelector);
        this.completeBookingButton = this.page.locator(this.completeBookingButtonSelector);
        this.bookingConfirmation = this.page.getByTestId(this.bookingConfirmationSelector);
        this.automatedCardRadio = this.page.getByText(this.automatedCardRadioSelector);
        this.finalizingBooking = this.page.getByText(this.finalizingBookingSelector);
        this.viewMore = page.locator(this.viewMoreSelector);
    }

    async selectDate(date: string) {
        const dateLocator = this.page.locator(`[aria-label*="${date}"]`);
        if (await dateLocator.count() > 0) {
            await dateLocator.click({ force: true });
        } else {
            await this.calendarNextMonthButton.click();
            await this.selectDate(date);
        }
    }

    async searchForHotels(
        destination: string, 
        checkInDate: string, 
        checkOutDate: string, 
        guestCount: number = 2
    ) {
        await this.searchBar.click();
        await this.searchBar.fill(destination);
        await this.dateRange.click({ force: true });
        
        // Select dates using the provided formatted dates
        await this.page.getByRole('button', { name: new RegExp(checkInDate) }).click();
        await this.page.getByRole('button', { name: new RegExp(checkOutDate) }).click();
        
        // Adjust guest count
        await this.guests.click();
        
        // Reset to 1 guest, then add desired number; Can just remove this later and just test directly with guestCount
        await this.decrementGuestsButton.click();
        for (let i = 1; i < guestCount; i++) {
            await this.incrementGuestsButton.click();
        }
        
        await this.searchButton.click();
    }

    async selectFirstAvailableHotel() {
        await this.firstHotelPrice.first().click({ timeout: 30000 });  // Takes long 
        await this.page.waitForResponse(response => response.url().includes('rates') && response.status() === 200); //Wait for rates to load first
        await this.page.getByText(('Rates from $')).first().click();
        //await this.selectSupplierTab('Regular Rates');
        await this.ratesListItem.first().click();
        
        await this.scrollToBookButton.click();
        await this.continueButton.click();
    }
    async selectFirstExpediaRateHotel() {
        await this.firstHotelPrice.first().click({ timeout: 30000 });  // Takes long ;
        await this.page.waitForResponse(response => response.url().includes('rates') && response.status() === 200); //Wait for rates to load first
        await this.page.locator('a', { has: this.page.locator('[data-testid="supplier-tab-Expedia"]') }).click({force:true});
        await this.ratesListItem.first().click();
        
        await this.scrollToBookButton.click();
        await this.continueButton.click();
    }

    async selectClient(clientName: string) {
        await this.clientSelector.click();
        await this.page.getByText(clientName).click();
    }

    async fillPaymentForm(paymentInfo: any) {
        await this.addCardButton.click();

        // Fill credit card information in iframe
        await this.page.frameLocator(this.cardNumberIframeSelector)
            .locator(this.cardNumberInputSelector)
            .fill(paymentInfo.cardNumber);
        
        await this.page.locator(this.expiryDateSelector).fill(paymentInfo.expiryDate);
        
        await this.page.frameLocator(this.cvvIframeSelector)
            .locator(this.cvvInputSelector)
            .fill(paymentInfo.cvv);
        
        await this.page.locator(this.cardHolderSelector).fill(paymentInfo.cardHolder);
        
        // Fill address information
        await this.page.getByTestId(this.addressSelector).fill(paymentInfo.address);
        await this.page.getByTestId(this.addressAdditionalSelector).fill(paymentInfo.addressAdditional);
        await this.page.getByTestId(this.citySelector).fill(paymentInfo.city);
        await this.page.getByTestId(this.stateSelector).fill(paymentInfo.state);
        await this.page.getByTestId(this.postalCodeSelector).fill(paymentInfo.postalCode);
        
        // Submit payment form
        await this.page.locator(this.submitPaymentSelector).click();
    }

    async validateCardSummary(paymentInfo: any) {
        if (await this.viewMore.isVisible()) {
            await this.viewMore.click();
        }
        await this.page.locator(`label:has-text("${paymentInfo.cardHolder}") input[type="radio"]`).last().click();
        await this.page.locator(`text=Ending in ${paymentInfo.cardNumber.slice(-4)}`).last().isVisible();
        await this.page.locator(`text=Exp. ${paymentInfo.expiryDate}`).last().isVisible();
        await this.page.locator(`text=${paymentInfo.address}`).last().isVisible();
        await this.page.locator(`text=${paymentInfo.addressAdditional}`).last().isVisible();
        await this.page.locator(`text=${paymentInfo.city}`).last().isVisible();
        await this.page.locator(`text=${paymentInfo.country}`).last().isVisible();
        await this.page.locator(`text=${paymentInfo.postalCode}`).last().isVisible();
    }


    async selectSupplierTab(supplierName: string) {
        await this.page.getByTestId(this.supplierTabSelector + supplierName).click();
    }

    /**
     * Performs the complete booking workflow from search to confirmation
     * @param destination - The destination to search for
     * @param checkInDate - Check-in date
     * @param checkOutDate - Check-out date  
     * @param clientName - Name of the client to assign the booking to
     * @param guestCount - Number of guests (defaults to 2)
     */
    async performCompleteBookingWorkflow(
        destination: string, 
        checkInDate: string, 
        checkOutDate: string, 
        clientName: string, 
        guestCount: number = 2
    ) {
        await this.searchForHotels(destination, checkInDate, checkOutDate, guestCount);
        await this.selectFirstAvailableHotel();
        await this.selectClient(clientName); // TODO: Find better selector and then get rid of function
        await this.automatedCardRadio.first().click();
        await this.page.waitForTimeout(2000); // This happens because trip is not selected, so when we go to the next step it doesn't let you proceed because a trip is not selected yet
        await this.completeBookingButton.click();
    }

    async performExpediaCompleteBookingWorkflow( // TODO: Remove this method and add param for supplier to use for Expedia
        destination: string, 
        checkInDate: string, 
        checkOutDate: string, 
        clientName: string, 
        guestCount: number = 2
    ) {
        await this.searchForHotels(destination, checkInDate, checkOutDate, guestCount);
        await this.selectFirstExpediaRateHotel();
        await this.selectClient(clientName); // TODO: Find better selector and then get rid of function
        await this.automatedCardRadio.first().click();
        await this.page.waitForTimeout(2000); // This happens because trip is not selected, so when we go to the next step it doesn't let you proceed because a trip is not selected yet
        await this.completeBookingButton.click();
        
    }
}