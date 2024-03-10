// Explicitly set the locale to 'en-NG' for Nigerian English
// This should be consistent on both the server and client
const CURRENCY_FORMATTER = new Intl.NumberFormat('en-NG', {
    currency: "NGN",
    style: "currency",
    currencyDisplay: "code" // This will display the currency code 'NGN' instead of the symbol
});

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
}