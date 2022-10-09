import { useState } from "react";
import React from "react";
import useToken from "../App/useToken";
import axios from "axios";
import styles from "./Ee.module.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

export default function Enrollemployee() {
  const [Firstname, setFirstname] = useState("Hitanshu");
  const [Lastname, setLastname] = useState("Shah");
  const [Email, setEmail] = useState("hitanshushah5@gmail.com");
  const [Phone, setPhone] = useState("+91 7227950335");
  const [UserType, setUserType] = useState("Inhouse");
  const [DOB, setDOB] = useState("2001-01-10");
  const [Aadhar, setAadhar] = useState();
  const [Panfront, setPanfront] = useState();
  const [Panback, setPanback] = useState();

  const { token, setToken } = useToken();

  const ee = async (e) => {
    let data = new FormData();
    data.append("Firstname", Firstname);
    data.append("Lastname", Lastname);
    data.append("Email", Email);
    data.append("Phone", Phone);
    data.append("UserType", UserType);
    data.append("DOB", DOB);
    data.append("Aadhar", Aadhar);
    data.append("PAN_Front", Panfront);
    data.append("PAN_Back", Panback);
    data.append("token", token);
    e.preventDefault();
    console.log("Entering EE");
    axios
      .post("http://localhost:3000/employee/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
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
                Lastname
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
            <div className={styles.loginFormItem}>
              <label className={styles.label}>User-Type</label>

              <select
                className={styles.field}
                onChange={(e) => setUserType(e.target.value)}
                value={UserType}
              >
                <option value="Inhouse">Inhouse</option>
                <option value="Employee-1">Employee-1</option>
                <option value="Employee-2">Employee-2</option>
              </select>
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="Image" className={styles.label}>
                Aadhar
              </label>
              <input
                type="file"
                id="Aadhar"
                onChange={(e) => {
                  setAadhar(e.target.files[0]);
                }}
                // onChange={(e) => setAadhar(e.target.value)}
                className={styles.field}
              />
            </div>

            <div className={styles.loginFormItem}>
              <label htmlFor="Image" className={styles.label}>
                Pan Card(Front)
              </label>
              <input
                type="file"
                id="Pan Card(front)"
                onChange={(e) => {
                  setPanfront(e.target.files[0]);
                }}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="Image" className={styles.label}>
                Pan card(back)
              </label>
              <input
                type="file"
                id="Pan card(back)"
                onChange={(e) => {
                  setPanback(e.target.files[0]);
                }}
                className={styles.field}
              />
            </div>

            <Button
              className={styles.button}
              onClick={ee}
              variant="outline-secondary"
            >
              Enroll
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
