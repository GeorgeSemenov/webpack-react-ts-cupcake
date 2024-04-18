export type rowType = cellType[];

export type cellType = {
  isMinimalValue?: boolean;
  value: number | string;
};
