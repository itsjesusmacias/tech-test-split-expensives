// Hooks
import { useState } from "react";
import { useUsersStorage  } from "@/hooks/index";

// Utils
import { thereSomeEmptyString } from "@/utils/index";

// Models
import { Session } from "@/models/index";

interface ReturnType {
  signup: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  registerError: boolean;
}

const useSignUp = ({ username, password }: Session): ReturnType => {
  const [registerError, setRegisterError] = useState(false);
  const { users, setUsers } = useUsersStorage();

  const signup = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();

    const newUser = { username, password };
    const userAlreadyExists = users.some((user) => user.username === username);

    console.log({users, username, userAlreadyExists})

    if (userAlreadyExists || thereSomeEmptyString(username, password)) 
      setRegisterError(true)
    else 
      setUsers([...users, newUser]);
  };

  return { signup, registerError };
};

export { useSignUp };
