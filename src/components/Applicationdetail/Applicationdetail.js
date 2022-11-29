import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Ad.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import useToken from "../App/useToken";
import axios from "axios";
export default function Applicationdetail() {
  const location = useLocation();
  console.log(location, "Location");
  const navigate = useNavigate();
  const { token } = useToken();
  // const {
  //   Firstname = "Hitanshu",
  //   Lastname = "Shah",
  //   Phone = "7227950335",
  //   Email = "hitanshushah5@gmail.com",
  // } = location?.state?.User;
  const { CoverImage: Photo, BankName, Name } = location.state.Product;
  const { Status, StatusJustification } = location.state;
  const [status, setStatus] = React.useState(location.state.Status);
  const [feedback, setFeedback] = useState(location.state.StatusJustification);

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const ee = async (e) => {
    let data = {
      Status: status,
      token,
      ApplicationId: location.state._id,
      StatusJustification: feedback,
    };
    e.preventDefault();
    console.log("Entering EE");
    axios
      .post("http://localhost:3000/application/update", data, {})
      .then((response) => {
        console.log(response);
        navigate(-1);
        alert("Application updated");
      })
      .catch((error) => {
        console.log(error, "An error occured!");
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            height: 240,
            backgroundColor: "black",
            width: "30%",

            borderRadius: 30,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h3 style={{ color: "white", marginTop: 10 }}>User Info</h3>
          </div>
          <div style={{ marginTop: 20 }}>
            {/* <h5 style={{ color: "white" }}>{Firstname + " " + Lastname}</h5>
            <h6 style={{ color: "white" }}>{Phone}</h6>
            <h6 style={{ color: "white" }}>{Email}</h6> */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: 240,
            backgroundColor: "black",
            width: "30%",
            borderRadius: 30,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h3 style={{ color: "white", marginTop: 10 }}>Product Info</h3>
          </div>
          <div style={{ marginTop: 20 }}>
            <img src={`http://localhost:3000/${Photo}`} height={"80"} />
          </div>
          <div
            style={{
              marginTop: 20,
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h5 style={{ color: "white" }}>{Name}</h5>
            <div>
              <h5
                style={{
                  color: "white",
                }}
              >
                {BankName}
              </h5>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: 240,
            backgroundColor: "black",
            width: "30%",

            borderRadius: 30,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h3 style={{ color: "white", marginTop: 10 }}>Status</h3>
          </div>
          <div style={{ marginTop: 20, alignItems: "center" }}>
            <h5 style={{ color: "white" }}>{Status}</h5>
          </div>
          <div style={{ alignItems: "center" }}>
            <h5 style={{ color: "white", paddingLeft: 20 }}>
              {StatusJustification}
            </h5>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Box style={{ width: "30%" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleChange}
              style={{ borderRadius: 20 }}
            >
              <MenuItem value={"Not Started"}>Not Started</MenuItem>
              <MenuItem value={"Assigned"}>Assigned</MenuItem>
              <MenuItem value={"InProcess"}>InProcess</MenuItem>
              <MenuItem value={"Completed"}>Completed</MenuItem>
              <MenuItem value={"Withdrawn"}>Withdrawn</MenuItem>
              <MenuItem value={"Archived"}>Archived</MenuItem>
              <MenuItem value={"Rejected"}>Rejected</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className={styles.loginFormItem}>
        <h3
          style={{
            marginTop: 10,
            alignSelf: "center",
            color: "black",
            marginTop: 20,
          }}
        >
          Status Feedback
        </h3>
        <input
          type="Lastname"
          id="Lastname"
          value={feedback}
          style={{
            alignSelf: "center",
            height: "55px",
            width: "60%",
            borderRadius: "20px",
            paddingLeft: "10px",
            borderWidth: "medium",
            borderColor: "black",
          }}
          onChange={(text) => setFeedback(text.target.value)}
        />
        <Button
          onClick={ee}
          variant="contained"
          style={{
            width: "20%",
            alignSelf: "center",
            marginTop: 15,
            borderRadius: 20,
            backgroundColor: "black",
          }}
        >
          SAVE
        </Button>
      </div>
    </>
  );
}
