import React from "react";
import { withStyles, createStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

function createData(order, name, phone, totalqunt, totalamnt) {
  return { order, name, phone, totalqunt, totalamnt };
}

const rows = [
  createData(1, "Rakesh", 7417742857, 111, 11100),
  createData(2, "Sumit", 9334111111, 100, 10000),
  createData(3, "Wagle", 9723451262, 99, 9900),
  createData(4, "Pavitra", 8796367305, 98, 9800),
  createData(5, "Harsh", 9876543356, 97, 9700),
];

function createData1(order, name, phone, totalqunt, totalamnt) {
  return { order, name, phone, totalqunt, totalamnt };
}

const rows1 = [
  createData1(1, "Bhavana", 9417742857, 21, 2100),
  createData1(2, "Rooppa", 9334111111, 22, 2200),
  createData1(3, "Amrita", 9723451262, 26, 2600),
  createData1(4, "Swarnsi", 8796367305, 28, 2800),
  createData1(5, "Deepika", 9876543356, 30, 3000),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function OrderTables() {
  const classes = useStyles();

  return (
    <>
      <h1>Top 5 order tables</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order NO</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Phone#</StyledTableCell>
              <StyledTableCell align="right">Total Quantity</StyledTableCell>
              <StyledTableCell align="right">Total Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.order}>
                <StyledTableCell component="th" scope="row">
                  {row.order}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                <StyledTableCell align="right">{row.totalqunt}</StyledTableCell>
                <StyledTableCell align="right">{row.totalamnt}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>Bottom 5 order tables</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order No</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Phone#</StyledTableCell>
              <StyledTableCell align="right">Total Quantity</StyledTableCell>
              <StyledTableCell align="right">Total Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row1) => (
              <StyledTableRow key={row1.order}>
                <StyledTableCell component="th" scope="row">
                  {row1.order}
                </StyledTableCell>
                <StyledTableCell align="right">{row1.name}</StyledTableCell>
                <StyledTableCell align="right">{row1.phone}</StyledTableCell>
                <StyledTableCell align="right">
                  {row1.totalqunt}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row1.totalamnt}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
