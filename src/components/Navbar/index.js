import React from "react";
import User from "../../UserContext/Usercontext";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { useNavigate } from "react-router-dom";
const Navbar = ({ setToken }) => {
  const navigate = useNavigate();
  const { Usertype } = React.useContext(User);
  console.log(Usertype);
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Enroll User</NavLink>
          <NavLink to="/Enrollemployee">Enroll employee</NavLink>
          <NavLink to="/Applicationlist">Applicationlist</NavLink>
          <NavLink to="/Employeelist">Employee list</NavLink>
          <NavLink to="/Product">Product </NavLink>
          <NavLink to="/Users">Users </NavLink>
          {Usertype === "SuperAdmin" && (
            <NavLink to="/Subadmin">Sub-Admin</NavLink>
          )}

          {/* Second Nav */}
          <button
            style={{
              backgroundColor: "black",
              width: 90,
              borderRadius: 20,
              borderColor: "white",
              color: "white",
              position: "absolute",
              right: 15,
              height: 40,
            }}
            type="submit"
            onClick={() => {
              setToken(null);
              navigate("/");
            }}
          >
            Logout
          </button>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
