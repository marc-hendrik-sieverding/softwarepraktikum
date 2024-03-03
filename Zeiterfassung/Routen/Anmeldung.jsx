import { TextField} from '@react-ui-org/react-ui';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Anmeldung() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [Benutzername, setBenutzername] = useState('');
    const [Passwort, setPasswort] = useState('');
  
    const Einloggen = () => {
      const storedBenutzer = sessionStorage.getItem('user');
      const user = storedBenutzer ? JSON.parse(storedBenutzer) : null;
      if (user && user.Benutzername === Benutzername && user.Passwort === Passwort) {
          setIsLoggedIn(true);
        } 
        else {
          alert('Falscher Benutzername oder Passwort');
      }
    }

    const Ausloggen = () => {
      setIsLoggedIn(false);
    }

  return (
    <>
      {!isLoggedIn && (
          <div className="wrapper">
            <h1>Login</h1>
              <TextField class="Benutzername" placeholder="Benutzername" onChange={(event) => setBenutzername(event.target.value)} size="normal"/>
              <TextField class="Passwort" placeholder="Passwort" variant="filled" onChange={(event) => setPasswort(event.target.value)} minLength={8} type="password" size="normal"/>
              <Button class = "Login" variant="contained" onClick={Einloggen}> Login </Button>
              <Link to ="/Registrierung">
                <Button class = "LogRegistrierung" variant="contained"> Registrierung </Button> 
              </Link>
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