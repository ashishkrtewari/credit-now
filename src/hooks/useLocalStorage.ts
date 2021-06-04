import { ref, Ref } from "@vue/reactivity";

export const useLocalStorage = <T>(
  key: string,
  defaultValue?: T
): { storedValue: Ref<T>; setValue } => {
  const getValue = () => {
    const value = window.localStorage.getItem(key);
    const data = value ? JSON.parse(value) : null;
    return data;
  };

  const setValue = async (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      storedValue.value = value;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  if (defaultValue && !getValue()) {
    setValue(defaultValue);
  }
  const storedValue: Ref<T> = ref(getValue());

  return { storedValue, setValue };
};
