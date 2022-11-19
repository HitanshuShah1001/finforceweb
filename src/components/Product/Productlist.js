import axios from "axios";
import React, { useEffect, useState } from "react";
import useToken from "../App/useToken";
export default function Productlist() {
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
        >
          <div style={{ marginTop: 20 }}>
            <img src={`${item.CoverImage}`} height={"80"} />
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
  );
}
