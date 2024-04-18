import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Table from "@mui/material/Table";
import { ratesType } from "../../api/types";
import * as React from "react";
import makeRowsFromRates from "../../utils/makeRowsFromRates";

export default function RatesTable({
  rates,
}: {
  rates: (ratesType | undefined)[];
}) {
  const columnNames = ["Pair name/market", "First", "Second", "Third"];
  const rows = makeRowsFromRates(rates);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnNames.map((columnName, index) => (
              <TableCell align="center" key={index}>
                {columnName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.map((cell, index) => (
                <TableCell
                  align="center"
                  key={index}
                  sx={
                    cell.isMinimalValue
                      ? { backgroundColor: "blue", color: "white" }
                      : {}
                  }
                >
                  {cell.value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
