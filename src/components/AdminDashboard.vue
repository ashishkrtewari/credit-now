<template>
  <main class="row">
    <aside class="bg-primary col-2">
      <q-item class="full-width q-mt-lg justify-center">
        <q-item-section>
          <q-select
            class="bg-white text-white"
            v-model="filterList"
            :options="filterOptions"
            label="Filter Loans"
            filled
          />
        </q-item-section>
      </q-item>
    </aside>
    <section class="row col-9" v-if="loanData?.length">
      <div class="col-10 offset-1">
        <h2 class="text-h4">{{ filterList }} Loans</h2>
        <list-loan
          :loanData="pendingApprovalLoans"
          v-if="filterList === LoanStatus.PendingApproval"
        />
        <list-loan
          :loanData="approvedLoans"
          v-else-if="filterList === LoanStatus.Approved"
        />
        <list-loan
          :loanData="activeLoans"
          v-else-if="filterList === LoanStatus.Active"
        />
        <list-loan
          :loanData="completedLoans"
          v-else-if="filterList === LoanStatus.Completed"
        />
        <p v-else class="text-left">No loans Found</p>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import ListLoan from "./ListLoan.vue";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Loan, LoanStatus } from "@/models/Loan";
import { ref } from "@vue/reactivity";
export default {
  components: { ListLoan },
  setup() {
    const { storedValue: loanData } = useLocalStorage<Loan[]>("loanData", []);
    const filterList = ref(LoanStatus.PendingApproval);
    const pendingApprovalLoans: Loan[] = [];
    const approvedLoans: Loan[] = [];
    const activeLoans: Loan[] = [];
    const completedloans: Loan[] = [];

    const filterOptions = [
      LoanStatus.Approved,
      LoanStatus.Approved,
      LoanStatus.Active,
      LoanStatus.Completed,
    ];

    loanData.value.forEach((loan) => {
      switch (loan.status) {
        case LoanStatus.PendingApproval:
          pendingApprovalLoans.push(loan);
          break;
        case LoanStatus.Active:
          activeLoans.push(loan);
          break;
        case LoanStatus.Approved:
          approvedLoans.push(loan);
          break;
        case LoanStatus.Completed:
          completedloans.push(loan);
          break;

        default:
          break;
      }
    });

    return {
      loanData,
      LoanStatus,
      pendingApprovalLoans,
      approvedLoans,
      activeLoans,
      completedloans,
      filterOptions,
      filterList,
    };
  },
};
</script>

<style lang="scss">
main aside {
  height: calc(100vh - 50px) !important;
}
</style>
