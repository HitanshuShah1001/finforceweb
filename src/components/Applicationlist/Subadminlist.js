import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ModalBody } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useToken from "../App/useToken";

export default function Subadminlist({ open, setOpen, Ids }) {
  const { token } = useToken();
  const [admins, setAdmins] = useState([]);
  const [selectedsubadmin, setSelectedsubadmin] = useState("");
  const assigntosubadmin = () => {
    console.log(selectedsubadmin, "Selected sub admin");
    axios
      .post("http://localhost:3000/application/assign", {
        token,
        ProcessorId: selectedsubadmin,
        Ids,
      })
      .then((res) => {
        setOpen(false);
        console.log(res.data, "Aassin");
        alert("Assigned Succesfully!");
      })
      .catch((error) => {
        console.log(error, "An error occured");
      });
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    axios
      .post("http://localhost:3000/admin/list", {
        token,
        skip: 0,
        limit: 10000,
        Type: "Admin",
      })
      .then((res) => {
        setAdmins(res.data.admins);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>SubAdmins</Modal.Title>
      </Modal.Header>
      {admins !== [] &&
        admins.map((admin) => (
          <ModalBody
            onClick={() => {
              setSelectedsubadmin(admin._id);
            }}
            style={{
              backgroundColor: selectedsubadmin === admin._id ? "red" : "white",
            }}
          >
            {admin.Firstname + " " + admin.Lastname}
          </ModalBody>
        ))}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={assigntosubadmin}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
