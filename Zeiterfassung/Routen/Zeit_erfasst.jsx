import * as React from 'react';
import dayjs from 'dayjs';
import Seconds from './Seconds';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Zeit_erfasst() {
  const { seconds, setSeconds } = Seconds();
  const [value, setValue] = React.useState(dayjs('2024-02-18'));
  const [art, setArt] = React.useState('');
  const handleChange = (event) => {
   setArt(event.target.value);
  };

  const Addiere1h = () => {
    setSeconds(prevSeconds => prevSeconds + 3600);
  }
  
  const Subtrahiere1h = () => {
    setSeconds(prevSeconds => prevSeconds - 3600);
  }

  return (
    <>
  <TextField placeholder="Sekunden" InputProps={{ readOnly: true}} value={seconds}/>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
        label="Datum"
        value={value}
        onChange={(newValue) => setValue(newValue)}/>
  </LocalizationProvider>
  <TextField placeholder="Tätigkeiten" variant="filled" required minLength={8} />
  <InputLabel>Art</InputLabel>
  <Select
        className="Art"
        value={art}
        label="Art"
        onChange={handleChange}>
        <MenuItem value={"Freizeit"}>Freizeit</MenuItem>
        <MenuItem value={"Arbeit"}>Arbeit</MenuItem>
        <MenuItem value={"Sonstiges"}>Sonstiges</MenuItem>
      </Select>
    <Button variant="contained" onClick={Addiere1h} > +1h </Button>
    <Button variant="contained" onClick={Subtrahiere1h} > -1h </Button>
    <Button class="Speichern" variant="contained" href="/Daten"> Speichern </Button>
  </>
);
}