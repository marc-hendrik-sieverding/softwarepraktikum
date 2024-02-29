import { useState, useEffect } from 'react';
import { TextField } from '@react-ui-org/react-ui';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Registrierung() {
    const [Benutzername, setBenutzername] = useState('');
    const [Passwort, setPasswort] = useState('');
    const [registrierteUser, setRegistrierteUser] = useState([]);
    const [error, setError] = useState(false);

    const handleRegistrierung = (Benutzername, Passwort) => {
        const neuerBenutzer = { Benutzername: Benutzername, Passwort: Passwort };
        setRegistrierteUser([...registrierteUser, neuerBenutzer]);
    };

    const handleRegister = () => {
        if(Benutzername.trim() === '' || Passwort.trim() === '') {
            setError(true)
        }
       else { handleRegistrierung(Benutzername, Passwort);
        setBenutzername('');
        setPasswort(''); }
    };
    console.log(error)
    console.log(Benutzername, Passwort)

    return (
        <>
        {error && <h1>Bitte fülle alle Felder aus</h1>}
            <h2>Registrierung</h2>
            <TextField placeholder="Benutzername" value={Benutzername} onChange={(event) => setBenutzername(event.target.value)} />
            <TextField placeholder="Passwort" variant="filled" value={Passwort} onChange={(event) => setPasswort(event.target.value)} type="password"/>
            <Link to="/">
            <Button className="Registrieren" variant="contained" onClick={handleRegister} > Registrieren </Button>
            </Link>
        </>
    );
}

export default Registrierung;

