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
  const { art, taetigkeiten, seconds, value, aktuelleZeit } = useParams();
  const [DiagrammDaten, setDiagrammDaten] = useState([]);
  const [gespeicherteEingaben, setGespeicherteEingaben] = useState([]);
  const {gefilterteDaten, vorherigerTag, naechsterTag, aktuellesDatum} = FilterDatum(gespeicherteEingaben)
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.userId;
  const ZeitTeile = aktuelleZeit.split(':');
  const existingData = JSON.parse(localStorage.getItem(`user_${userId}`));
  const newData = { Datum: value, Art: art, Zeit: seconds, Tätigkeit: taetigkeiten };
    
  useEffect(() => {
    if (existingData) {
      const updatedData = [...existingData, newData];
      localStorage.setItem(`user_${userId}`, JSON.stringify(updatedData));
      setGespeicherteEingaben(updatedData);
    } 
    else {
      localStorage.setItem(`user_${userId}`, JSON.stringify([newData]));
      setGespeicherteEingaben(newData);
    }
  },[art, taetigkeiten, seconds, value, userId]);   

  useEffect(() => {
    const ArtAnzahl = { Freizeit: 0, Arbeit: 0, Sonstiges: 0 };
      gespeicherteEingaben.forEach((eingabe) => {ArtAnzahl[eingabe.Art] += 1;});
      const diagrammDaten = Object.keys(ArtAnzahl).map((art) => ({ id: art, value: ArtAnzahl[art], label: art, }));
      setDiagrammDaten(diagrammDaten);
  }, [gespeicherteEingaben]);


    const handleDelete = (index) => {
      const updatedData = [...gefilterteDaten];
      updatedData.splice(index, 1);
      localStorage.setItem(`user_${userId}`, JSON.stringify(updatedData));
      setGespeicherteEingaben(updatedData);
    };

    const handleClearLocalStorage = () => {
      localStorage.removeItem(`user_${userId}`);
      setGespeicherteEingaben([]);
    };

    const berechneEndZeit = (eintragZeit) => {
      const Stunden = parseInt(ZeitTeile[0])
      const Minuten = parseInt(ZeitTeile[1])
      const Sekunden = parseInt(ZeitTeile[2])
      const aktuelleZeitInSekunden = Stunden * 3600 + Minuten * 60 + Sekunden
      const endZeitInSekunden = aktuelleZeitInSekunden + parseInt(eintragZeit);
      const StundenEndzeit = Math.floor(endZeitInSekunden / 3600);
      const MinutenEndzeit = Math.floor((endZeitInSekunden % 3600) / 60);
      const SekundenEndzeit = endZeitInSekunden % 60;
      return `${StundenEndzeit}:${MinutenEndzeit}:${SekundenEndzeit}`;
    }

  return (
    <>
    <h1 class="Datum">Daten für: {aktuellesDatum.toLocaleDateString()}</h1>
      <Button className="DatenVorherigerTag" variant= "contained" onClick={vorherigerTag}>Vorheriger Tag</Button>
      <Button className="DatenNaechsterTag" variant= "contained" onClick={naechsterTag}>Nächster Tag</Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-slate-200">
            <TableCell align="center">Datum</TableCell>
            <TableCell align="center">Zeitraum</TableCell>
            <TableCell align="center">Tätigkeit</TableCell>
            <TableCell align="center">Zeit</TableCell>
            <TableCell align="center">Art</TableCell>
            <TableCell align="center">Löschen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {gefilterteDaten.map((eintrag, index) => (
          <TableRow key={index}>  
            <TableCell align="center">{eintrag.Datum}</TableCell>
            <TableCell align="center">{aktuelleZeit} -- {berechneEndZeit(eintrag.Zeit)} </TableCell>
            <TableCell align="center">{eintrag.Tätigkeit}</TableCell>
            <TableCell align="center">{Zeitformat(eintrag.Zeit)}</TableCell>
            <TableCell align="center">{eintrag.Art}</TableCell>
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
      <div className="DatenTortendiagrammContainer">
        <h1 className="DatenTortendiagrammText">Art</h1>
        <PieChart className="DatenTortendiagramm" series={[{ data: props.DiagrammDaten }]} width={400} height={200}/>
      </div>    //Referenz: https://mui.com/x/react-charts/pie/
    );
  }


export default Daten;