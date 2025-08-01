import { ClientSettingsData } from '../../../util/TestDataManager';
import { AdvisorBasePage } from '../AdvisorBasePage';

import { Page, Locator } from '@playwright/test';


export class AdvisorSettingsMainPage extends AdvisorBasePage {


  private generalTabSelector = 'a:has-text("General")';
  readonly generalTab: Locator;

  private brandingTabSelector = 'role=tab[name="Branding"]';
  readonly brandingTab: Locator;


  //Selector for personal information section

  private personalInformationEditButtonSelector = 'text=Personal information >> .. >> button:has-text("Edit")';
  readonly personalInformationEditButton: Locator;

  private personalInformationcountrySelector = '[data-testid="country"]'
  readonly personalInformationcountry: Locator;
  private personalInformationaddressSelector = '[data-testid="address1"]';
  readonly personalInformationaddress: Locator;
  private personalInformationcitySelector = 'input[data-testid="city"]';
  readonly personalInformationcity: Locator;
  private personalInformationstateSelector = 'input[data-testid="state"]';
  readonly personalInformationstate: Locator;
  private personalInformationzipcodeSelector = '[data-testid="zipCode"]';
  readonly personalInformationzipcode: Locator;
  private personalInformationphoneSelector = '[data-testid="phoneNumber"]';
  readonly personalInformationphone: Locator;
  private personalInformationtimezoneSelector = '[data-testid="timezone"]';
  readonly personalInformationtimezone: Locator;
  private personalInformationaddressInputSelector = 'input[data-testid="address"]';
  readonly personalInformationaddressInput: Locator;
  private personalInformationcountryInputSelector = '#country_id input[role="combobox"]';
  readonly personalInformationcountryInput: Locator;
    private personalInformationcityInputSelector = 'input[data-testid="city"]';
  readonly personalInformationcityInput: Locator;
  private personalInformationstateInputSelector = 'input[data-testid="state"]';
  readonly personalInformationstateInput: Locator;
  private personalInformationzipcodeInputSelector = 'input[data-testid="postal_code"]';
  readonly personalInformationzipcodeInput: Locator;
  private personalInformationphoneInputSelector = 'input[data-testid="phone-input"]';
  readonly personalInformationphoneInput: Locator;
  private personalInformationtimezoneInputSelector = 'input#timezone';
  readonly personalInformationtimezoneInput: Locator;
   private personalInformationSaveButtonSelector = 'button:has-text("Save")';
  readonly personalInformationSaveButton: Locator;
  readonly countryOption: Locator;
  private countryOptionSelector = 'div[role="option"]';

  //private timeZoneOptionSelector = 'div[role="option"]';
  //readonly timeZoneOption: Locator;



  //selectors for advisor IDs section

  private advisorIdsEditButtonSelector = 'text=Advisor IDs >> .. >> button:has-text("Edit")';
  readonly advisorIdsEditButton: Locator;

  private hyattValueSelector = '.text-medium.font-medium.leading-normal';
  readonly hyattValue: Locator;

  private heraValueSelector = '.text-medium.font-medium.leading-normal';
  readonly heraValue: Locator;

  private leadingAdvisorValueSelector = '.text-medium.font-medium.leading-normal';
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

  private bookingPlatformEditButtonSelector = 'text=Booking platform settings >> .. >> button:has-text("Edit")';
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
    //Selectors for personal information section
    this.personalInformationEditButton = page.locator(this.personalInformationEditButtonSelector);
    this.personalInformationcountry = page.locator(this.personalInformationcountrySelector);
    this.personalInformationaddress = page.locator(this.personalInformationaddressSelector);
    this.personalInformationcity = page.locator(this.personalInformationcitySelector);
    this.personalInformationstate = page.locator(this.personalInformationstateSelector);
    this.personalInformationzipcode = page.locator(this.personalInformationzipcodeSelector);
    this.personalInformationphone = page.locator(this.personalInformationphoneSelector);
    this.personalInformationtimezone = page.locator(this.personalInformationtimezoneSelector);
    this.personalInformationaddressInput = page.locator(this.personalInformationaddressInputSelector);
    this.personalInformationcountryInput = page.locator(this.personalInformationcountryInputSelector);
    this.personalInformationcityInput = page.locator(this.personalInformationcityInputSelector);
    this.personalInformationstateInput = page.locator(this.personalInformationstateInputSelector);
    this.personalInformationzipcodeInput = page.locator(this.personalInformationzipcodeInputSelector);
    this.personalInformationphoneInput = page.locator(this.personalInformationphoneInputSelector);
    this.personalInformationtimezoneInput = page.locator(this.personalInformationtimezoneInputSelector)
    this.personalInformationSaveButton = page.locator(this.personalInformationSaveButtonSelector);
    this.countryOption = page.locator(this.countryOptionSelector);
   // this.timeZoneOption = page.locator(this.timeZoneOptionSelector);
   

    this.advisorIdsEditButton = page.locator(this.advisorIdsEditButtonSelector);
    this.hyattValue = page.locator(this.hyattValueSelector).nth(0);
    this.heraValue = page.locator(this.heraValueSelector).nth(1);
    this.leadingAdvisorValue = page.locator(this.leadingAdvisorValueSelector).nth(2);
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

  async fillPersonalInformation(personalSettingsData: ClientSettingsData) {


    await this.personalInformationcountryInput.click(); // opens the dropdown
    await this.personalInformationcountryInput.fill(personalSettingsData.country); // optional, to filter
    await this.countryOption.filter({ hasText: personalSettingsData.country }).first();
    await this.countryOption.waitFor({ state: 'visible' });
    await this.countryOption.click();
    await this.personalInformationaddressInput.fill(personalSettingsData.Address);
    await this.personalInformationcityInput.fill(personalSettingsData.city);
    await this.personalInformationstateInput.fill(personalSettingsData.state);
    await this.personalInformationzipcodeInput.fill(personalSettingsData.zipcode);
    await this.personalInformationphoneInput.fill(personalSettingsData.phoneNumber);

    /*skip the time zone as there is issue that needs to be fixed
    await this.personalInformationtimezone.click();
    await this.personalInformationtimezoneInput.fill(personalSettingsData.timezone);

    await this.timeZoneOption.filter({ hasText: personalSettingsData.timezone}).first();
    await this.timeZoneOption.waitFor({ state: 'visible' });
    await this.timeZoneOption(); */
  }

  //Method to fill the advisor id details
  async fillAdvisorIDsForm(advisorSettingsData: ClientSettingsData) {
    await this.worldOfHyattInput.fill(advisorSettingsData.worldOfHyatt);
    await this.heraInput.fill(advisorSettingsData.hera);
    await this.leadingAdvisorInput.fill(advisorSettingsData.leadingAdvisor);

  }
  // Method to fill the default currency in booking platform settings
  async fillDefaultCurrency(currencySettingsData: ClientSettingsData) {
    const currency = currencySettingsData.defaultCurrency;
    if (!currency) throw new Error('Currency not provided');
    // Step 1: Open dropdown
    await this.currencyDropdown.click();

    // Step 2: Click the desired currency option
    await this.page.locator(this.currencyOptionSelector(currency)).click();

  }
}

