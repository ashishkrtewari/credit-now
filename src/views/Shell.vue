<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <q-toolbar-title class="text-bold" router-link="/dashboard">
          <router-link to="/dashboard" class="text-white text-decoration-none"
            >Credit Now</router-link
          >
        </q-toolbar-title>
        <user-info :user="userData"></user-info>
        <q-btn
          rounded
          align="between"
          color="primary"
          icon-right="logout"
          @click="onLogout"
          class="logout-btn"
          ><span class="hidden-below-md">Logout</span>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import UserInfo from "../components/UserInfo.vue";
import { defineComponent, onBeforeMount } from "vue";
import { useUser } from "../hooks/useUserInfo";
import router from "@/router";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { UserTypes } from "@/static/UserTypes";

export default defineComponent({
  components: {
    UserInfo,
  },
  setup() {
    const { userData, getUserData } = useUser();
    const { storedValue } = useLocalStorage("userType");
    onBeforeMount(() => {
      if (storedValue.value === UserTypes.Customer) {
        getUserData(2);
      } else {
        getUserData(3);
      }
    });
    const onLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("userType");

      router.push("/login");
    };
    return { userData, onLogout };
  },
});
</script>

<style lang="scss" scoped>
.logout-btn {
  width: 7.5rem;
}
.text-decoration-none {
  text-decoration: none;
}
@media screen and (max-width: 599px) {
  .hidden-below-md {
    display: none;
  }
  .logout-btn {
    width: auto;
  }
}
</style>
