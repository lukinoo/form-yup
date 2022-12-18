import { useNavigate } from "react-router-dom";
import { SError, SErrorBackButton } from "./Error.styled";
import { motion } from "framer-motion";

export const Error = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ ease: "easeOut", delay: 0.5, duration: 0.7 }}
    >
      <SError>Something went wrong! 🤔</SError>
      <SErrorBackButton onClick={() => navigate("/")}>Go back</SErrorBackButton>
    </motion.div>
  );
};
