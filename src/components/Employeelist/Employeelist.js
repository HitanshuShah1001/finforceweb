import axios from "axios";
import React, { useEffect, useState } from "react";
import useToken from "../App/useToken";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function Employeelist() {
  const { token } = useToken();
  const [employeelist, setEmployeelist] = useState([]);

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

  useEffect(() => {
    async function fetchEmployeelist() {
      console.log(token);
      let response = await axios.post("http://localhost:3000/employee/list", {
        token,
      });
      if (response?.data?.employees?.length !== 0) {
        setEmployeelist(response.data.employees);
      }
    }
    fetchEmployeelist();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">User</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Phone</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeelist.map((item) => (
            <StyledTableRow key={item.Status}>
              <StyledTableCell component="th" scope="column" align="left">
                <div>{item.Firstname + " " + item.Lastname}</div>
              </StyledTableCell>
              <StyledTableCell align="left">
                <div> {item.UserType}</div>
              </StyledTableCell>
              <StyledTableCell align="center">{item.Email}</StyledTableCell>
              <StyledTableCell align="center">{item.Phone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
