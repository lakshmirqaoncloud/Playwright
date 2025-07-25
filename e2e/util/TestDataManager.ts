export interface PaymentInfo {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardHolder: string;
    address: string;
    addressAdditional: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export interface UserCredentials {
    email: string;
    password: string;
}

export interface BookingDetails {
    destination: string;
    clientName: string;
    guestCount: number;
}

export default class TestDataManager {
    
    static getCredentials(): UserCredentials {
        return {
            email: process.env.ADVISOR_EMAIL || '',
            password: process.env.ADVISOR_PASSWORD || ''
        };
    }

    static getTestPaymentInfo(cardHolder: string = 'Automation Test'): PaymentInfo {
        return {
            cardNumber: '4242424242424242',
            expiryDate: '12/45',
            cvv: '123',
            cardHolder: cardHolder,
            address: '225 Broadway',
            addressAdditional: 'FL 23',
            city: 'New York',
            state: 'New York',
            postalCode: '10007',
            country: 'United States of America'
        };
    }

    static getDefaultBookingDetails(): BookingDetails {
        return {
            destination: 'Bangkok',
            clientName: 'norr automation',
            guestCount: 2
        };
    }


} 