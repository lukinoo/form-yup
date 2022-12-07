import { SInput } from "../../components/SInput";
import { SLabel } from "../../components/SLabel";

export const Registration = () => {
  return (
    <form>
      <SLabel htmlFor="name">hello, world 🚀</SLabel>
      <SInput id="name" type="text" />
    </form>
  );
};
