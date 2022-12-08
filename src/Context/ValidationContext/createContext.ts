import { createContext } from "react";
import type { TValidationValues } from "./ValidationContext.types";

export const validationContext = createContext({} as TValidationValues);
