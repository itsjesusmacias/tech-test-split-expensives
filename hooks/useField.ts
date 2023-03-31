// Hooks
import { useState } from "react";

// Model
interface ParameterTypes {
    type: string;
    initialValue?: string;
}

type ReturnTypes = [string, (evt: React.ChangeEvent<HTMLInputElement>) => void, string]

const useField = ({ type, initialValue = "" }: ParameterTypes): ReturnTypes => {
  const [value, setValue] = useState(initialValue);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  return [value, onChange, type];
};

export {useField};