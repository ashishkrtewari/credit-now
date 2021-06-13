<template>
  <div class="bg-primary row column justify-center items-center q-py-lg">
    <h1 class="text-h3 q-ma-none q-mb-sm text-white">
      {{ formattedAvailableCredit }}
    </h1>
    <p class="text-h6 q-ma-none text-white">Available Credit</p>
  </div>
  <q-scroll-area style="width: 100%; height: calc(100vh - 188px)">
    <div class="row">
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        class="
          q-mx-lg q-mt-lg
          full-height
          col-xs-10
          offset-xs-1
          col-md-6
          offset-md-3
        "
        animated
      >
        <q-step
          :name="1"
          icon="attach_money"
          title="How much do you need?"
          :done="step > 1"
        >
          <div class="q-mt-xl">
            <q-slider
              name="amount"
              color="secondary"
              v-model="amount"
              label-always
              :min="1000"
              :max="availableCredit"
              :step="1000"
              :label-value="formattedAmount"
            />
          </div>
          <p>Move the slider to set the amount you need.</p>
          <q-stepper-navigation>
            <q-btn
              @click="step = 2"
              color="primary"
              label="Proceed to EMI Selection"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Pick your repayment plan"
          icon="event_note"
          :done="step > 2"
        >
          <p>Choose one of the recommended plans</p>

          <q-scroll-area style="height: 200px; width: 100%">
            <div class="row no-wrap" v-if="emiPlans">
              <q-card
                :key="plan"
                v-for="plan of emiPlans"
                class="my-card q-ma-md bg-secondary"
              >
                <q-item tag="label" v-ripple>
                  <q-item-section avatar top>
                    <q-radio dark v-model="term" :val="plan" />
                    <q-item-label caption
                      ><p
                        class="
                          text-weight-bold text-subtitle1
                          q-ml-sm q-mb-xs
                          text-white
                        "
                      >
                        <span class="text-h6">{{
                          formatNumber(getEMIAmount(amount, plan))
                        }}</span
                        ><span class="text-grey-4"> /month</span>
                      </p>
                      <p
                        class="
                          text-weight-bold text-subtitle1
                          q-ml-sm
                          text-white
                        "
                      >
                        <span> for {{ plan }} months</span>
                      </p></q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-card>
            </div>
          </q-scroll-area>

          <q-stepper-navigation>
            <q-btn @click="step = 3" color="primary" label="Continue" />
            <q-btn
              flat
              @click="step = 1"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="3" title="Review" icon="attach_money">
          <q-card class="bg-secondary text-center">
            <div
              class="
                row
                justify-between
                items-center
                q-px-md q-pt-sm
                text-white
              "
            >
              <p class="text-h6">EMI</p>
              <p>
                <span class="text-h6"> {{ formattedEMI }}</span
                ><span class="text-grey-4"> /month</span><br />for
                {{ term }} months
              </p>
            </div>
          </q-card>
          <q-card class="bg-primary text-center">
            <div class="row justify-center q-px-md q-pt-sm text-white">
              <p class="text-h6 q-mb-xs">
                {{ formattedAmount }}
                <span class="text-overline block">Total Loan Amount</span>
              </p>
            </div>
          </q-card>
          <q-card class="bg-primary text-center">
            <div class="row justify-center q-px-md q-pt-sm text-white">
              <p class="text-h6 q-mb-xs">
                {{ formattedTotalInterest }}
                <span class="text-overline block">Total Interest</span>
              </p>
            </div>
          </q-card>
          <q-card class="bg-primary text-center">
            <div class="row justify-center q-px-md q-pt-sm text-white">
              <p class="text-h6 q-mb-xs">
                {{ formattedTotalEMIAmount }}
                <span class="text-overline block">Total of all EMIs</span>
              </p>
            </div>
          </q-card>

          <q-stepper-navigation>
            <q-btn color="primary" label="Finish" @click="finishLoan" />
            <q-btn
              flat
              @click="step = 2"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </q-scroll-area>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { useLoan } from "../hooks/useLoan";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { formatNumber, getAvailableCredit } from "../static/utils";
import { Loan, LoanStatus } from "../models/Loan";
import { useRouter } from "vue-router";
import { useUser } from "@/hooks/useUserInfo";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    const router = useRouter();
    const {
      amount,
      term,
      emiPlans,
      getEMIAmount,
      calculateTotalInterest,
      interestRate,
    } = useLoan({ amount: 1000 });
    const { userData } = useUser();

    const { storedValue: loanData, setValue: setLoanData } = useLocalStorage<
      Loan[]
    >("loanData", []);

    const availableCredit = getAvailableCredit(loanData.value);

    const formattedAvailableCredit = computed(() =>
      formatNumber(availableCredit)
    );
    const formattedAmount = computed(() => formatNumber(amount.value));
    const formattedEMI = computed(() =>
      formatNumber(getEMIAmount(amount.value, term.value))
    );
    const formattedTotalInterest = computed(() =>
      formatNumber(
        calculateTotalInterest({
          loanAmount: amount.value,
          term: term.value,
        })
      )
    );
    const formattedTotalEMIAmount = computed(() =>
      formatNumber(getEMIAmount(amount.value, term.value) * term.value)
    );

    const finishLoan = () => {
      const response = confirm("Are you sure to proceed with the loan?");
      if (response) {
        const loan: Loan = {
          id: Date.now(),
          amount: amount.value,
          term: term.value,
          status: LoanStatus.PendingApproval,
          user: userData.value,
          emi: getEMIAmount(amount.value, term.value),
          paidAmount: 0,
          interestRate,
        };
        setLoanData([...loanData.value, loan]).then((saved) => {
          if (saved) {
            router.push("/dashboard");
          }
        });
      }
    };
    return {
      amount,
      availableCredit,
      calculateTotalInterest,
      emiPlans,
      formattedAvailableCredit,
      formattedAmount,
      formattedEMI,
      formattedTotalInterest,
      formattedTotalEMIAmount,
      formatNumber,
      finishLoan,
      getEMIAmount,
      step: ref(1),
      term,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 250px;
}
</style>
