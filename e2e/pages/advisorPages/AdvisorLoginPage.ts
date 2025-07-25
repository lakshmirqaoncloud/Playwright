import { Locator, Page } from '@playwright/test';
import { AdvisorBasePage } from './AdvisorBasePage';

export class AdvisorLoginPage extends AdvisorBasePage {
    // Selectors for Google SSO login
    private advisorLoginSelector = 'button:has-text("Sign in with your Fora email")';
    readonly advisorLogin: Locator;

    private googleEmailSelector = '#identifierId';
    readonly googleEmail: Locator;

    private googleNextSelector = '#identifierNext';
    readonly googleNext: Locator;

    private googlePasswordSelector = 'input[type="password"]';
    readonly googlePassword: Locator;

    private passwordNextSelector = '#passwordNext';
    readonly passwordNext: Locator;

    // Manual login selectors
    private notAdvisorSignInSelector = 'Sign in here.';
    readonly notAdvisorSignIn: Locator;

    private nonAdvisorUsernameSelector = '#username';
    readonly nonAdvisorUsername: Locator;

    private nonAdvisorPasswordSelector = 'password';
    readonly nonAdvisorPassword: Locator;

    private nonAdvisorSignInButtonSelector = 'button[type="submit"]';
    readonly nonAdvisorSignInButton: Locator;

    // Manual invalid login error message
    private loginErrorSelector = 'p.text-error';
    readonly loginError: Locator;


    constructor(page: Page) {
        super(page);
        this.advisorLogin = this.page.locator(this.advisorLoginSelector);
        this.googleEmail = this.page.locator(this.googleEmailSelector);
        this.googlePassword = this.page.locator(this.googlePasswordSelector);
        this.googleNext = this.page.locator(this.googleNextSelector);
        this.passwordNext = this.page.locator(this.passwordNextSelector);
        this.notAdvisorSignIn = this.page.getByText(this.notAdvisorSignInSelector);
        this.nonAdvisorUsername = this.page.locator(this.nonAdvisorUsernameSelector);
        this.nonAdvisorPassword = this.page.getByTestId(this.nonAdvisorPasswordSelector);
        this.nonAdvisorSignInButton = this.page.locator(this.nonAdvisorSignInButtonSelector);
        this.loginError = this.page.locator(this.loginErrorSelector);
    }

    /**
     * Navigate to the login page
     */
    async navigateToLogin() {
        await this.goto('/login');
        await this.waitForPageLoad();
    }

    /**
     * Login with username and password via Google SSO
     * @param username The username to login with
     * @param password The password to login with
     */
    async foraEmailLogin(username: string, password: string) {
        await this.advisorLogin.click();
        await this.googleEmail.fill(username);
        await this.googleNext.click();
        await this.googlePassword.fill(password);
        await this.passwordNext.click();
    }

    /**
     * Manual login with username and password
     * @param username The username to login with
     * @param password The password to login with
     */
    async manualLogin(username: string, password: string) {
        await this.notAdvisorSignIn.click();
        await this.nonAdvisorUsername.fill(username);
        await this.nonAdvisorPassword.fill(password);
        await this.nonAdvisorSignInButton.click();
    }
} 