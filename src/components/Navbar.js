import React, { useState } from "react";
import LogoutButton from "../components/LogoutButton";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import logoone from "../images/logoone.png";

const Navbar = (props) => {
  const { user } = useAuth0();
  const [logout, setLogout] = useState(false);

  console.log(user);

  const renderUsername = () => {
    const name = user.given_name.slice(0, 1);
    return (
      <p>
        {name}.{user.family_name}
      </p>
    );
  };
  const renderNickname = () => {
    return <p>{user.nickname}</p>;
  };
  console.log(user);

  return (
    <>
      {user ? (
        <div className="navbar">
          <div className="logo">
            <img src={logoone} width="55px" height="55px" alt="logo" />
            <h2>Dream Bakery</h2>
            <button onClick={() => props.setToggleAdd(!props.toggleAdd)}>
              Add
            </button>
          </div>

          <div className="wrapper">
            <span>
              {user.given_name && user.family_name
                ? renderUsername()
                : renderNickname()}{" "}
            </span>
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
