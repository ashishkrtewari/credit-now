<template>
  <q-card class="my-card full-width text-center">
    <q-card-section class="column full-height justify-between q-pa-none">
      <div
        class="column items-center user-details bg-positive relative-position"
      >
        <q-avatar color="primary q-mb-xs">
          <img :src="loan.user?.avatar" round alt="avatar" />
        </q-avatar>
        <h2 class="q-ma-none text-h5 text-bolder">
          {{ loan.user?.first_name + " " + loan.user?.last_name }}
        </h2>
        <p class="q-mb-none text-white">
          {{ new Date(loan.id).toDateString() }}
        </p>

        <q-badge
          color="secondary"
          align="bottom"
          class="status"
          :label="loan.status"
        />
      </div>
      <h3 class="q-mb-md text-weight-bold text-secondary text-h4 text-normal">
        Total Amount
      </h3>
      <p class="text-h4">{{ formatNumber(loan.amount) }}</p>
      <div class="row wrap justify-center q-mt-md">
        <div class="col-xs-6 col-sm-3 q-mb-sm">
          <p class="text-weight-medium text-secondary q-mb-xs">Loan Term</p>
          <q-chip
            size="md"
            text-color="white"
            color="primary"
            :label="loan.term + ' Months'"
            class="q-px-lg"
            icon-remove
          />
        </div>
        <div class="col-xs-6 col-sm-3 m-b-sm">
          <p class="text-weight-medium text-secondary q-mb-xs">Monthly EMI</p>
          <q-chip
            size="md"
            text-color="white"
            color="primary"
            :label="formatNumber(loan.emi)"
            class="q-px-lg"
          />
        </div>
        <div class="col-xs-6 col-sm-3 m-b-sm">
          <p class="text-weight-medium text-secondary q-mb-xs">Interest Rate</p>
          <q-chip
            size="md"
            text-color="white"
            color="primary"
            :label="loan.interestRate + '%'"
            class="q-px-lg"
          />
        </div>
        <div class="col-xs-6 col-sm-3 m-b-sm">
          <p class="text-weight-medium text-secondary q-mb-xs">Repaid Amount</p>
          <q-chip
            size="md"
            text-color="white"
            color="primary"
            :label="formatNumber(loan.paidAmount)"
            class="q-px-lg"
          />
        </div>
      </div>

      <q-separator class="q-my-sm" />

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
  },
  setup() {
    return { formatNumber };
  },
};
</script>

<style lang="scss" scoped>
.user-details {
  border-radius: 0 0 50% 50%;
  padding: 1rem 0;
}
.status {
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
}
</style>
