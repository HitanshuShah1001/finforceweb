import { useEffect, useState } from "react";
import React from "react";
import useToken from "../App/useToken";
import axios from "axios";
import styles from "./Ee.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "react-dropdown/style.css";
import { bankMapper } from "../../Helpers/Mapper";
export default function Productcreate() {
  const navigate = useNavigate();
  const [BankName, setBankName] = useState("");
  const [Name, setName] = useState("");
  const [CustomerCut, setCustomerCut] = useState();
  const [Features, setFeatures] = useState("");
  const [CoverImage, setCoverImage] = useState("");
  const [EmployeeCut, setEmployeeCut] = useState();
  const [Description, setDescription] = useState("");
  const [Banks, setBanks] = useState([]);
  const [BankId, setBankId] = useState();

  const { token } = useToken();

  useEffect(() => {
    axios
      .post("http://localhost:3000/bank/list", {
        token,
      })
      .then((banks) => {
        console.log(banks.data.banks, "Banks");
        setBanks(banks.data.banks);
      });
  }, []);

  const options = ["one", "two", "three"];

  const handleChange = (event) => {
    console.log(event.target.value);
    setBankId(event.target.value);
    setBankName(bankMapper[event.target.value]);
  };

  const ee = async (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("BankName", BankName);
    data.append("Name", Name);
    data.append("CustomerCut", CustomerCut);
    data.append("Features", Features);
    data.append("CoverImage", CoverImage);
    data.append("EmployeeCut", EmployeeCut);
    data.append("Description", Description);
    data.append("token", token);
    data.append("BankId", BankId);
    e.preventDefault();
    axios
      .post("http://localhost:3000/product/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert("Product Created Succesfully!");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error, "An error occured!");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Box style={{ width: "90%", alignSelf: "center", marginBottom: 20 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Bank</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={BankId}
              label="Bank"
              onChange={handleChange}
              style={{ borderRadius: 20 }}
            >
              {Banks.map((item) => (
                <MenuItem value={item._id}>{item.Name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div className={styles.loginFormItem}>
          <label htmlFor="Image" className={styles.label}>
            Cover Image
          </label>
          {CoverImage !== "" && (
            <img
              src={URL.createObjectURL(CoverImage)}
              width="64"
              height={"64"}
              alt="Dummy"
              style={{ marginBottom: 20 }}
            />
          )}
          <input
            type="file"
            alt="Choose Image"
            id="CoverImage"
            onChange={(e) => {
              setCoverImage(e.target.files[0]);
            }}
            className={styles.field}
          />
        </div>
        <div className={styles.loginFormItem}>
          <label htmlFor="Description" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className={styles.field}
          />
        </div>
        <div className={styles.loginFormItem}>
          <label htmlFor="Description" className={styles.label}>
            Description
          </label>
          <input
            type="text"
            id="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.field}
          />
        </div>
        <div className={styles.loginFormItem}>
          <label htmlFor="Features" className={styles.label}>
            Features
          </label>
          <input
            type="text"
            id="Features"
            value={Features}
            onChange={(e) => setFeatures(e.target.value)}
            className={styles.field}
          />
        </div>
        <div className={styles.loginFormItem}>
          <label htmlFor="CustomerCut" className={styles.label}>
            CustomerCut
          </label>
          <input
            type="number"
            id="CustomerCut"
            value={CustomerCut}
            onChange={(e) => setCustomerCut(e.target.value)}
            className={styles.field}
          />
        </div>
        <div className={styles.loginFormItem}>
          <label htmlFor="EmployeeCut" className={styles.label}>
            EmployeeCut
          </label>
          <input
            type="number"
            id="EmployeeCut"
            value={EmployeeCut}
            onChange={(e) => setEmployeeCut(e.target.value)}
            className={styles.field}
          />
        </div>
        <button
          style={{
            backgroundColor: "black",
            width: 120,
            borderRadius: 20,
            borderColor: "white",
            color: "white",
            height: 40,
            alignSelf: "center",
          }}
          type="submit"
          onClick={ee}
        >
          Create
        </button>
      </div>
    </div>
  );
}
