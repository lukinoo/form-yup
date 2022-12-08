import { SButton } from "../../components/SButton";
import { SInput } from "../../components/SInput";
import { SLabel } from "../../components/SLabel";
import { SForm } from "./RegistrationForm.styled";

export const RegistrationForm = () => {
  return (
    <SForm>
      <div>
        <SLabel htmlFor="name">Name: </SLabel>
        <SInput name="name" placeholder="Name" id="name" type="text" />
        <img src="assets/svg/logo.svg" alt="js logo" />
      </div>
      <div>
        <SLabel htmlFor="lastname">Lastname: </SLabel>
        <SInput
          name="lastname"
          placeholder="Lastname"
          id="lastname"
          type="text"
        />
      </div>
      <div>
        <SLabel htmlFor="email">Email: </SLabel>
        <SInput name="email" placeholder="Email" id="email" type="email" />
      </div>
      <div>
        <SLabel htmlFor="password">Password: </SLabel>
        <SInput
          name="password"
          placeholder="Password"
          id="password"
          type="password"
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
