export type Order = {
  username: string;
  fromText: string;
  toText: string;
  timestamp: string;
};

export type OrdersState = {
  orders: Array<Order>;
  error: string;
};
