import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RegistrationForm } from "./view/RegistrationForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
