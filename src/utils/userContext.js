import { createContext } from "react";

const userContext = createContext({
  user: { name: "Vaishnav", 
  email: "vaishnav.vr33@gmail.com" },
});

export default userContext;
