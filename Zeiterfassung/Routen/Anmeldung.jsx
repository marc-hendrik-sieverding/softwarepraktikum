import { TextField} from '@react-ui-org/react-ui';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Registrierung from './Registrierung';

function Anmeldung() {

    const [Benutzername, setBenutzername] = useState('');
    const [Passwort, setPasswort] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [registrierteUser, setRegistrierteUser] = useState([]);

    const handleRegistrierung = (Benutzername, Passwort) => {
      const neuerBenutzer = { Benutzername: Benutzername, Passwort: Passwort };
      setRegistrierteUser([...registrierteUser, neuerBenutzer]);
  };

    const Einloggen = () => {
      if (Benutzername === 'Marc' && Passwort === 'Passwort1234') {
        setIsLoggedIn(true);} 
          else {
        alert('Falscher Benutzername oder Passwort');
      }
  };
    const Ausloggen = () => {
      setIsLoggedIn(false);
    }


  return (
    <>
      {!isLoggedIn && (
          <div className="wrapper">
            <h1>Login</h1>
              <TextField class="Benutzername" placeholder="Benutzername" onChange={(event) => setBenutzername(event.target.value)} required size="normal"/>
              <TextField class="Passwort" placeholder="Passwort" variant="filled" onChange={(event) => setPasswort(event.target.value)} required minLength={8} type="password" size="normal"/>
              <Button class = "Login" variant="contained" onClick={Einloggen}> Login </Button>
              <Button class = "Login" variant="contained" href="Registrierung"> Login </Button>
          </div>
        )}
      {isLoggedIn && <> <p class="Willkommen">Willkommen, {Benutzername}! </p> 
      <Button variant="contained" href="/NachAnmeldung"> Zeit erfassen </Button>
      <Button class="Daten" variant="contained" href="/Daten/"> Daten </Button>
      <Button class="logout" variant="contained" href="/" onClick = {Ausloggen} >Logout</Button>
       </>}
    </>
  );
}

export default Anmeldung;