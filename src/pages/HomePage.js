import { Fragment } from "react";
import { Redirect } from "react-router-dom";
import Cookies from 'js-cookie'
import CreateUser from "../components/newUser";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const user = Cookies.get('user')

  if (!user) return <Redirect to="/sign-in" />;

  return (
    <Fragment>
      <Navbar />
      <div className="homepage_body">
        <CreateUser />
      </div>
    </Fragment>
  );
};

export default HomePage;
