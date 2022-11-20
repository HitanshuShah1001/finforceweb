import axios from "axios";
import React, { useEffect, useState } from "react";
import useToken from "../App/useToken";
import { useNavigate } from "react-router-dom";
export default function Productlist() {
  const navigate = useNavigate();
  const { token } = useToken();
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/product/list", {
        token,
      })
      .then((data) => {
        console.log(data.data.products, "Response");
        setProducts(data.data.products);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  }, []);
  return (
    <>
      <div
        style={{
          marginBottom: 10,
          marginLeft: 25,
          marginRight: 25,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ color: "black", fontWeight: "650" }}>Product List</h2>
        <button
          style={{
            backgroundColor: "white",
            width: 140,
            borderRadius: 20,
            borderColor: "black",
            color: "black",
            position: "absolute",
            right: 15,
            height: 40,
          }}
          type="submit"
        >
          Create Product
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        {Products.map((item) => (
          <div
            style={{
              display: "flex",
              height: 240,
              backgroundColor: "black",
              width: "30%",
              borderRadius: 30,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
            onClick={() => navigate("/ProductUpdate", { state: item })}
          >
            <div style={{ marginTop: 20 }}>
              <img
                src={`http://localhost:3000/${item.CoverImage}`}
                height={"80"}
              />
            </div>
            <div
              style={{
                marginTop: 20,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h5 style={{ color: "white" }}>{item.Name}</h5>
              <div>
                <h5
                  style={{
                    color: "white",
                  }}
                >
                  {item.BankName}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
