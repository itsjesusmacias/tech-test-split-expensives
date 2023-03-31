// Hooks
import { useLogin } from "@/hooks/index";

// Components
import {
  PrimaryButton,
  SecondaryButton,
  TextField,
} from "@/components/shared/index";

const LoginForm: React.FC = () => {
  const {
    handleLogin,
    handlePassword,
    handleUsername,
    isLoginDisabled,
    needRegister,
    password,
    signup,
    username,
  } = useLogin();

  return (
    <form>
      <TextField
        label="Username:"
        name="username"
        onChange={handleUsername}
        type="text"
        value={username}
      />

      <TextField
        label="Password:"
        name="password"
        onChange={handlePassword}
        type="password"
        value={password}
      />

      {needRegister && <p>Necesita registro</p>}

      <SecondaryButton onClick={signup} isDisabled={isLoginDisabled}>
        Sign in
      </SecondaryButton>

      <PrimaryButton onClick={handleLogin} isDisabled={isLoginDisabled}>
        Log in
      </PrimaryButton>
    </form>
  );
};

export { LoginForm };
