export interface Loan {
  id: number;
  amount: number;
  interestRate?: number;
  repayMonths: number;
  status: string;
}

export enum LoanStatus {
  PendingApproval = "Pending Approval",
  Approved = "Approved",
  Active = "Active",
  Completed = "Completed",
}
