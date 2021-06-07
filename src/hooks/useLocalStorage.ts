import { ref, Ref } from "@vue/reactivity";

export const useLocalStorage = <T>(
  key: string,
  defaultValue?: T
): { storedValue: Ref<T>; setValue } => {
  const getValue = () => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const setValue = async (value: T) => {
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
