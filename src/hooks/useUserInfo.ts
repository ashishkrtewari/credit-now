import { Ref, ref } from "@vue/reactivity";
import axios from "axios";

export interface Data {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

export interface Support {
  url?: string;
  text?: string;
}

export interface User {
  data?: Data;
  support?: Support;
}

export const useUser = (): { userData: Ref<User>; getUserData: any } => {
  const userData = ref<User>({});

  const getUserData = async (userID) => {
    const { data } = await axios.get<User>(
      `https://reqres.in/api/users/${userID}`
    );

    userData.value = data;
  };

  return { userData, getUserData };
};
