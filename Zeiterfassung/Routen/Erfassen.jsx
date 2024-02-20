import React from 'react';
import { TextField, Button } from '@mui/material';

export default function Erfassen({ seconds }) {
  return (
    <div>
      <TextField placeholder="Sekunden" value={seconds} readOnly />
    </div>
  );
}
