import * as React from 'react';
import dayjs from 'dayjs';
import Seconds from './Seconds';
import { Link, useParams } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Zeit_erfasst() {
  const { seconds } = useParams();
  const secondsValue = seconds.split('=')[1];
  const {Addiere1h, Subtrahiere1h} = Seconds(secondsValue);
  const [value, setValue] = React.useState(dayjs('2024-02-18'));
  const [art, setArt] = React.useState('');
  const [taetigkeiten, setTaetigkeiten] = React.useState('');

  const handleTextFieldChange = (event) => {
    setTaetigkeiten(event.target.value);
  };

  const handleChange = (event) => {
   setArt(event.target.value);
  };

  return (
    <>
  <TextField placeholder="0 Sekunden" value={secondsValue}/>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
        label="Datum"
        value={value}
        onChange={(newValue) => setValue(newValue)}/>
  </LocalizationProvider>
  <TextField placeholder="Tätigkeiten" variant="filled" required minLength={8} value={taetigkeiten}
        onChange={handleTextFieldChange} />
  <InputLabel>Art</InputLabel>
  <Select
        class="Art"
        value={art}
        label="Art"
        onChange={handleChange}>
        <MenuItem value={"Freizeit"}>Freizeit</MenuItem>
        <MenuItem value={"Arbeit"}>Arbeit</MenuItem>
        <MenuItem value={"Sonstiges"}>Sonstiges</MenuItem>
      </Select>
    <Button variant="contained" onClick={Addiere1h} > +1h </Button>
    <Button variant="contained" onClick={Subtrahiere1h} > -1h </Button>
    <Link to={`/Daten/taetigkeiten=${taetigkeiten}&seconds=${seconds}&art=${art}`}>
        <Button class="Speichern" variant="contained">Speichern</Button>
      </Link>
  </>
);
}