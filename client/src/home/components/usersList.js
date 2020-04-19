import React from "react";

import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableSortLabel from "@material-ui/core/TableSortLabel";

const useStyles = makeStyles({
  table: {
    minWidth: 750,
  },
});

function UsersList(props) {
  const classes = useStyles();

  const onClickTableHeader = (columnName) => {
    props.onSort(columnName);
  };

  const getHeaderTableCell = (labelText, headerId, isNumeric = false) => {
    return (
      <TableCell align={isNumeric ? "left" : "right"}>
        <TableSortLabel
          active={props.sortBy === headerId}
          direction={props.sortBy === headerId ? props.sortOrder : "asc"}
          onClick={() => onClickTableHeader(headerId)}
        >
          {labelText}
        </TableSortLabel>
      </TableCell>
    );
  };

  return (
    <div>
      {props.users && props.users.length === 0 ? (
        <p>No users found!</p>
      ) : (
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {getHeaderTableCell("Id", "id", true)}
                  {getHeaderTableCell("Name", "name")}
                  {getHeaderTableCell("City", "address.city")}
                  {getHeaderTableCell("Email", "email")}
                  {getHeaderTableCell("Phone", "phone")}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.id}
                    </TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">{user.address.city}</TableCell>
                    <TableCell align="right">
                      {user.email.toLowerCase()}
                    </TableCell>
                    <TableCell align="right">{user.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={props.totalRecords}
            rowsPerPage={5}
            page={props.currentPage}
            onChangePage={props.onChangePage}
            rowsPerPageOptions={[]}
          />
        </div>
      )}
    </div>
  );
}

export default UsersList;
