import React, { createContext, ReactNode, useContext, useState } from "react";
export interface Captain {
  email: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
}
export interface CaptainContextTypes {
  captain: Captain;
  setCaptain:React.D
}
const CaptainDataContext = createContext<CaptainContextTypes | null>(null);
export const CaptainContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [captain, setCaptain] = useState<Captain>();
  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain }}>
      <>{children}</>
    </CaptainDataContext.Provider>
  );
};
export const useCaptainContext = () => {
  return useContext(CaptainDataContext);
};
