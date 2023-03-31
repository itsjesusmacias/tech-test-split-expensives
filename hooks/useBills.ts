import { useState } from "react";

import { BillsState, Bill, NewBill } from "@/models/index";
import { getIdFromBillList } from "@/utils/index";

import {useBillsStorage} from "@/hooks/index"

// Types
interface ReturnType {
  bills: BillsState["bills"];
  addBill: ({ author, date, description, price }: NewBill) => void;
  removeBill: ({ id }: { id: number }) => void;
  editBill: ({ modifiedBill }: { modifiedBill: Bill }) => void;
}

const useBills = (): ReturnType => {
  const { bills, setBills } = useBillsStorage();
  // TODO gestion del price number y quitar en creation y ediion

  const addBill: ReturnType["addBill"] = (newBill) => {
    const id = getIdFromBillList(bills);
    const bill = {
      ...newBill,
      id,
    };

    const updatedBills = [...bills, bill];
    setBills(updatedBills);
  };

  const removeBill: ReturnType["removeBill"] = ({ id }) => {
    const updatedBills = bills.filter((bill) => bill.id !== id);
    setBills(updatedBills);
  };

  const editBill: ReturnType["editBill"] = (modifiedBill) => {
    const updatedBills = bills.map((bill) =>
      bill.id === modifiedBill.id ? {...modifiedBill, date: bill.date} : bill
    );
    setBills(updatedBills);
  };

  return { bills, addBill, removeBill, editBill };
};

export { useBills };
