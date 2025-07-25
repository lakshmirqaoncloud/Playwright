import { format, addDays, parseISO } from 'date-fns';
import TestConfig from './TestConfig';

export default class Utilities {
    
    // Generate random number between min and max (inclusive) - helper for calendarDateRange
    private static getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Simple add days and return formatted date string - helper for calendarDateRange
    private static addDaysFormatted(date: Date | string, days: number): string {
        const baseDate = typeof date === 'string' ? parseISO(date) : date;
        const newDate = addDays(baseDate, days);
        return format(newDate, 'yyyy-MM-dd');
    }

    // Format date for aria-label matching - helper for calendarDateRange
    private static formatDateForAriaLabel(date: Date | string): string {
        const baseDate = typeof date === 'string' ? parseISO(date) : date;
        return format(baseDate, 'MMMM do, yyyy'); // "July 31st, 2025"
    }

    // Get current date - helper for calendarDateRange
    private static getCurrentDate() {
        return format(new Date(), 'yyyy-MM-dd');
    }

    // Enhanced calendar date range using TestConfig settings
    static calendarDateRange(
        minDaysFromNow?: number, 
        maxDaysFromNow?: number, 
        minDaysBetween?: number, 
        maxDaysBetween?: number
    ) {
        const testSettings = TestConfig.getTestSettings();
        
        // Use TestConfig defaults if not provided
        const daysFromNowMin = minDaysFromNow ?? testSettings.defaultBookingDaysOut;
        const daysFromNowMax = maxDaysFromNow ?? testSettings.defaultBookingDaysOut + 3;
        const daysBetweenMin = minDaysBetween ?? testSettings.defaultBookingLength;
        const daysBetweenMax = maxDaysBetween ?? testSettings.defaultBookingLength + 7;
        
        // Random days from now for first date
        const daysFromNow = this.getRandomNumber(daysFromNowMin, daysFromNowMax);
        const firstDate = this.addDaysFormatted(this.getCurrentDate(), daysFromNow);
        
        // Random days from first date for second date
        const daysBetween = this.getRandomNumber(daysBetweenMin, daysBetweenMax);
        const secondDate = this.addDaysFormatted(firstDate, daysBetween);
        
        return {
            firstDate,
            secondDate,
            daysBetween,
            // Formatted versions for aria-label matching
            firstDateFormatted: this.formatDateForAriaLabel(firstDate),
            secondDateFormatted: this.formatDateForAriaLabel(secondDate),
            // Additional helper formats
            firstDateISO: firstDate,
            secondDateISO: secondDate
        };
    }
}
