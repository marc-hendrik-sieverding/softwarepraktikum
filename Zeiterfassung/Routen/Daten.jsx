import { Pie } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import '../src/styles.css';

function Daten() {
  const [DiagrammDaten, setDiagrammDaten] = useState({});
  const [TortenDiagrammDaten, setTortenDiagrammDaten] = useState({});

  const tabelleDaten = [
    { datum: "2024-02-25", zeit: "12:00", Tätigkeit: "Arbeit" },
    { datum: "2024-02-25", zeit: "13:00", Tätigkeit: "Sonstiges" },
    { datum: "2024-02-25", zeit: "14:00", Tätigkeit: "Freizeit" }, ];

  useEffect(() => {
    const TätigkeitenAnzahl = {};
    tabelleDaten.forEach((eintrag) => {
      TätigkeitenAnzahl[eintrag.Tätigkeit] =
        (TätigkeitenAnzahl[eintrag.Tätigkeit] || 0) + 1;
    });
    setDiagrammDaten(TätigkeitenAnzahl);
  }, [tabelleDaten]);

  useEffect(() => {
    const labels = Object.keys(DiagrammDaten);
    const data = Object.values(DiagrammDaten);
    setTortenDiagrammDaten({
      labels: labels,
      datasets: [
        {
          label: "Anteil Tätigkeiten",
          data: data,
          backgroundColor: [
            'var(--color-1)',
            'var(--color-2)',
            'var(--color-3)',
            'var(--color-4)',
            'var(--color-5)',
          ],
        },
      ],
    });
  }, [DiagrammDaten]);

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
      <Button variant="contained" href="/">Home</Button>
      <Button variant="contained" href="/NachAnmeldung">Zeit erfassen</Button>
      <Tortendiagramm diagrammDaten={TortenDiagrammDaten} />
    </>
)
  function Tortendiagramm(DiagrammDaten) {
    return (
        <>
       <h2>Tätigkeiten</h2>
        <Pie
        data={DiagrammDaten}
        options={{
          plugins: {
           title: {
              display: true,
              text: "Anteil Tätigkeiten"
                  }
                 }
            }}
        />
      </>
  )
}

}

export default Daten;