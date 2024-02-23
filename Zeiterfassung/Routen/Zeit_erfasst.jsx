import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function DatePick(seconds) {
    const [value, setValue] = React.useState(dayjs('2024-02-18'));
    const [art, setArt] = React.useState('');
    const handleChange = (event) => {
     setArt(event.target.value);
    };
    return (
      <>
    <TextField placeholder="Sekunden" InputProps={{ readOnly: true}} value = { seconds.seconds }/>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
          label="Datum"
          value={value}
          onChange={(newValue) => setValue(newValue)}/>
    </LocalizationProvider>
    <TextField placeholder = "Tätigkeiten" variant= "filled" required minLength={8} />
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
      <Button class="Speichern" variant="contained" href="/Daten"> Speichern </Button>
    </>
  );
}