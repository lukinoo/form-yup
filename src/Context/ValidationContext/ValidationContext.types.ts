import { FormikProps } from "formik";

export type TInitialValues = {
  name: string;
  lastname: string;
  email: string;
  password: string;
};

export type TValidationValues = { formik: FormikProps<TInitialValues> };
