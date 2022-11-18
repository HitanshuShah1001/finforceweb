import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ setToken }) => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/Enrolluser">Enroll User</NavLink>
          <NavLink to="/Enrollemployee">Enroll employee</NavLink>
          <NavLink to="/Applicationlist">Applicationlist</NavLink>
          <NavLink to="/Employeelist">Employee list</NavLink>
          {/* Second Nav */}
          <button type="submit" onClick={() => setToken(null)}>
            Logout
          </button>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
