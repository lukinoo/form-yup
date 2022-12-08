import * as Yup from "yup";

export const userValidation = Yup.object({
  name: Yup.string()
    .max(20, "Name must be 20 character")
    .required("Name is required"),
  lastname: Yup.string()
    .max(20, "Lastname must be 20 character")
    .required("Lastname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Please Enter password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
