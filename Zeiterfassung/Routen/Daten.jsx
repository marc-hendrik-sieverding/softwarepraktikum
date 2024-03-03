import React, { useState, useEffect } from "react";
import { PieChart } from '@mui/x-charts/PieChart';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Button } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import '../src/styles.css';
import { Zeitformat } from './Zeitformat'
import FilterDatum from './FilterDatum'

function Daten() {
  const { art, taetigkeiten, seconds, value } = useParams();
  const [DiagrammDaten, setDiagrammDaten] = useState([]);
  const [gespeicherteEingaben, setGespeicherteEingaben] = useState([]);
  const {gefilterteDaten, vorherigerTag, naechsterTag, aktuellesDatum} = FilterDatum(gespeicherteEingaben)
    
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem('user'));
    const newData = { Datum: value, Art: art, Zeit: seconds, Tätigkeit: taetigkeiten };

    if (existingData) {
      const updatedData = [...existingData, newData];
      localStorage.setItem('user', JSON.stringify(updatedData));
      setGespeicherteEingaben(updatedData);
    } 
    else {
      localStorage.setItem('user', JSON.stringify([newData]));
      setGespeicherteEingaben(newData);
    }
  },[art, taetigkeiten, seconds, value]);    //lösche den array für eine Überraschung

  useEffect(() => {
    const ArtAnzahl = { Freizeit: 0, Arbeit: 0, Sonstiges: 0 };
      gespeicherteEingaben.forEach((eingabe) => {ArtAnzahl[eingabe.Art] += 1;});
      const diagrammDaten = Object.keys(ArtAnzahl).map((art) => ({ id: art, value: ArtAnzahl[art], label: art, }));
      setDiagrammDaten(diagrammDaten);
  }, [gespeicherteEingaben]);


    const handleDelete = (index) => {
      const updatedData = [...gefilterteDaten];
      updatedData.splice(index, 1);
      localStorage.setItem('user', JSON.stringify(updatedData));
      setGespeicherteEingaben(updatedData);
    };

    const handleClearLocalStorage = () => {
      localStorage.removeItem('user');
      setGespeicherteEingaben([]);
    };

  return (
    <>
    <h1 className="Datum">Daten für: {aktuellesDatum.toLocaleDateString()}</h1>
      <Button className="DatenVorherigerTag" variant= "contained" onClick={vorherigerTag}>Vorheriger Tag</Button>
      <Button className="DatenNaechsterTag" variant= "contained" onClick={naechsterTag}>Nächster Tag</Button>
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
        {gefilterteDaten.map((eintrag, index) => (
          <TableRow key={index}>  
            <TableCell align="center">{eintrag.Datum}</TableCell>
            <TableCell align="center">{eintrag.Art}</TableCell>
            <TableCell align="center">{Zeitformat(eintrag.Zeit)}</TableCell>
            <TableCell align="center">{eintrag.Tätigkeit}</TableCell>
            <TableCell align="center">
              <Button variant="contained" onClick={() => handleDelete(index)}>Löschen</Button>
            </TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
        <Button variant="contained" onClick={handleClearLocalStorage}>LÖSCHE ALLES</Button>
        <Link to="/NachAnmeldung">
          <Button variant="contained">Zeit erfassen</Button> 
        </Link>
      <Tortendiagramm DiagrammDaten={DiagrammDaten} />
    </>
    )};
  
  function Tortendiagramm(props) {
    return (
      <div className="">
        <h1>Art</h1>
        <PieChart class="DatenTortendiagramm" series={[{ data: props.DiagrammDaten }]} width={400} height={200}/>
      </div>    //Referenz: https://mui.com/x/react-charts/pie/
    );
  }


export default Daten;