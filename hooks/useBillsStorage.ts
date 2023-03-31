// Hooks
import { useLocalStorage } from "@/adapters/index";

// Constants
import { KEYS, INIT_DB } from "@/constants/index";

// Models
import {Bill} from "@/models/index"

type Bills = Array<Bill>

interface ReturnTypes {
  bills: Bills;
  setBills: (bills: Bills) => void;
}

const useBillsStorage = (): ReturnTypes => {
  const [bills, setBills] = useLocalStorage({
    key: KEYS.BILLS,
    initialValue: INIT_DB[KEYS.BILLS],
  });

  return { bills, setBills };
};

export { useBillsStorage };
