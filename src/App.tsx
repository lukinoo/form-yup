import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Complete } from "./view/Complete";
import { RegistrationForm } from "./view/RegistrationForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RegistrationForm />} />
      <Route path="/complete" element={<Complete />} />
    </Routes>
  );
};

export default App;
