import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SComplete } from "./Complete.styled";

export const Complete = () => {
  const [user, setUser] = useState<{
    name: string;
    lastname: string;
    email: string;
    password: string;
  }>({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) navigate("/");

    setUser(location.state);
  }, []);

  return (
    <SComplete>
      <h2>Thank you! {user.name} 🔥</h2>
      <p>
        Thanks for signing up. Welcome to our community. We are happy to have
        you on board. Your email is {user.email}
      </p>
    </SComplete>
  );
};
