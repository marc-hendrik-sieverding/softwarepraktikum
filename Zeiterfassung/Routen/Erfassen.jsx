import React from 'react';
import { TextField, Button } from '@mui/material';

export default function Erfassen({ seconds }) {
  return (
    <div>
      <TextField placeholder="Sekunden" value={seconds} readOnly />
      <Button variant="contained" href="/NachAnmeldung/">Weitere Zeit</Button>
      <Button variant="contained" href="/Daten">Daten</Button>
    </div>
  );
}
