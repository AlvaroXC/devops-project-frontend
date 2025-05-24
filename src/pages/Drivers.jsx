import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Nombre", minWidth: 170, align: "left" },
  { id: "curp", label: "CURP", minWidth: 100, align: "left" },
  {
    id: "birthday",
    label: "Fecha de nacimiento",
    minWidth: 170,
    align: "left",
  },
  {
    id: "address",
    label: "Dirección",
    minWidth: 170,
    align: "left",
  },
  {
    id: "monthlySalary",
    label: "Salario",
    minWidth: 170,
    align: "left",
  },
  {
    id: "hire_date",
    label: "Fecha de contratación",
    minWidth: 170,
    align: "left",
  },
  {
    id: "license_number",
    label: "Número de licencia",
    minWidth: 170,
    align: "left",
  },
];

function createData(
  name,
  birthday,
  curp,
  address,
  monthlySalary,
  hire_date,
  license_number
) {
  return {
    name,
    birthday,
    curp,
    address,
    monthlySalary,
    hire_date,
    license_number,
  };
}

const rows = [
  createData(
    "Becky1",
    "2000-09-21",
    "ABCDEFGHIJK",
    "a2aada",
    "228937",
    "2022-09-13",
    "dfu2difunsdf"
  ),
  createData(
    "Becky2",
    "2000-09-11",
    "KJSNDKJSJK",
    "aaaada",
    "128937",
    "2020-09-13",
    "dfusdifunsdf"
  ),
  createData(
    "Becky3",
    "2000-09-11",
    "KJSNDJSDJK",
    "aaaada",
    "128937",
    "2020-09-13",
    "dfusdifunsdf"
  ),
];

export const Drivers = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="flex grow justify-center items-center">
      <Paper className="m-6" sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 0, minWidth: column.minWidth }}
                    
                  >
                   <span className="text-indigo-600 font-bold">{column.label}</span> 
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.curp}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
