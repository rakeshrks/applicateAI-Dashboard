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

function createData(
  name,
  order,
  date,
  status,
  totalqunt,
  totalamnt,
  totalproductcount
) {
  return { name, order, date, status, totalqunt, totalamnt, totalproductcount };
}

const rows = [
  createData("Rakesh", 1, " 12 / 07 / 2021", "Regular", 111, 11100, 1110),
  createData("Sumit", 2, " 12 / 07 / 2021", "Active", 100, 10000, 1000),
  createData("Wagle", 3, "12 / 07 / 2021", "Inactive", 99, 9900, 990),
  createData("Pavitra", 4, " 12 / 07 / 2021", "Regular", 98, 9800, 980),
  createData("Harsh", 5, " 12 / 07 / 2021", "Active", 97, 9700, 970),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function OrderRepotr() {
  const classes = useStyles();

  return (
    <>
      <h1>Detail Order Report</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User Name</StyledTableCell>
              <StyledTableCell align="right">Order No</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Total Quantity</StyledTableCell>
              <StyledTableCell align="right">Total Amount</StyledTableCell>
              <StyledTableCell align="right">
                Total Product Count
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.order}</StyledTableCell>
                <StyledTableCell align="right">{row.date}</StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">{row.totalqunt}</StyledTableCell>
                <StyledTableCell align="right">{row.totalamnt}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.totalproductcount}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
