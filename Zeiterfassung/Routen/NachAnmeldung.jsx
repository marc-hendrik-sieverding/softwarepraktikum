import React from 'react';
import { Button } from '@mui/material';
import Seconds from './Seconds';
import { Link } from 'react-router-dom';

export default function NachAnmeldung() {
  const { seconds, startTimer, resetTimer} = Seconds();

  return (
    <div>
      <h2>Zeit: {seconds} Sekunden</h2>
      <Button variant="contained" onClick={startTimer}> Start </Button>
      <Button variant="contained" onClick={resetTimer}> Reset </Button>
      <Link to={`/Zeit_erfasst/seconds=${seconds}`}>
        <Button>Speichern</Button>
      </Link>
    </div>
  );
}