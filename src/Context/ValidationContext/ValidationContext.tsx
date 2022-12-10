import { useFormik, FormikProps } from "formik";
import { FC, ReactNode, useReducer } from "react";
import { userValidation } from "../../Validations";
import type { TInitialValues } from "./ValidationContext.types";
import { validationContext } from "./createContext";
import { useNavigate } from "react-router-dom";

type TProps = {
  children: ReactNode;
};

const initialValues: TInitialValues = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};

export const ValidationContext: FC<TProps> = ({ children }) => {
  const navigate = useNavigate();

  const formik: FormikProps<TInitialValues> = useFormik({
    initialValues,
    validationSchema: userValidation,
    onSubmit: (values: TInitialValues) => {
      navigate("/complete", { state: values });
    },
  });

  return (
    <validationContext.Provider value={{ formik }}>
      {children}
    </validationContext.Provider>
  );
};
