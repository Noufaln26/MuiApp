import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
   
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ListView({ data }) {
  const status=["Male","female"];
  return (
    <TableContainer component={Paper} sx={{mt:5}}>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Profile DP</StyledTableCell>

            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Cell</StyledTableCell>
            <StyledTableCell align="center">Age</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <Box
                  component="img"
                  sx={{
                    borderRadius: "50%",
                  }}
                  alt="Profile Dp"
                  src={row.picture.large}
                />
              </StyledTableCell>
              <StyledTableCell align="center">{row.name.first}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.cell}</StyledTableCell>

              <StyledTableCell align="center">
                {row.registered.age}
              </StyledTableCell>
              <StyledTableCell align="center">
              {row.gender === 'female' ? <Typography sx={{backgroundColor: "green", borderRadius: "10px"}}>Female</Typography> : <Typography sx={{backgroundColor: "orange",borderRadius:"10px"}} >Male</Typography>}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
