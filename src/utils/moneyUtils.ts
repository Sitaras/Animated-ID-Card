import Big from "big.js";

export const formatNumber = (number: string | number) => {
  return `${number ?? ""}`
    .replace(".", ",")
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

export const formatMoneyWithCurrency = (
  amount: string | number = 0,
  includeDecimals: boolean = true,
  currency: "€" | "$" = "$"
): string => {
  const _amount = new Big(amount);
  const formattedAmount = _amount.toFixed(includeDecimals ? 2 : 0);
  const numberWithSeparators = formatNumber(formattedAmount);

  return currency === "€"
    ? `${numberWithSeparators}€`
    : `$${numberWithSeparators}`;
};

export const formatMoney = (
  amount: string | number,
  includeDecimals = true
) => {
  const _amount = new Big(amount ?? 0);
  return formatNumber(_amount.toFixed(includeDecimals ? 2 : 0));
};
