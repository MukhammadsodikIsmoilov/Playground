import { Fragment } from "react";
import CreateUser from "../components/newUser";
import Navbar from "../components/Navbar";

const HomePage = () => (
  <Fragment>
    <Navbar />
    <div className="homepage_body">
      <CreateUser />
    </div>
  </Fragment>
);

export default HomePage;
