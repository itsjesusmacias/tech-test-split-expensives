// Hooks
import { useLocalStorage } from "@/adapters/index";

// Constants
import { KEYS, INIT_DB } from "@/constants/index";

// Models
import { Users } from "@/models/index"

interface ReturnType {
  users: Users;
  setUsers: (user: Users) => void;
};

const useUsersStorage = (): ReturnType => {
  const [users, setUsers] = useLocalStorage({
    key: KEYS.USERS,
    initialValue: INIT_DB[KEYS.USERS],
  });

  return { users, setUsers };
};

export { useUsersStorage };
