import Big from "big.js";

export const formatNumber = (number: string | number) => {
  return `${number ?? ""}`
    .replace(".", ",")
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
};

export const formatMoneyWithCurrency = (
  amount: string | number,
  includeDecimals = true,
  currency = "€"
) => {
  const _amount = new Big(amount ?? 0);
  return `${formatNumber(_amount.toFixed(includeDecimals ? 2 : 0))}${currency}`;
};

export const formatMoney = (amount: string | number, includeDecimals = true) => {
  const _amount = new Big(amount ?? 0);
  return formatNumber(_amount.toFixed(includeDecimals ? 2 : 0));
};
