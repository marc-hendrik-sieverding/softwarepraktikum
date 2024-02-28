import React, { useState } from 'react';
import { TextField } from '@react-ui-org/react-ui';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Registrierung({ handleRegistrierung }) {
    const [Benutzername, setBenutzername] = useState('');
    const [Passwort, setPasswort] = useState('');

    const handleRegister = () => {
        handleRegistrierung(Benutzername, Passwort);
        setBenutzername('');
        setPasswort('');
    };
    return (
        <>
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

