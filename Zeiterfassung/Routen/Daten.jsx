import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';



function Daten() {
    return(
        <>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-slate-200">
            <TableCell align="center">Datum</TableCell>
            <TableCell align="center">Zeit</TableCell>
            <TableCell align="center">Tätigkeit</TableCell>
            <TableBody>
              
            </TableBody>
          </TableRow>
        </TableHead>
        </Table>
    </>
)}

export default Daten;