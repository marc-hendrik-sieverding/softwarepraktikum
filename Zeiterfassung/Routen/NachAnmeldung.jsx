import React, { useState } from 'react';
import Button from '@mui/material/Button';

export default function NachAnmeldung() {
  const [intervalId, setIntervalId] = useState(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if (intervalId === null) {
      const id = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Zeit: {seconds} Sekunden</h2>
      <Button variant="contained" onClick={startTimer}> Start </Button>
      <Button variant="contained" onClick={resetTimer}> Reset </Button>
      <Button variant="contained" href="/Erfassen" > Speichern </Button>
      <Button variant="contained" href="/">Home</Button>
    </div>
  );
}
