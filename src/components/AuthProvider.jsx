import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({}) => {
  const [userId, setUserId] = useState(null);
};
