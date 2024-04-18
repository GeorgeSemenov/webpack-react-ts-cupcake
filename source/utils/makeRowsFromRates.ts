import { ratesType } from "../api/types";
import { rowType } from "../components/RatesTable/types";

export default function makeRowsFromRates(
  rates: (ratesType | undefined)[]
): rowType[] {
  const rows: rowType[] = [
    makeCurrenciesRow(rates, "RUB"),
    makeCurrenciesRow(rates, "USD"),
    makeCurrenciesRow(rates, "EUR"),
    makeCurrenciesRow(rates, "RUB", "USD"),
    makeCurrenciesRow(rates, "RUB", "EUR"),
    makeCurrenciesRow(rates, "EUR", "USD"),
  ];

  return rows;
}

function makeCurrenciesRow(
  rates: (ratesType | undefined)[],
  currencyName: keyof ratesType,
  secondCurrencyName?: keyof ratesType
): rowType {
  let minVal: number;
  const currencyRow: rowType = [
    {
      value: `${currencyName}/${
        secondCurrencyName ? secondCurrencyName : "CUPCAKE"
      }`,
    },
  ];
  rates.forEach((market) => {
    let value;
    if (market) {
      value = secondCurrencyName
        ? roundUpCurrency(market[currencyName] / market[secondCurrencyName])
        : roundUpCurrency(market[currencyName]);
      minVal = minVal ? (minVal > value ? value : minVal) : value;
    } else {
      value = "-";
    }
    currencyRow.push({ value });
  });
  currencyRow.find((cell) => cell.value === minVal).isMinimalValue = true;
  return currencyRow;
}

function roundUpCurrency(n: number): number {
  return Math.round(n * 100) / 100;
}
