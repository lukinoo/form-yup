import { useNavigate } from "react-router-dom";
import { SError, SErrorBackButton } from "./Error.styled";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <>
      <SError>Something went wrong! 🤔</SError>
      <SErrorBackButton onClick={() => navigate("/")}>Go back</SErrorBackButton>
    </>
  );
};
