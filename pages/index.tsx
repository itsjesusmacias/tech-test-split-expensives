import type { NextPage } from "next";

// Components
import { LoginForm } from "@/components/LoginForm";

// Style
import styles from "../styles/Home.module.css";

const Login: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span>Login</span> 🔑
      </h1>

      <LoginForm />
    </main>
  );
};

export default Login;
