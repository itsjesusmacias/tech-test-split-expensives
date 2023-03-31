// Hooks
import {
  useField,
  useRedirect,
  useSignUp,
  useSession,
} from "@/hooks/index";

// Models
interface ReturnTypes {
  handleLogin: (evt: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  handleLogout: () => void;
  signup: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  isSessionActive: boolean;
  isLoginDisabled: boolean;
  needRegister: boolean;
  password: string;
  handlePassword: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  username: string;
  handleUsername: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

// utils
import { thereSomeEmptyString } from "@/utils/index";

// Constants
import { ROUTE } from "@/constants/index";

const useLogin = (): ReturnTypes => {
  const [username, handleUsername] = useField({ type: "text" });
  const [password, handlePassword] = useField({ type: "password" });

  const { isSessionActive, login, logout: handleLogout, needRegister } = useSession();
  const { signup } = useSignUp({ username, password });

  const handleLogin = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    evt.preventDefault();
    login({ username, password });
  };

  useRedirect([
    { path: ROUTE.LOGIN, haveRedirect: !isSessionActive },
    { path: ROUTE.HOME, haveRedirect: isSessionActive },
  ]);

  const isLoginDisabled = thereSomeEmptyString(username, password);

  return {
    handleLogin,
    handleLogout,
    signup,
    isSessionActive,
    needRegister,
    isLoginDisabled,
    password,
    handlePassword,
    username,
    handleUsername,
  };
};

export { useLogin };
