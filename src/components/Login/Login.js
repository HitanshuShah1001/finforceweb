import React, { useState } from "react";
import styles from "./login.module.css";
import img from "../../Assets/FFlogo.jpg";

import Button from "react-bootstrap/Button";

export default function Login({ setToken }) {
  async function Loginuser(email, password) {
    return fetch("http://localhost:3000/admin/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((data) => data.json())

      .catch((error) => {
        console.log(error);
      });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await Loginuser(email, password);
    console.log(data, "Dataaa");
    setToken(data.token);
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form>
          <div className={styles.loginForm}>
            <img
              src={img}
              width="170px"
              height={170}
              style={{ alignSelf: "center" }}
            />
            <div style={{ marginTop: "40px" }}>
              <div className={styles.loginFormItem}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.field}
                />
              </div>
              <div className={styles.loginFormItem}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.field}
                />
              </div>
            </div>
            <Button
              className={styles.button}
              onClick={handleLogin}
              variant="outline-secondary"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
