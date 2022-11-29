import { useState } from "react";
import React from "react";
import useToken from "../App/useToken";
import axios from "axios";
import styles from "./Csa.module.css";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router-dom";

export default function Createsubadmin() {
  const navigate = useNavigate();
  const [Firstname, setFirstname] = useState("Hitanshu");
  const [Lastname, setLastname] = useState("Shah");
  const [Email, setEmail] = useState("hitanshushah5@gmail.com");
  const [Phone, setPhone] = useState("7227950335");
  const [DOB, setDOB] = useState("2001-01-10");
  const [Password, setPassword] = useState("");

  const { token } = useToken();

  const Enrollsubadmin = async (e) => {
    let data = new FormData();
    data.append("Firstname", Firstname);
    data.append("Lastname", Lastname);
    data.append("Email", Email);
    data.append("Phone", Phone);
    data.append("DOB", DOB);
    data.append("Password", Password);
    data.append("token", token);
    e.preventDefault();
    console.log("Entering EE");
    axios
      .post("http://localhost:3000/admin/create", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("Subadmin created Succesfully");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error, "An error occured!");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor="Firstname" className={styles.label}>
                Firstname
              </label>
              <input
                type="text"
                id="Firstname"
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="Lastname" className={styles.label}>
                Lastname
              </label>
              <input
                type="Lastname"
                id="Lastname"
                value={Lastname}
                onChange={(e) => setLastname(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="Email" className={styles.label}>
                Email
              </label>
              <input
                type="Email"
                id="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="Password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.field}
              />
            </div>

            <div className={styles.loginFormItem}>
              <label htmlFor="DOB" className={styles.label}>
                DOB
              </label>
              <input
                type="date"
                id="Date"
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
                className={styles.field}
              />
            </div>

            <div className={styles.loginFormItem}>
              <label htmlFor="Phone" className={styles.label}>
                Phone
              </label>
              <input
                type="tel"
                id="number"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.field}
              />
            </div>

            <Button
              className={styles.button}
              onClick={Enrollsubadmin}
              variant="outline-secondary"
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
