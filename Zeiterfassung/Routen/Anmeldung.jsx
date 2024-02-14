import { TextField} from '@react-ui-org/react-ui';
import * as React from 'react';
import Button from '@mui/material/Button';


function Anmeldung() {
    return(
        <>
    <div className="wrapper">
      <h1>Login</h1>
    </div>
    <TextField placeholder = "Benutzername" onChange={() => {}} required/>
    <TextField placeholder = "Passwort" variant= "filled" required minLength={8} />
    <Button variant="contained" href="/NachAnmeldung">Login</Button>
    </>
)}

export default Anmeldung;