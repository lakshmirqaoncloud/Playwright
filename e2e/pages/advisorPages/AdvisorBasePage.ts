import { Page, Locator } from '@playwright/test';

export class AdvisorBasePage {

    protected page: Page;

    // Header Nav Bar

    private homeButtonSelector = '[href="/"]';
    readonly homeButton: Locator;

    private bookButtonSelector = '[href="/partners/hotels?view_mode=landing&supplierType=hotels"]';
    readonly bookButton: Locator;

    private manageButtonSelector = '[href="/trips"]';  
    readonly manageButton: Locator;

    private learnButtonSelector = '[href="/learn/essentials"]';  
    readonly learnButton: Locator;

    private settingsButtonSelector = '[href="/settings"]';  
    readonly settingsButton: Locator;

    // TODO: Add right side of header nav bar: IATA# and Profile Icon


    
    // Side Bar on Home

    private getStartedButtonSelector = '[href="/get-started"]'; 
    readonly getStartedButton: Locator;

    private dashboardButtonSelector = '[href="/home"]';
    readonly dashboardButton: Locator;

    private badgesButtonSelector = '[href="/badges"]';  
    readonly badgesButton: Locator;

    private eventsButtonSelector = '[href="/events"]';
    readonly eventsButton: Locator;

    private policiesButtonSelector = '[href="/policies/community-guidelines"]';
    readonly policiesButton: Locator;

    // Side Bar on Book

    private partnersButtonSelector = '[href="/partners/hotels?view_mode=landing&supplierType=hotels"]';
    readonly partnersButton: Locator;

    private reviewsButtonSelector = '[href="/partners/advisor-reviews"]';
    readonly reviewsButton: Locator;

    private partnerProgramsButtonSelector = '[href="/partners/programs"]';
    readonly partnerProgramsButton: Locator;

    private listsButtonSelector = '[href="/partners/lists"]';
    readonly listsButton: Locator;

    // Side Bar on Manage

    private tripsButtonSelector = '[href="/trips"]';
    readonly tripsButton: Locator;

    private bookingsButtonSelector = '[href="/bookings"]';
    readonly bookingsButton: Locator;

    private clientsButtonSelector = '[tabindex="0"][href="/clients"]';
    readonly clientsButton: Locator;

    private paymentsButtonSelector = '[href="/payments"]';
    readonly paymentsButton: Locator;

    private leadsButtonSelector = '[href="/leads"]';
    readonly leadsButton: Locator;

    private foraProfileButtonSelector = '[href="/fora-profile"]';
    readonly foraProfileButton: Locator;

    private shareableAssetsButtonSelector = '[href="/shareable-assets"]';
    readonly shareableAssetsButton: Locator;

    private brandAssetsButtonSelector = '[href="/brand-assets"]';
    readonly brandAssetsButton: Locator;

    private templatesAndFormsButtonSelector = '[href="/resources"]';
    readonly templatesAndFormsButton: Locator;

    // Side Bar on Learn
    private essentialsButtonSelector = '[href="/learn/essentials"]';
    readonly essentialsButton: Locator;

    private advancedButtonSelector = '[href="/learn/advanced"]';
    readonly advancedButton: Locator;

    private cruiseButtonSelector = '[href="/learn/cruise"]';
    readonly cruiseButton: Locator;

    private travelButtonSelector = '[href="/learn/travel"]';
    readonly travelButton: Locator;

    private businessSkillsButtonSelector = '[href="/learn/business-skills"]';
    readonly businessSkillsButton: Locator;

    private marketingButtonSelector = '[href="/learn/marketing"]';
    readonly marketingButton: Locator;

    private partnersLibraryButtonSelector = '[href="/learn/partners"]';
    readonly partnersLibraryButton: Locator;

    private destinationsButtonSelector = '[href="/learn/destinations"]';
    readonly destinationsButton: Locator;

    private allTrainingsButtonSelector = '[href="/learn/all"]';
    readonly allTrainingsButton: Locator;


    constructor(page: Page) {
        this.page = page;

        // Header Nav Bar
        this.homeButton = this.page.locator(this.homeButtonSelector);
        this.bookButton = this.page.locator(this.bookButtonSelector).first();
        this.manageButton = this.page.locator(this.manageButtonSelector);
        this.learnButton = this.page.locator(this.learnButtonSelector);
        this.getStartedButton = this.page.locator(this.getStartedButtonSelector);
        this.settingsButton = this.page.locator(this.settingsButtonSelector);

        // Side Bar on Home
        this.dashboardButton = this.page.locator(this.dashboardButtonSelector);
        this.badgesButton = this.page.locator(this.badgesButtonSelector);
        this.eventsButton = this.page.locator(this.eventsButtonSelector);
        this.policiesButton = this.page.locator(this.policiesButtonSelector);

        // Side Bar on Book
        this.partnersButton = this.page.locator(this.partnersButtonSelector);
        this.reviewsButton = this.page.locator(this.reviewsButtonSelector);
        this.partnerProgramsButton = this.page.locator(this.partnerProgramsButtonSelector);
        this.listsButton = this.page.locator(this.listsButtonSelector);

        // Side Bar on Manage
        this.tripsButton = this.page.locator(this.tripsButtonSelector);
        this.bookingsButton = this.page.locator(this.bookingsButtonSelector);
        this.clientsButton = this.page.locator(this.clientsButtonSelector).first();
        this.paymentsButton = this.page.locator(this.paymentsButtonSelector);
        this.leadsButton = this.page.locator(this.leadsButtonSelector);

        // Side Bar on Learn
        this.essentialsButton = this.page.locator(this.essentialsButtonSelector);
        this.advancedButton = this.page.locator(this.advancedButtonSelector);
        this.cruiseButton = this.page.locator(this.cruiseButtonSelector);
        this.travelButton = this.page.locator(this.travelButtonSelector);
        this.businessSkillsButton = this.page.locator(this.businessSkillsButtonSelector);
        this.marketingButton = this.page.locator(this.marketingButtonSelector);
        this.partnersLibraryButton = this.page.locator(this.partnersLibraryButtonSelector);

    }

    /**
     * Navigate to a specific URL
     * @param url The URL to navigate to
     */
    async goto(url: string) {
        await this.page.goto(url);
    }

    /**
     * Wait for the page to be loaded
     */
    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }
} 