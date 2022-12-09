import { useFormik, FormikProps } from "formik";
import { FC, ReactNode } from "react";
import { userValidation } from "../../Validations";
import type { TInitialValues } from "./ValidationContext.types";
import { validationContext } from "./createContext";
import { useNavigate, useNavigation } from "react-router-dom";

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
  const navigation = useNavigate();

  const formik: FormikProps<TInitialValues> = useFormik({
    initialValues,
    validationSchema: userValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <validationContext.Provider value={{ formik }}>
      {children}
    </validationContext.Provider>
  );
};
