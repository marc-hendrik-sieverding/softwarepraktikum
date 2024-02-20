import { TextField} from '@react-ui-org/react-ui';
import * as React from 'react';
import Button from '@mui/material/Button';
import App from '../src/App.jsx'


function Anmeldung() {
    return(
        <>
    <div className="wrapper">
      <h1>Login</h1>
    </div>
    <TextField className = "Benutzername" placeholder = "Benutzername" onChange={() => {}} required/>
    <TextField className = "Passwort" placeholder = "Passwort" variant= "filled" required minLength={8} />
    <Button variant="contained" href="/NachAnmeldung/">Login</Button>
    <Button variant="contained" href="/Daten/">Daten</Button>
    </>
)}

export default Anmeldung;