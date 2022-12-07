import { createContext, FC, ReactNode } from "react";
import type { TValidationValues } from "./ValidationContext.types";

export const validationContext = createContext({} as TValidationValues);

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
