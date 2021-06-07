<template>
  <main>
    <div class="bg-primary row column justify-center items-center q-py-lg">
      <h1 class="text-h3 q-ma-none q-mb-sm text-white">
        {{ formatNumber(availableCredit) }}
      </h1>
      <p class="text-h6 q-ma-none text-white">Available Credit</p>
    </div>
    <section class="row" v-if="availableCredit">
      <q-card class="text-center q-pa-lg col-10 offset-1 q-mt-md">
        <h2 class="text-h4">What would you like to do today?</h2>
        <q-btn
          color="primary"
          class="q-mb-md q-py-md text-weight-bolder get-cash-btn"
          @click="getCredit"
          push
        >
          Get Cash
        </q-btn>
        <p class="text-weight-medium q-mb-none">
          Withdraw funds from your available credit
        </p>
        <p>Disbured to your bank account in 24 hours</p>
      </q-card>
      <q-separator spaced inset horizontal dark />
    </section>
    <section class="row" v-if="loanData?.length">
      <div class="col-10 offset-1">
        <h2 class="text-h4">Existing Loans</h2>
        <list-loan
          :loanData="loanData"
          @loanClick="(loan) => handleLoanClick(loan)"
        />
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
          v-if="
            selectedLoan.status === LoanStatus.Approved ||
            selectedLoan.status === LoanStatus.Active
          "
          color="secondary"
          label="Pay EMI"
          @click="payLoan"
        />
        <q-btn v-close-popup color="warning" label="Cancel" />
      </loan-details>
    </q-dialog>
  </main>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { LoanStatus } from "@/models/Loan";
import { formatNumber, getAvailableCredit } from "@/static/utils";
import ListLoan from "./ListLoan.vue";

import LoanDetails from "./LoanDetails.vue";
import { ref } from "@vue/reactivity";
import { Notify, QDialog } from "quasar";
import { useLoan } from "@/hooks/useLoan";
export default {
  components: {
    ListLoan,
    LoanDetails,
  },
  setup() {
    const router = useRouter();
    const getCredit = () => {
      router.push("./get-credit");
    };
    const { payLoanEMI, loanData } = useLoan({});
    const selectedLoan = ref();
    const availableCredit = getAvailableCredit(loanData.value);
    const showLoan = ref(false);
    const dialogRef = ref<QDialog>();
    const handleLoanClick = (loan) => {
      selectedLoan.value = loan;
      showLoan.value = true;
    };
    const payLoan = () =>
      payLoanEMI(selectedLoan.value.id).then(() => {
        dialogRef.value?.hide();
        Notify.create({ message: "EMI Paid Successfully!", color: "primary" });
      });
    return {
      loanData,
      availableCredit,
      LoanStatus,
      dialogRef,
      handleLoanClick,
      selectedLoan,
      getCredit,
      formatNumber,
      showLoan,
      payLoan,
    };
  },
};
</script>

<style lang="scss" scoped>
.get-cash-btn {
  width: 50%;
}
</style>
