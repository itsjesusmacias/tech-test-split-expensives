export const ROUTE = {
  LOGIN: "/",
  HOME: "/home",
};

export const KEYS = {
  SESSION: "session",
  USERS: "users",
  BILLS: "bills",
};

export const INIT_DB = {
  [KEYS.SESSION]: {
    username: "",
    password: "",
  },
  [KEYS.USERS]: [],
  [KEYS.BILLS]: [],
};
