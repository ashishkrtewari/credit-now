import { Loan, LoanStatus } from "@/models/Loan";
import { emiPlans } from "@/static/EMIPlans";
import { Ref, ref } from "@vue/reactivity";
import { useLocalStorage } from "./useLocalStorage";

const loanData: Ref<Loan[]> = ref([]);

export const useLoan = ({ amount = 80000, interestRate = 10 }) => {
  const { storedValue, setValue } = useLocalStorage<Loan[]>("loanData");
  loanData.value = storedValue.value || [];

  const interestRatePerMonth = interestRate / 12 / 100;

  const calculateTotalInterest = ({ loanAmount, term }) => {
    return getEMIAmount(loanAmount, term) * term - loanAmount;
  };

  const getEMIAmount = (loanAmount: number, term: number): number => {
    const emiAmount =
      (loanAmount *
        interestRatePerMonth *
        Math.pow(1 + interestRatePerMonth, term)) /
      (Math.pow(1 + interestRatePerMonth, term) - 1);
    return parseInt(emiAmount.toFixed(0));
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
