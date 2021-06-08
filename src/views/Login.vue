<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page padding class="bg-secondary">
        <!-- content -->
        <div class="row">
          <div
            class="
              col-xs-12 col-md-4
              offset-md-4
              shadow-top-5 shadow-transition
            "
          >
            <h1 class="text-h4 text-white text-bold q-mb-md">
              Login to Credit Now
            </h1>
            <p class="text-white">
              Your journey to credit freedom starts here!
            </p>
            <q-card>
              <form class="q-pa-xl" @submit.prevent="onSubmit">
                <q-btn-toggle
                  v-model="userType"
                  spread
                  class="my-custom-toggle q-mb-md"
                  no-caps
                  rounded
                  unelevated
                  toggle-color="primary"
                  color="white"
                  text-color="secondary"
                  :options="[
                    { label: 'Customer', value: UserTypes.Customer },
                    { label: 'Admin', value: UserTypes.Admin },
                  ]"
                />
                <q-input
                  v-model="email"
                  type="email"
                  label="Email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  required
                />
                <q-input
                  v-model="password"
                  type="password"
                  label="Password"
                  name="password"
                  id="password"
                  autocomplete="current-password"
                  required
                />
                <div class="row justify-center">
                  <q-btn
                    class="q-mt-lg q-px-xl q-py-sm q-mx-auto"
                    color="primary"
                    dense
                    rounded
                    type="submit"
                    :loading="loading"
                    >Login</q-btn
                  >
                </div>
              </form>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import axios from "axios";
import { ref, defineComponent } from "vue";
import router from "@/router";
import { useQuasar } from "quasar";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { UserTypes } from "@/static/UserTypes";
export default defineComponent({
  setup() {
    const email = ref("eve.holt@reqres.in");
    const password = ref("cityslicka");
    const userType = ref(UserTypes.Customer);
    const loading = ref(false);
    const $q = useQuasar();
    const { setValue: setToken } = useLocalStorage("token");
    const { setValue: setUserType } = useLocalStorage("userType");
    const onSubmit = async () => {
      loading.value = true;
      try {
        const { data } = await axios.post<{ token: string }>(
          "https://reqres.in/api/login",
          { email: email.value, password: password.value }
        );
        loading.value = false;
        if (data.token) {
          setToken(data.token);
          setUserType(userType.value);
          router.push("/");
        }
      } catch (error) {
        $q.notify({
          message: `Login Unsuccessful`,
          color: "primary",
        });
        loading.value = false;
      }
    };
    return { email, password, userType, loading, onSubmit, UserTypes };
  },
});
</script>
