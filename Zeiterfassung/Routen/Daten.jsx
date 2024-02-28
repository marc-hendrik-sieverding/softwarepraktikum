import React, { useState, useEffect } from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../src/styles.css';


function Daten() {
  const { art, taetigkeiten, seconds, value } = useParams();
  const currentDate = new Date().toLocaleDateString();
  const [DiagrammDaten, setDiagrammDaten] = useState([]);
  const [gespeicherteEingaben, setGespeicherteEingaben] = useState([]);
    
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('user'));
    const newData = { Datum: value, Art: art, Zeit: seconds, Tätigkeit: taetigkeiten };

    if (existingData) {
      const updatedData = [...existingData, newData];
      localStorage.setItem('user', JSON.stringify(updatedData));
      setGespeicherteEingaben(updatedData);
    } else {
      localStorage.setItem('user', JSON.stringify([newData]));
      setGespeicherteEingaben([newData]);
    }
  }, [art, taetigkeiten, seconds, value]);    //lösche den array für eine Überraschung

  useEffect(() => {
    const ArtAnzahl = { Freizeit: 0, Arbeit: 0, Sonstiges: 0 };
      gespeicherteEingaben.forEach((eingabe) => {
        ArtAnzahl[eingabe.Art] += 1;
      });
      const diagrammDaten = Object.keys(ArtAnzahl).map((art) => ({
        id: art,
        value: ArtAnzahl[art],
        label: art,
      }));

      setDiagrammDaten(diagrammDaten);
    }, [gespeicherteEingaben]);

    console.log(gespeicherteEingaben)

  const handleClearLocalStorage = () => {
    localStorage.removeItem('user');
    setGespeicherteEingaben([]);
  };
  
  if (gespeicherteEingaben && gespeicherteEingaben.length > 0) {
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
        {gespeicherteEingaben.map((eingabe, index) => (
          <TableRow key={index}>  
             <TableCell align="center">{eingabe.Datum}</TableCell>
             <TableCell align="center">{eingabe.Art}</TableCell>
             <TableCell align="center">{eingabe.Zeit} Sekunden</TableCell>
             <TableCell align="center">{eingabe.Tätigkeit}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={handleClearLocalStorage}>LÖSCHE ALLES</Button>
      <Button variant="contained" href="/"> Home </Button>
      <Link to="/NachAnmeldung">
        <Button variant="contained">Zeit erfassen</Button> </Link>
      <Tortendiagramm DiagrammDaten={DiagrammDaten} />
    </>
  )};
  
  function Tortendiagramm(props) {
    return (
      <div className="">
        <h1>Art</h1>
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