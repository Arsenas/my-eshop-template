export const formatPrice = (value: number, currency = "EUR", locale = undefined) =>
  new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 2 }).format(value);
