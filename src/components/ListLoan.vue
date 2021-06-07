<template>
  <q-scroll-area style="height: 200px; width: 100%" v-if="loanData?.length">
    <div class="row no-wrap">
      <q-card
        :key="loan.id"
        v-for="loan of loanData"
        class="my-card q-ma-md bg-secondary"
        @click="
          () => {
            handleLoanClick(loan);
          }
        "
      >
        <q-item tag="label" v-ripple>
          <q-item-section avatar top>
            <q-item-label caption class="text-subtitle1 q-ml-sm text-white" dark
              ><p class="text-weight-bold q-mb-xs text-h6 text-white">
                {{ formatNumber(loan.amount) }}
              </p>
              <p class="text-subtitle1 q-mb-xs text-white">
                {{ loan.term }} months
              </p>
              <p
                class="text-subtitle1"
                :class="{
                  'text-grey': loan.status === LoanStatus.PendingApproval,
                  'text-primary': loan.status === LoanStatus.Approved,
                }"
              >
                {{ loan.status }}
              </p></q-item-label
            >
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </q-scroll-area>
</template>

<script lang="ts">
import { formatNumber } from "@/static/utils";
import { LoanStatus, Loan } from "@/models/Loan";
export default {
  name: "list-loan",
  props: {
    loanData: Object,
  },
  setup(props, context) {
    const handleLoanClick = (loan: Loan) => {
      context.emit("loanClick", loan);
    };
    return { formatNumber, LoanStatus, handleLoanClick };
  },
};
</script>

<style></style>
