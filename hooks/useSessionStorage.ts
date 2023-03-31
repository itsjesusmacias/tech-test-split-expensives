// Hooks
import { useLocalStorage } from "@/adapters/index";

// Constants
import { KEYS, INIT_DB } from "@/constants/index";

// Models
import {Session} from "@/models/index";

interface ReturnType {
  session: Session;
  setSession: (session: Session) => void;
}

const useSessionStorage = (): ReturnType => {
  const [session, setSession] = useLocalStorage({
    key: KEYS.SESSION,
    initialValue: INIT_DB[KEYS.SESSION],
  });

  return { session, setSession };
};

export { useSessionStorage };
