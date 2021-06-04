<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
    <div class="q-mt-xl">
      <q-slider
        name="speed"
        v-model="speed"
        label-always
        :min="1000"
        :max="120000"
        :step="10"
      />
    </div>

    <div>
      <q-btn label="Submit" type="submit" color="primary" />
    </div>
  </q-form>
</template>

<script lang="ts">
import { reactive } from "@vue/reactivity";
export default {
  name: "amount-form",
  props: {
    maxAmount: Number,
  },
  setup(props, context) {
    const { amount } = reactive({ amount: 80000 });
    const onSubmit = () => {
      context.emit("amountSelected", amount);
    };
    return { amount, onSubmit };
  },
};
</script>

<style lang="scss"></style>
