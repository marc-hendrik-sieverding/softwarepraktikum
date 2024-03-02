import React from 'react';
import { Button } from '@mui/material';
import Seconds from './Seconds';
import { Link } from 'react-router-dom';
import { Zeitformat } from './Zeitformat';

export default function NachAnmeldung() {
  const { seconds, startTimer, resetTimer} = Seconds();

  return (
    <div>
      <h2>Zeit: {Zeitformat(seconds)}</h2>
      <Button variant="contained" onClick={startTimer}> Start </Button>
      <Button variant="contained" onClick={resetTimer}> Reset </Button>
      <Link to={`/Zeit_erfasst/seconds=${seconds}`}>
        <Button variant='contained'>Speichern</Button>
      </Link>
    </div>
  );
}