export interface EnvironmentConfig {
    baseUrl: string;
    timeout: number;
    retries: number;
    headless: boolean;
    slowMo?: number;
}

export interface TestSettings {
    defaultBookingDaysOut: number;
    defaultBookingLength: number;
    defaultTimeout: number;
    screenshotOnFailure: boolean;
    videoOnFailure: boolean;
}

export default class TestConfig {
    
    static getEnvironmentConfig(env: string = 'staging'): EnvironmentConfig {
        const configs: Record<string, EnvironmentConfig> = {
            local: {
                baseUrl: 'http://localhost:3000',
                timeout: 30000,
                retries: 0,
                headless: false
            },
            staging: {
                baseUrl: process.env.STAGING_URL || 'https://advisor.forastaging.net',
                timeout: 30000,
                retries: 2,
                headless: process.env.CI === 'true',
            //    slowMo: 100

            },
            production: {
                baseUrl: process.env.PROD_URL || 'https://advisor.fora.travel',
                timeout: 45000,
                retries: 3,
                headless: true
            }
        };

        return configs[env] || configs.staging;
    }

    static getTestSettings(): TestSettings {
        return {
            defaultBookingDaysOut: 7, // Book 7 days from now
            defaultBookingLength: 3,  // 3 day trips
            defaultTimeout: 30000,
            screenshotOnFailure: true,
            videoOnFailure: process.env.CI === 'true'
        };
    }
} 