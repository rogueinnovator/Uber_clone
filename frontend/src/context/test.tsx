import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the user data.
type User = {
  id: string;
  name: string;
  email: string;
};

// Define the shape of the context.
type UserContextType = {
  user: User | null; // User is either `null` (logged out) or a `User` object.
  login: (user: User) => void;
  logout: () => void;
};

// Create the context with a default value of `undefined`.
const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

type UserProviderProps = {
  children: ReactNode;
};

// Provider component.
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (newUser: User) => {
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
