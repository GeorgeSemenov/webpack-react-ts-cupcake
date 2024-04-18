export type fetchResultType = {
  isLoading: boolean;
  error?: any;
  result?: ({ rates: ratesType } | undefined)[];
};

export type ratesType = {
  RUB: number;
  USD: number;
  EUR: number;
};
