export type Order = {
  username: string;
  fromText: string;
  toText: string;
  timestamp: string;
};

export type OrdersStoreType = {
  data: any;
  total: any;
  numberOfViewItems: any;
  isLoading: boolean;
  error?: string;
};
