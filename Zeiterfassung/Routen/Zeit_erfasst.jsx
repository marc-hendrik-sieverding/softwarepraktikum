import { useState } from 'react';
import dayjs from 'dayjs';
import Seconds from './Seconds';
import { useParams, useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Zeitformat } from './Zeitformat'

export default function Zeit_erfasst() {
  const navigate = useNavigate();
  const { seconds } = useParams();
  const secondsValue = seconds.split('=')[1];
  const [value, setValue] = useState(dayjs('2024-02-18'));
  const [art, setArt] = useState('Sonstiges');
  const [taetigkeiten, setTaetigkeiten] = useState('');
  const [displayValue, setDisplayValue] = useState(parseInt(secondsValue));

  const handleTextFieldChange = (event) => {
    setTaetigkeiten(event.target.value);
  };

  const handleChange = (event) => {
   setArt(event.target.value);
  };

  const handleSave = () => {
    if (taetigkeiten.trim() === '') {
      alert('Bitte füllen Sie das Feld "Tätigkeiten" aus.');
    } else {
      navigate(`/Daten/${taetigkeiten}/${displayValue}/${art}/${value}`);
    }
  };

  const handleZeitChange = (event) => {
    setDisplayValue(Zeitformat(event.target.value))
  }

  const Addiere1h = () => {
    setDisplayValue(displayValue + 3600);
  };

  const Subtrahiere1h = () => {
    if (displayValue >= 3600) {
      setDisplayValue(displayValue - 3600);
    }
    else {
      alert("Nope.")
    }
  };

  return (
    <>

  <TextField class="ZeitZeit" label="Zeit" placeholder="0 Sekunden" value={Zeitformat(displayValue)} onChange={handleZeitChange}/>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
        label="Datum"
        value={value}
        onChange={(newValue) => setValue(newValue.format('YYYY-MM-DD'))}/>
  </LocalizationProvider>
  <TextField class="ZeitTätigkeiten" placeholder="Tätigkeiten" required minLength={8} 
  value={taetigkeiten} onChange={handleTextFieldChange} />
  <InputLabel>Art</InputLabel>
  <Select
        class="ZeitArt"
        value={art}
        label="Art"
        onChange={handleChange}>
        <MenuItem value={"Freizeit"}>Freizeit</MenuItem>
        <MenuItem value={"Arbeit"}>Arbeit</MenuItem>
        <MenuItem value={"Sonstiges"}>Sonstiges</MenuItem>
      </Select>
    <Button class = "Addiere1h" variant="contained" onClick={Addiere1h} > +1h </Button>
    <Button class = "Subtrahiere1h" variant="contained" onClick={Subtrahiere1h} > -1h </Button>
    <Button class = "ZeitSpeichern" variant="contained" onClick={handleSave}>Speichern</Button>
  </>
);
}