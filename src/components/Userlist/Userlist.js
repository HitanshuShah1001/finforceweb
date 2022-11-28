import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useToken from "../App/useToken";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  flexDirection: "column",
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Applicationlist() {
  const navigate = useNavigate();
  const { token } = useToken();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/application/list", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        token,
        resolveProduct: true,
        resolveUser: true,
        skip: 0,
        limit: 10000,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        setData(data.applications);

        console.log(data, "Data for products");
      })

      .catch((error) => {
        console.log(error, "error");
      });
  }, [token]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">User</StyledTableCell>

            <StyledTableCell align="left">Product</StyledTableCell>
            <StyledTableCell align="center">Provider</StyledTableCell>
            <StyledTableCell align="center">Applied On:-</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <StyledTableRow
              key={item.Status}
              onClick={() => navigate("/Applicationdetail", { state: item })}
            >
              <StyledTableCell component="th" scope="column" align="left">
                <div>{`${item?.User?.Firstname ?? "Hitanshu"} ${
                  item?.User?.Lastname ?? "Shah"
                }`}</div>
                <div>{`${item?.User?.Phone ?? "9137173437"}`}</div>
              </StyledTableCell>

              <StyledTableCell align="left">
                <img
                  src={`http://localhost:3000/${item.Product.CoverImage}`}
                  alt="BigCo Inc. logo"
                  width={64}
                  height={40}
                />
              </StyledTableCell>
              <StyledTableCell align="center">
                <div> {item.Product.BankName}</div>
                <div> {item.Product.Name}</div>
              </StyledTableCell>
              <StyledTableCell align="center">
                {item.createdAt.slice(0, 10)}
              </StyledTableCell>
              <StyledTableCell align="center">{item.Status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
