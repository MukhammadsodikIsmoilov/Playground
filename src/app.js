import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { AuthState } from "./context";
import "./app.css";

const App = () => (
  <AuthState>
    <Router>
      <div className="container">
        <Routes />
      </div>
    </Router>
  </AuthState>
);

export default App;
