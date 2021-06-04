import { Loan } from "@/models/Loan";

export const formatNumber = (money: number): string => {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
  }).format(money);
};

export const getAvailableCredit = (existingloanData: Loan[]): number => {
  let totalLoansAmount = 0;
  existingloanData.forEach((loan: Loan) => (totalLoansAmount += loan.amount));
  return 120000 - totalLoansAmount;
};
