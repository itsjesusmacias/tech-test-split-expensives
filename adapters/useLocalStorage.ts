// React
import { useState, useEffect } from "react";

// Models
interface ParameterTypes {
  key: string;
  initialValue?: any;
}

type ReturnTypes = [any, (value: any) => void];

const useLocalStorage = ({
  key,
  initialValue,
}: ParameterTypes): ReturnTypes => {
  const getStorage = () => {
    try {
      const item = window?.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("useLocalStorage" + error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState(getStorage);

  const setValue = (value: any) => {
    try {
      console.log("store",{value})
      setStoredValue(value);
      window?.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("useLocalStorage" + error);
    }
  };

  return [storedValue, setValue];
};

export { useLocalStorage };
