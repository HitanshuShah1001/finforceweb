import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Enrolluser from "./components/Enrolluser/Enrolluser";
import Enrollemployee from "./components/EnrollEmployee/Enrollemployee";
import Userlist from "./components/Userlist/Userlist";
import Employeelist from "./components/Employeelist/Employeelist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import useToken from "./components/App/useToken";
import Navbar from "./components/Navbar";
function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <BrowserRouter>
      <Navbar setToken={setToken} />
      <Routes>
        <Route path="/Enrolluser" element={<Enrolluser />} />
        <Route path="/Enrollemployee" element={<Enrollemployee />} />
        <Route path="/Userlist" element={<Userlist />} />
        <Route path="/Employeelist" element={<Employeelist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
