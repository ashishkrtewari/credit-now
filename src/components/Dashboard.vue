<template>
  <customer-dashboard v-if="userType === UserTypes.Customer" />
  <admin-dashboard v-if="userType === UserTypes.Admin" />
</template>

<script>
import { useLocalStorage } from "@/hooks/useLocalStorage";
import CustomerDashboard from "./CustomerDashboard.vue";
import AdminDashboard from "./AdminDashboard.vue";
import { UserTypes } from "@/static/UserTypes";
export default {
  components: { CustomerDashboard, AdminDashboard },
  setup() {
    const { storedValue: userType } = useLocalStorage("userType");

    return { userType, UserTypes };
  },
};
</script>

<style></style>
