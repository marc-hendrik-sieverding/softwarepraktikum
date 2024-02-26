import React from 'react';
import { Button } from '@mui/material';
import Seconds from './Seconds';

export default function NachAnmeldung() {
  const { seconds, startTimer, resetTimer, saveTimer } = Seconds();

  return (
    <div>
      <h2>Zeit: {seconds} Sekunden</h2>
      <Button variant="contained" onClick={startTimer}> Start </Button>
      <Button variant="contained" onClick={resetTimer}> Reset </Button>
      <Button variant="contained" href="/Zeit_erfasst" onClick={saveTimer}> Speichern </Button>
    </div>
  );
}