export interface Bill {
  id: number;
  author: string;
  date: string;
  description: string;
  price: number;
}

export type NewBill = Omit<Bill, "id">;

export interface BillsState {
  bills: Bill[];
}
