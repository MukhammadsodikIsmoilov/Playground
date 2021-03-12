import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Posts from "../pages/News";
import LocalStorage from "../pages/LocalStorage";
import About from "../pages/About";
import Animation from "../pages/Animation";
import Users from "../pages/Users";
import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";
import Colors from "../components/colors";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/posts" component={Posts} />
    <Route path="/animation" component={Animation} />
    <Route path="/localstorage" component={LocalStorage} />
    <Route path="/color" component={Colors} />
    <Route path="/about" component={About} />
    <Route path="/users" component={Users} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
  </Switch>
);
