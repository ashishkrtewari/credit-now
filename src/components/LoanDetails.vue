<template>
  <q-card class="my-card full-width text-center">
    <q-card-section class="column full-height justify-between">
      <h3 class="q-mb-md text-weight-bold text-secondary">Total Amount</h3>
      <p class="text-h4">{{ formatNumber(loan.amount) }}</p>
      <div class="row justify-center q-mt-md">
        <div class="col-3">
          <p class="text-weight-medium text-secondary">Loan Term</p>
          <q-chip
            size="md"
            text-color="white"
            color="primary"
            :label="loan.term + ' Months'"
            class="q-px-lg"
            icon-remove
          />
        </div>
        <div class="col-3">
          <p class="text-weight-medium text-secondary">Monthly EMI</p>
          <q-chip
            size="md"
            text-color="white"
            color="primary"
            :label="formatNumber(loan.emi)"
            class="q-px-lg"
          />
        </div>
        <div class="col-3">
          <p class="text-weight-medium text-secondary">Interest Rate</p>
          <q-chip
            size="md"
            text-color="white"
            color="primary"
            :label="loan.interestRate"
            class="q-px-lg"
          />
        </div>
      </div>

      <q-separator />

      <q-card-actions align="right">
        <slot></slot>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { formatNumber } from "@/static/utils";
import { Loan } from "@/models/Loan";
import { PropType } from "vue";
export default {
  props: {
    loan: {
      type: Object as PropType<Loan>,
    },
    primaryText: String,
    secondaryText: String,
    primaryCallback: Function,
    secondaryCallback: Function,
  },
  setup() {
    return { formatNumber };
  },
};
</script>

<style lang="scss" scoped></style>
