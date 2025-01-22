import React, { createContext, ReactNode, useContext, useState } from "react";

export interface User {
  email: string;
  fullname: { firstName: string; lastName: string };
}
export interface UserDataContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
const UserDataContext = createContext<UserDataContextType | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>({
    email: "",
    fullname: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <div>
      <UserDataContext.Provider value={{ user, setUser }}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export const useUserContext = () => {
  return useContext(UserDataContext);
};
