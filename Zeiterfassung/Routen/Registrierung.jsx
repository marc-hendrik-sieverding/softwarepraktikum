import { useState, useEffect } from 'react';
import { TextField } from '@react-ui-org/react-ui';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Registrierung({}) {
    const [Benutzername, setBenutzername] = useState('');
    const [Passwort, setPasswort] = useState('');
    const [error, setError] = useState(false);
    const [registrierteUser, setRegistrierteUser] = useState('[]')

    console.log(Benutzername)
    console.log(Passwort)
    console.log(error)

    const handleRegister = () => {
        if(Benutzername.trim() === '' || Passwort.trim() === '') {
            setError(true)
            return;
        }
       else { 
        const neuerBenutzer = { Benutzername: Benutzername, Passwort: Passwort };
        setRegistrierteUser(prevUsers => [...prevUsers, neuerBenutzer]);
        setBenutzername('');
        setPasswort('');
        setError(false);
        sessionStorage.setItem('registrierteUser', JSON.stringify(neuerBenutzer));
    };
}
    const handleBenutzerChange = (event) => {
        setBenutzername(event.target.value);
    };

    const handlePasswortChange = (event) => {
        setPasswort(event.target.value);
    };

    return (
        <>
        {error && <h1>Bitte fülle alle Felder aus</h1>}
            <h2 class="RegText">Registrierung</h2>
            <TextField class="RegBenutzername" placeholder="Benutzername" value={Benutzername} onChange={handleBenutzerChange} />
            <TextField class="RegPasswort" placeholder="Passwort" variant="filled" value={Passwort} onChange={handlePasswortChange} type="password"/>
            <Link to="/">
            <Button class="RegButton" variant="contained" onClick={handleRegister} > Registrieren </Button>
            </Link>
        </>
    );
}

export default Registrierung;

