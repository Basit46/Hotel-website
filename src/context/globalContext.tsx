import React, { createContext, useContext, useState } from "react";

export const globalContext = createContext({} as GlobalContextType);

type GlobalContextType = {
  openBookingModal: boolean;
  setOpenBookingModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [openBookingModal, setOpenBookingModal] = useState(false);

  return (
    <globalContext.Provider value={{ openBookingModal, setOpenBookingModal }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  return useContext(globalContext);
};
