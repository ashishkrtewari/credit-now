import { User } from "@/models/User";

export interface Loan {
  id: number;
  amount: number;
  emi: number;
  user?: User;
  term: number;
  status: string;
  interestRate?: number;
}

export enum LoanStatus {
  PendingApproval = "Pending Approval",
  Approved = "Approved",
  Rejected = "Rejected",
  Active = "Active",
  Completed = "Completed",
}
