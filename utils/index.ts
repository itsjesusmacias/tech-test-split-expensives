import { Bill } from "../models";

export const getIdFromBillList = (bills: Bill[]): number => {
    if (bills.length === 0) return 1;

    const listOfIds = bills.map(({ id }) => id);
    const id = Math.max(...listOfIds) + 1;
    
    return id;
}

export const thereSomeEmptyString = (...args: Array<String>): boolean => args.some(el => el.trim() === "");

