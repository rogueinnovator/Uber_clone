import React, { createContext, useContext, useState } from "react";
interface UserContextProps extends React.PropsWithChildren {
  children: React.ReactNode;
}
interface User {
  email: string;
  fullname: { firstName: string; lastName: string };
}
interface UserDataContextType {
  user: User;
}
export const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<User | null>({
    email: "",
    fullname: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <div>
      <UserDataContext.Provider value={[user, setUser]}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export const useUserContext = () => {
  return useContext(UserDataContext);
};
