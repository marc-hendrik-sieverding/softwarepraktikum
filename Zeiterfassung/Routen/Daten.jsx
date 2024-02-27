import React, { useState, useEffect } from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import '../src/styles.css';

function Daten() {
  const { art, taetigkeiten, secondsValue, value } = useParams();
  const currentDate = new Date().toLocaleDateString();
  const [DiagrammDaten, setDiagrammDaten] = useState([]);
    
  useEffect(() => {
    const tabelleDaten = [
    { Datum: value, Art: art, Zeit: secondsValue, Tätigkeit: taetigkeiten } ];
  
    const TätigkeitenAnzahl = {};
    tabelleDaten.forEach((eintrag) => {
      TätigkeitenAnzahl[eintrag.Tätigkeit] =
        (TätigkeitenAnzahl[eintrag.Tätigkeit] || 0) + 1;
      });
      
    setDiagrammDaten(
      Object.keys(TätigkeitenAnzahl).map((label, index) => ({
        id: index,
        value: TätigkeitenAnzahl[label],
        label: label,
      }))
    );
  },[taetigkeiten, secondsValue, art]);


  return (
    <>
    <h1 className="Datum">Daten für: {currentDate}</h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-slate-200">
            <TableCell align="center">Datum</TableCell>
            <TableCell align="center">Art</TableCell>
            <TableCell align="center">Zeit</TableCell>
            <TableCell align="center">Tätigkeit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow> 
              <TableCell align="center">{value}</TableCell>
              <TableCell align="center">{art}</TableCell>
              <TableCell align="center">{secondsValue}</TableCell>
              <TableCell align="center">{taetigkeiten}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button variant="contained" href="/"> Home </Button>
      <Button variant="contained" href="/NachAnmeldung"> Zeit erfassen </Button>
      <Tortendiagramm DiagrammDaten={DiagrammDaten} />
    </>
  );
  
  function Tortendiagramm(props) {
    return (
      <div className="TätigkeitenDaten">
        <h1>Tätigkeiten</h1>
        <PieChart
          series={[{ data: props.DiagrammDaten }]}
          width={400}
          height={200}
          
        />
      </div>
    );
  }


}

export default Daten;