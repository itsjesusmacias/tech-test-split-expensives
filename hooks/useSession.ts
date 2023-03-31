// Hooks
import {useState} from "react";
import { useUsersStorage, useSessionStorage } from "@/hooks/index";

// Constans
import { KEYS, INIT_DB } from "@/constants/index";

// Utils
import { thereSomeEmptyString } from "@/utils/index"

// Models
import { Session } from "@/models/index";

interface ReturnType {
  session: Session;
  isSessionActive: boolean;
  login: (session: Session) => void;
  logout: () => void;
  needRegister: boolean;
}

const useSession = (): ReturnType => {
  const [needRegister, setNeedRegister] = useState(false);
  const { session, setSession } = useSessionStorage();
  const { users } = useUsersStorage();

  const login = ({ username, password }: Session) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user)
      setSession(user)
    else
      setNeedRegister(true);
  };

  const logout = () => {
    const initSession = INIT_DB[KEYS.SESSION];
    setSession(initSession);
  };

  const isSessionActive = !thereSomeEmptyString(session.username, session.password);

  return {
    session,
    isSessionActive,
    login,
    logout,
    needRegister,
  };
};

export { useSession };
