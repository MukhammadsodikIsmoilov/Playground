import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Posts from "./pages/News";
import LocalStorage from "./pages/LocalStorage";
import About from "./pages/About";
import Animation from "./pages/Animation";
import Users from "./pages/Users";

const App = () => (
  <Router>
    <div className="container">
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path="/posts" component={Posts} />
      <Route path="/animation" component={Animation} />
      <Route path="/localstorage" component={LocalStorage} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </div>
  </Router>
);

export default App;
