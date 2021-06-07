import { Loan, LoanStatus } from "@/models/Loan";
import { emiPlans } from "@/static/EMIPlans";
import { Ref, ref } from "@vue/reactivity";
import { useLocalStorage } from "./useLocalStorage";

const loanData: Ref<Loan[]> = ref([]);

export const useLoan = ({ amount = 80000, interestRate = 2 }) => {
  const { storedValue, setValue } = useLocalStorage<Loan[]>("loanData");
  loanData.value = storedValue.value || [];

  const calculateTotalInterest = ({ loanAmount, term }) =>
    (loanAmount * (interestRate * 0.01)) / term;

  const getEMIAmount = (loanAmount: number, term: number): number => {
    const interest = calculateTotalInterest({ loanAmount, term });
    return parseInt((loanAmount / term + interest).toFixed(0));
  };

  const getLoan = (loanId: number) => {
    for (const loan of loanData.value) {
      if (loan.id === loanId) {
        return loan;
      }
    }
  };

  const updateLoan = async (loanId, updateFunction) => {
    try {
      loanData.value = loanData.value.map((loan) => {
        if (loan.id === loanId) {
          return updateFunction(loan);
        }
        return loan;
      });
      setValue(loanData.value);
      return true;
    } catch (error) {
      return false;
    }
  };

  const payLoanEMI = (loanId: number): Promise<boolean> => {
    return updateLoan(loanId, (loan: Loan) => {
      const totalAmount = loan.emi * loan.term;
      loan.paidAmount += loan.emi;
      if (loan.paidAmount >= totalAmount) {
        loan.status = LoanStatus.Completed;
      } else if (loan.paidAmount === loan.emi) {
        loan.status = LoanStatus.Active;
      }
      return loan;
    });
  };

  const updateStatus = async (
    loanId: number,
    status: string
  ): Promise<boolean> => {
    return updateLoan(loanId, (loan) => {
      loan.status = status;
      return loan;
    });
  };

  return {
    amount: ref(amount),
    emiPlans,
    term: ref(24),
    getEMIAmount,
    calculateTotalInterest,
    interestRate,
    loanData,
    updateStatus,
    getLoan,
    payLoanEMI,
  };
};
