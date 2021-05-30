<template>
  <main>
    <div class="bg-primary row column justify-center items-center q-py-lg">
      <h1 class="text-h3 q-ma-none q-mb-sm text-white">SGD 120,000.00</h1>
      <p class="text-h6 q-ma-none text-white">Available Credit</p>
    </div>
    <section class="row">
      <q-card class="text-center q-pa-lg col-10 offset-1 q-mt-md">
        <h2 class="text-h4">What would you like to do today?</h2>
        <q-btn
          color="primary"
          class="q-mb-md q-py-md text-weight-bolder get-cash-btn"
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
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.get-cash-btn {
  width: 50%;
}
</style>
