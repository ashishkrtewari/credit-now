import { emiPlans } from "@/static/EMIPlans";
import { ref } from "@vue/reactivity";
import { Loan } from "@/models/Loan";
import { formatNumber } from "@/static/utils";

export const useLoan = ({ amount = 80000, repayMonths = 24 }) => {
  const calculateTotalInterest = ({
    interestRate = 2,
    loanAmount,
    noOfMonths,
  }) => (loanAmount * (interestRate * 0.01)) / noOfMonths;
  const getEMIAmount = (loanAmount: number, noOfMonths: number) => {
    const interest = calculateTotalInterest({ loanAmount, noOfMonths });
    return (loanAmount / noOfMonths + interest).toFixed(0);
  };
  return {
    amount: ref(amount),
    emiPlans,
    repayMonths: ref(repayMonths),
    getEMIAmount,
    calculateTotalInterest,
  };
};
