import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Enrolluser from "./components/Enrolluser/Enrolluser";
import Enrollemployee from "./components/EnrollEmployee/Enrollemployee";
import Applicationlist from "./components/Applicationlist/Applicationlist";
import Employeelist from "./components/Employeelist/Employeelist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";
import Navbar from "./components/Navbar";

import Applicationdetail from "./components/Applicationdetail/Applicationdetail";
import Productlist from "./components/Product/Productlist";
import Productcreate from "./components/ProductCreate/Productcreate";
import Productupdate from "./components/ProductUpdate/Productupdate";
import Users from "./components/Users/Users";
import Subadmin from "./components/Subadmin/Subadmin";
import Createsubadmin from "./components/Subadmin/Createsubadmin";
import User from "./UserContext/Usercontext";
function App() {
  const { token, setToken } = useToken();
  const [Usertype, setUsertype] = useState("Admin");
  const [id, setId] = useState("");
  console.log(token);
  if (!token) {
    return (
      <User.Provider value={{ Usertype, setUsertype, id, setId }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
          </Routes>
        </BrowserRouter>
      </User.Provider>
    );
  }
  return (
    <User.Provider value={{ Usertype, setUsertype, id, setId }}>
      <BrowserRouter>
        <Navbar setToken={setToken} />
        <Routes>
          <Route path="/" element={<Enrolluser />} />
          <Route path="/Enrollemployee" element={<Enrollemployee />} />
          <Route path="/Applicationlist" element={<Applicationlist />} />
          <Route path="/Employeelist" element={<Employeelist />} />
          <Route path="/Applicationdetail" element={<Applicationdetail />} />
          <Route path="/Product" element={<Productlist />} />
          <Route path="/ProductOperation" element={<Productcreate />} />
          <Route path="/ProductUpdate" element={<Productupdate />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Subadmin" element={<Subadmin />} />
          <Route path="/Createsubadmin" element={<Createsubadmin />} />
          <Route path="/ProductCreate" element={<Productcreate />} />
        </Routes>
      </BrowserRouter>
    </User.Provider>
  );
}

export default App;
