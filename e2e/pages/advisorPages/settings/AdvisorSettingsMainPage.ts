import { AdvisorBasePage } from '../AdvisorBasePage';
import { Page, Locator } from '@playwright/test';


export class AdvisorSettingsMainPage extends AdvisorBasePage {


  private generalTabSelector = 'a:has-text("General")';
  readonly generalTab: Locator;

  private brandingTabSelector = 'role=tab[name="Branding"]';
  readonly brandingTab: Locator;


  //selectors for advisor IDs section

  private advisorIdsEditButtonSelector = 'div.flex.items-center:has(div:text("Advisor IDs")) >> button:has-text("Edit")';
  readonly advisorIdsEditButton: Locator;


  private hyattValueSelector = 'text=World Of Hyatt >> xpath=../../div[2]/div';
  readonly hyattValue: Locator;

  private heraValueSelector = 'text=Hera >> xpath=../../div[2]/div';
  readonly heraValue: Locator;

  private leadingAdvisorValueSelector = 'text=Leading Advisor Number (Leading Hotels Of The World) >> xpath=../../div[2]/div';
  readonly leadingAdvisorValue: Locator;

  private advisorIdSaveButtonSelector = 'button:has-text("Save")';
  readonly advisorIdSaveButton: Locator;

  private advisorIdCancelButtonSelector = 'button:has-text("Cancel")'
  readonly advisorIdcancelButton: Locator;

  private worldOfHyattInputSelector = '[data-testid="add-external-ids-modal-input"]';
  readonly worldOfHyattInput: Locator;
  

  private heraInputSelector = '[data-testid="add-external-ids-modal-input"]';
  readonly heraInput: Locator;

  
  private leadingAdvisorInputSelector = '[data-testid="add-external-ids-modal-input"]';
  readonly leadingAdvisorInput: Locator;

  
  private modalTitleSelector = 'header >> text=Advisor IDs';
  readonly modalTitle: Locator;

  //selectors for booking platform settings

  private bookingPlatformEditButtonSelector = 'div.flex.items-center:has(p:text("Booking platform settings")) >> button:has-text("Edit")';
  readonly bookingPlatformEditButton: Locator;

  private currencyDropdownSelector = '[data-testid="select-default-currency-for-display-of-rates"]';
  private currencyOptionSelector = (currency: string) => `role=option[name="${currency}"]`;
  readonly currencyDropdown: Locator;

  private selectedCurrencyLabelSelector = '[data-testid="currency"]';
  readonly selectedCurrencyLabel: Locator;


  readonly bookingsmodaltitle: Locator;
  private bookingmodalTitleSelector = 'header >> text=Booking platform settings';

  private bookingsSaveButtonSelector = 'button:has-text("Save")';
  readonly bookingsSaveButton: Locator;

  private bookingsCancelButtonSelector = 'button:has-text("Cancel")'
  readonly bookingsCancelButton: Locator;



  constructor(page: Page) {
    super(page);
    this.generalTab = page.locator(this.generalTabSelector);
    this.brandingTab = page.locator(this.brandingTabSelector);
    this.advisorIdsEditButton = page.locator(this.advisorIdsEditButtonSelector);
    this.hyattValue = page.locator(this.hyattValueSelector);
    this.heraValue = page.locator(this.heraValueSelector);
    this.leadingAdvisorValue = page.locator(this.leadingAdvisorValueSelector);
    this.advisorIdSaveButton = page.locator(this.advisorIdSaveButtonSelector);
    this.advisorIdcancelButton = page.locator(this.advisorIdCancelButtonSelector);
    this.worldOfHyattInput = page.locator(this.worldOfHyattInputSelector).nth(0)
    this.heraInput = page.locator(this.heraInputSelector).nth(1);
    this.leadingAdvisorInput = page.locator(this.leadingAdvisorInputSelector).nth(2);
    this.modalTitle = page.locator(this.modalTitleSelector);

    //for booking platform settings
    this.bookingPlatformEditButton = page.locator(this.bookingPlatformEditButtonSelector);
    this.currencyDropdown = page.locator(this.currencyDropdownSelector);
    this.bookingsmodaltitle = page.locator(this.bookingmodalTitleSelector);
    this.bookingsSaveButton = page.locator(this.bookingsSaveButtonSelector);
    this.bookingsCancelButton = page.locator(this.bookingsCancelButtonSelector);
    this.selectedCurrencyLabel = page.locator(this.selectedCurrencyLabelSelector);

  }

  //Method to fill the advisor id details
  async fillAdvisorIDsForm(advisorSettingsData: any) {
    await this.worldOfHyattInput.fill(advisorSettingsData.worldOfHyatt);
    await this.heraInput.fill(advisorSettingsData.hera);
    await this.leadingAdvisorInput.fill(advisorSettingsData.leadingAdvisor);

  }
  // Method to fill the default currency in booking platform settings
  async fillDefaultCurrency(advisorSettingsData: any) {
    const currency = advisorSettingsData.defaultCurrency;
    if (!currency) throw new Error('Currency not provided');
    // Step 1: Open dropdown
    await this.currencyDropdown.click();

    // Step 2: Click the desired currency option
    await this.page.locator(this.currencyOptionSelector(currency)).click();
    ;
  }
}

