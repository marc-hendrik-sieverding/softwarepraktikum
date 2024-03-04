import React from 'react';
import { Button } from '@mui/material';
import Seconds from './Seconds';
import { Link } from 'react-router-dom';
import { Zeitformat } from './Zeitformat';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NachAnmeldung() {
  const { seconds, startTimer, resetTimer} = Seconds();
  const [aktuelleZeit, setAktuelleZeit] = useState('');
  const navigate = useNavigate();

  
  const aktuellerZeitpunkt = () => {
    const aktuelleZeit = new Date().toLocaleTimeString();
    setAktuelleZeit(aktuelleZeit)
  }
  const handleSave = () => {
  navigate(`/Zeit_erfasst/${seconds}/${aktuelleZeit}`);
  }
  
  return (
    <div>
      <h2>Zeit: {Zeitformat(seconds)}</h2>
      <Button class="StartResetSpeichern" variant="contained" onClick={() => {startTimer(); aktuellerZeitpunkt();}}> Start </Button>
      <Button class="StartResetSpeichern" variant="contained" onClick={resetTimer}> Reset </Button>
      <Button class="StartResetSpeichern" variant='contained' onClick={handleSave}> Speichern </Button>
      <Button class="logout" variant="contained" href="/" >Logout</Button>
    </div>
  );
}