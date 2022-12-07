import { SInput } from "./components/SInput";
import { SLabel } from "./components/SLabel";

const App = () => {
  return (
    <div className="App">
      <SLabel htmlFor="name">hello, world 🚀</SLabel>
      <SInput id="name" type="text" />
    </div>
  );
};

export default App;
