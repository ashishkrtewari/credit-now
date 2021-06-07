<template>
  <main class="row">
    <aside class="bg-primary col-2">
      <q-item class="full-width q-mt-lg justify-center">
        <q-item-section>
          <q-select
            class="bg-white text-white"
            v-model="selectedFilter"
            :options="filterOptions"
            label="Filter Loans"
            filled
          />
        </q-item-section>
      </q-item>
    </aside>
    <section class="row col-9">
      <div class="col-10 offset-1">
        <h2 class="text-h4">{{ selectedFilter }} Loans</h2>
        <list-loan
          :loanData="filteredList"
          v-if="filteredList.length"
          @loanClick="(loan) => handleLoanClick(loan)"
        />
        <p v-else class="text-left">No loans Found</p>
      </div>
    </section>
    <q-dialog
      v-model="showLoan"
      ref="dialogRef"
      @hide="
        () => {
          selectedLoan = null;
          showLoan = false;
        }
      "
    >
      <loan-details :loan="selectedLoan">
        <q-btn
          v-if="selectedLoan.status === LoanStatus.PendingApproval"
          v-close-popup
          color="positive"
          label="Approve Loan"
          @click="() => updateStatusAndFilterLoanList(LoanStatus.Approved)"
        />
        <q-btn
          v-close-popup
          color="negative"
          label="Reject Loan"
          @click="() => updateStatusAndFilterLoanList(LoanStatus.Rejected)"
        />
        <q-btn v-close-popup color="warning" label="Close" />
      </loan-details>
    </q-dialog>
  </main>
</template>

<script lang="ts">
import ListLoan from "./ListLoan.vue";
import LoanDetails from "./LoanDetails.vue";
import { Loan, LoanStatus } from "@/models/Loan";
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "vue";
import { useLoan } from "@/hooks/useLoan";
import { Notify, QDialog } from "quasar";
export default {
  components: { ListLoan, LoanDetails },
  setup() {
    const { loanData, updateStatus } = useLoan({});
    const selectedFilter = ref(LoanStatus.PendingApproval);
    const selectedLoan = ref<Loan>();
    const filteredList = ref([...loanData.value]);
    const showLoan = ref(false);
    const dialogRef = ref<QDialog>();
    const handleLoanClick = (loan) => {
      selectedLoan.value = loan;
      showLoan.value = true;
    };

    const filterOptions = [
      LoanStatus.PendingApproval,
      LoanStatus.Approved,
      LoanStatus.Active,
      LoanStatus.Rejected,
      LoanStatus.Completed,
    ];
    const updateFilteredList = (status = selectedFilter.value) => {
      filteredList.value = loanData.value.filter(
        (loan) => loan.status === status
      );
    };
    onMounted(() => updateFilteredList());

    const updateStatusAndFilterLoanList = (status: string) => {
      updateStatus(selectedLoan?.value?.id as number, status).then(
        (response) => {
          if (response) {
            updateFilteredList();
            dialogRef?.value?.hide();
            Notify.create({
              message: "Loan Approved!",
              icon: "check_circle",
            });
          }
        }
      );
    };
    watch(selectedFilter, (selectedStatus) =>
      updateFilteredList(selectedStatus)
    );

    return {
      loanData,
      LoanStatus,
      filteredList,
      filterOptions,
      selectedFilter,
      selectedLoan,
      showLoan,
      dialogRef,
      handleLoanClick,
      updateStatus,
      updateStatusAndFilterLoanList,
    };
  },
};
</script>

<style lang="scss">
main aside {
  height: calc(100vh - 50px) !important;
}
</style>
