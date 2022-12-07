import { createContext, FC, ReactNode } from "react";

export const validationContext = createContext({});

type TProps = {
  children: ReactNode;
};

export const ValidationContext: FC<TProps> = ({ children }) => {
  let x = 5;

  return (
    <validationContext.Provider value={{ x }}>
      {children}
    </validationContext.Provider>
  );
};
