const ITEMS_ON_ONE_PAGE = 20;

export const requestPageFormatter = (
  indexOfElementToRequest: number,
): number => {
  return indexOfElementToRequest / ITEMS_ON_ONE_PAGE + 1;
};
