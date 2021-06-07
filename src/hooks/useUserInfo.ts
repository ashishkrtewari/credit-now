import { User, UserResponse } from "@/models/User";
import { ref } from "@vue/reactivity";
import axios from "axios";
const userData = ref<User>();
export const useUser = () => {
  const getUserData = async (userID) => {
    const { data } = await axios.get<UserResponse>(
      `https://reqres.in/api/users/${userID}`
    );

    userData.value = data.data;
  };

  return { userData, getUserData };
};
