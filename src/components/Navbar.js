import React, { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import logoone from "../images/logoone.png";

const Navbar = (props) => {
  const { user } = useAuth0();
  const [logout, setLogout] = useState(false);

  const renderUsername = () => {
    const name = user.given_name.slice(0, 1);
    return (
      <p>
        {name}.{user.family_name}
      </p>
    );
  };
  return (
    <>
      {/* {JSON.stringify(user, null, 2)} */}
      {user ? (
        <div className="navbar">
          <div className="logo">
            <img src={logoone} width="55px" height="55px" alt="logo" />
            <h2>Dream Bakery</h2>
          </div>
          <div className="wrapper">
            <span>{renderUsername()}</span>
          </div>
          <img
            style={{ borderRadius: "50%" }}
            src={user.picture}
            alt="profile"
            onClick={() => setLogout(!logout)}
          />
          <div className={logout === false ? "hide" : null}>
            <LogoutButton />
          </div>
        </div>
      ) : (
        user
      )}
    </>
  );
};

export default Navbar;
