import { useState } from "react";
import React from "react";
import useToken from "../App/useToken";
import axios from "axios";
import styles from "./Ee.module.css";
import Button from "react-bootstrap/Button";

export default function Enrollemployee() {
  const [Firstname, setFirstname] = useState("Hitanshu");
  const [Lastname, setLastname] = useState("Shah");
  const [Email, setEmail] = useState("hitanshushah5@gmail.com");
  const [Phone, setPhone] = useState("+91 7227950335");
  const [DOB, setDOB] = useState("2001-01-10");
  const [AadharCardNumber, setAadharCardNumber] = useState("");
  const [PancardNumber, setPancardNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [CurrentJobExpirience, setCurrentJobExpirience] = useState("");
  const [Department, setDepartment] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Landmark, setLandmark] = useState("");
  const [MotherName, setMotherName] = useState("");
  const [NetSalary, setNetSalary] = useState("");
  const [OfficeAddress, setOfficeAddress] = useState("");
  const [OfficeCity, setOfficeCity] = useState("");
  const [OfficeLandmark, setOfficeLandmark] = useState("");
  const [OfficePincode, setOfficePincode] = useState("");

  const { token } = useToken();

  const ee = async (e) => {
    let data = new FormData();
    console.log(e, "E");
    data.append("CurrentJobExpirience", CurrentJobExpirience);
    data.append("Department", Department);
    data.append("Landmark", Landmark);
    data.append("MotherName", MotherName);
    data.append("NetSalary", NetSalary);
    data.append("OfficeAddress", OfficeAddress);
    data.append("OfficeCity", OfficeCity);
    data.append("OfficeLandmark", OfficeLandmark);
    data.append("OfficePincode", OfficePincode);
    data.append("Firstname", Firstname);
    data.append("Lastname", Lastname);
    data.append("Email", Email);
    data.append("Phone", Phone);
    data.append("DOB", DOB);
    data.append("AadharCardNumber", AadharCardNumber);
    data.append("PancardNumber", PancardNumber);
    data.append("Address", Address);
    data.append("City", City);
    data.append("token", token);

    e.preventDefault();

    axios
      .post("http://localhost:3000/user/create", {
        token: userdata?.token,
        Firstname,
        Lastname,
        Address,
        Landmark,
        MotherName,

        Phone,
        City,
        Email,
        OfficeAddress,
        Department,
        Designation,
        CurrentJobExpirience,
        NetSalary,
        AadharCardNumber,
        PancardNumber,

        OfficeCity,
        OfficePincode,
        OfficeLandmark,
        DOB,
      })
      .then((response) => {
        alert("User created succesfully");
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
              <label htmlFor="AadharCardNumber" className={styles.label}>
                AadharCardNumber
              </label>
              <input
                type={"number"}
                id="AadharCardNumber"
                value={AadharCardNumber}
                onChange={(e) => setAadharCardNumber(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="PancardNumber" className={styles.label}>
                PancardNumber
              </label>
              <input
                id="PancardNumber"
                value={PancardNumber}
                onChange={(e) => setPancardNumber(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="Address" className={styles.label}>
                Address
              </label>
              <input
                id="Address"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="City" className={styles.label}>
                City
              </label>
              <input
                id="City"
                value={City}
                onChange={(e) => setCity(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="CurrentJobExpirience" className={styles.label}>
                CurrentJobExpirience
              </label>
              <input
                id="CurrentJobExpirience"
                value={CurrentJobExpirience}
                onChange={(e) => setCurrentJobExpirience(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="Department" className={styles.label}>
                Department
              </label>
              <input
                id="Department"
                value={Department}
                onChange={(e) => setDepartment(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="Designation" className={styles.label}>
                Designation
              </label>
              <input
                id="Designation"
                value={Designation}
                onChange={(e) => setDesignation(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="Landmark" className={styles.label}>
                Landmark
              </label>
              <input
                id="Landmark"
                value={Landmark}
                onChange={(e) => setLandmark(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="MotherName" className={styles.label}>
                MotherName
              </label>
              <input
                id="MotherName"
                value={MotherName}
                onChange={(e) => setMotherName(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="NetSalary" className={styles.label}>
                NetSalary
              </label>
              <input
                type="NetSalary"
                id="number"
                value={NetSalary}
                onChange={(e) => setNetSalary(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="OfficeAddress" className={styles.label}>
                OfficeAddress
              </label>
              <input
                id="OfficeAddress"
                value={OfficeAddress}
                onChange={(e) => setOfficeAddress(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="OfficeCity" className={styles.label}>
                OfficeCity
              </label>
              <input
                id="OfficeCity"
                value={OfficeCity}
                onChange={(e) => setOfficeCity(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="OfficeLandmark" className={styles.label}>
                OfficeLandmark
              </label>
              <input
                id="OfficeLandmark"
                value={OfficeLandmark}
                onChange={(e) => setOfficeLandmark(e.target.value)}
                className={styles.field}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="OfficePincode" className={styles.label}>
                OfficePincode
              </label>
              <input
                type="number"
                id="OfficePincode"
                value={OfficePincode}
                onChange={(e) => setOfficePincode(e.target.value)}
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
