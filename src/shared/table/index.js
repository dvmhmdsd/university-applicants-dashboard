import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PersonIcon from "@material-ui/icons/Person";

import "./style.css";
import COLORS from "globals/style-constants";

import TablePaginationActions from "./TablePaginationActions";
import { translate } from "translation/translate";

export default function ApplicantsTable({ applicants, filterKey, lang }) {
  const useApplicantsTableStyles = makeStyles({
    table: {
      minWidth: 500,
      boxShadow: "none",
      marginTop: "1rem",
    },
    table__header: {
      textTransform: "capitalize",
    },
    table__header__cell: {
      fontWeight: 600,
      fontSize: "1.4rem",
      borderBottom: "none",
    },
    table__cell: {
      fontSize: "1.1rem",
      textTransform: "capitalize",
      padding: "1.6rem 0",
      borderBottom: "none",
    },
    cell__text: {
      marginBottom: "0.2rem",
      display: "inline-block",
    },
  });
  const classes = useApplicantsTableStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // To show only the users with the status in tabs
  let filteredApplicants = applicants.filter(
    (applicant) => translate(applicant.status) === filterKey
  );
  let data = filterKey ? filteredApplicants : applicants;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, applicants.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer dir={lang === "ar" ? "rtl" : "ltr"}>
      <Table className={classes.table} aria-label="applicants table">
        <TableHead className={classes.table__header}>
          <TableRow>
            <TableCell
              style={{ width: 160 }}
              align="center"
              className={classes.table__header__cell}
            >
              {translate("name")}
            </TableCell>
            <TableCell
              style={{ width: 160 }}
              align="center"
              className={classes.table__header__cell}
            >
              {translate("status")}
            </TableCell>
            <TableCell
              style={{ width: 160 }}
              align="center"
              className={classes.table__header__cell}
            >
              {translate("major")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell
                style={{ width: 160 }}
                align="center"
                className={classes.table__cell}
              >
                <PersonIcon
                  style={{
                    color: COLORS.SEC_TEXT,
                    margin: "0 0.6rem",
                    position: "relative",
                    top: "0.5rem",
                  }}
                  fontSize="large"
                />
                <p className={classes.cell__text}>{row.name}</p>
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="center"
                className={classes.table__cell}
              >
                {row.status}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="center"
                className={classes.table__cell}
              >
                {row.major}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ padding: "1rem" }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              style={{ marginTop: "3rem" }}
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

ApplicantsTable.propTypes = {
  applicants: PropTypes.array.isRequired,
  filterKey: PropTypes.string,
};
