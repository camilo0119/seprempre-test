import React from "react";
import Logo from "../../assets/images/logo/download@3x.png";

const NavBar = () => {
  return (
    <div className="columns is-mobile navbar">
      <div className="column is-half is-offset-one-quarter is-center mt-5">
        <img src={Logo} alt="Logo Serempre" width="58" height="58" />
      </div>
    </div>
  );
};

export default NavBar;
