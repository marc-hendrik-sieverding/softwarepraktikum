import { TextField} from '@react-ui-org/react-ui';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import App from '../src/App';


function Anmeldung() {

  const [Benutzername, setBenutzername] = useState('');
  const [Passwort, setPasswort] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const Einloggen = () => {
    if (Benutzername === 'Marc' && Passwort === 'Passwort1234') {
      setIsLoggedIn(true);
    } else {
      alert('Falscher Benutzername oder Passwort');
   }
  };


return (
  <>
    {!isLoggedIn && (
        <div className="wrapper">
          <h1>Login</h1>
            <TextField className="Benutzername" placeholder="Benutzername" onChange={(event) => setBenutzername(event.target.value)} required/>
            <TextField className="Passwort" placeholder="Passwort" variant="filled" onChange={(event) => setPasswort(event.target.value)} required minLength={8}/>
            <Button variant="contained" onClick={Einloggen}> Login </Button>
            <Button variant="contained" href="/Daten/"> Daten </Button>
        </div>
      )}
    {isLoggedIn && <p>Willkommen, {Benutzername}! </p>}
  </>
);
}


export default Anmeldung;