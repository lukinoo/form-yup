import { useContext } from "react";
import { SButton } from "../../components/SButton";
import { SInput } from "../../components/SInput";
import { SLabel } from "../../components/SLabel";
import { validationContext } from "../../Context/ValidationContext/createContext";
import { SForm } from "./RegistrationForm.styled";

export const RegistrationForm = () => {
  const { formik } = useContext(validationContext);

  return (
    <SForm>
      <div>
        <SLabel
          isError={formik.errors.name && formik.touched.name}
          htmlFor="name"
        >
          {formik.errors.name && formik.touched.name
            ? formik.errors.name
            : "Name"}
        </SLabel>
        <SInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          placeholder="Name"
          id="name"
          type="text"
        />
        <img src="assets/svg/logo.svg" alt="js logo" />
      </div>
      <div>
        <SLabel
          isError={formik.errors.lastname && formik.touched.lastname}
          htmlFor="lastname"
        >
          {formik.errors.lastname && formik.touched.lastname
            ? formik.errors.lastname
            : "Lastname"}
        </SLabel>
        <SInput
          name="lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Lastname"
          id="lastname"
          type="text"
        />
      </div>
      <div>
        <SLabel
          isError={formik.errors.email && formik.touched.email}
          htmlFor="email"
        >
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : "Email"}
        </SLabel>
        <SInput
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          placeholder="Email"
          id="email"
          type="email"
        />
      </div>
      <div>
        <SLabel
          isError={formik.errors.password && formik.touched.password}
          htmlFor="password"
        >
          {formik.errors.password && formik.touched.password
            ? formik.errors.password
            : "Password"}
        </SLabel>
        <SInput
          name="password"
          placeholder="Password"
          onBlur={formik.handleBlur}
          id="password"
          type="password"
          onChange={formik.handleChange}
        />
      </div>
      <SButton>
        Registration
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </SButton>
    </SForm>
  );
};
