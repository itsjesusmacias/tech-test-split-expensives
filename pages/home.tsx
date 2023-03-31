import type { NextPage } from "next";

// Sytles
import styles from "../styles/Home.module.css";

// Hooks
import { useRedirect, useSession } from "@/hooks/index";

// Components
import { ExpensiveGroup } from "../components/ExpensiveGroup";
import { PrimaryButton } from "@/components/shared";

// Constants
import { ROUTE } from "@/constants/index";

const Home: NextPage = () => {
  const { isSessionActive, logout } = useSession();
  useRedirect([{ path: ROUTE.LOGIN, haveRedirect: !isSessionActive }]);

  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.title}>
          <span>Split bills</span> the easy way ⚡️
        </h1>
      </div>
      <div>
        <ExpensiveGroup />
      </div>
    </main>
  );
};

export default Home;
