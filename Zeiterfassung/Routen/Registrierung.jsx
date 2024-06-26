import { useState, useEffect } from 'react';
import { TextField } from '@react-ui-org/react-ui';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Registrierung() {
    const [Benutzername, setBenutzername] = useState('');
    const [Passwort, setPasswort] = useState('');
    const [error, setError] = useState(false);

    const handleRegister = () => {
        if(Benutzername === '' || Passwort === '') {
            setError(true)
            alert("Benutzername und Passwort dürfen nicht leer sein!")
        }
        else { 
            const userId = erstelleUserId();
            const neuerBenutzer = {userId: userId, Benutzername: Benutzername, Passwort: Passwort };
            const gespeicherteBenutzer = JSON.parse(localStorage.getItem('user') || '[]');
            const benutzerExistiert = gespeicherteBenutzer.some(user => user.Benutzername === Benutzername);

            if (benutzerExistiert) {
                setError(true);
                alert("Benutzername existiert bereits")
                return;
            }

            const updatedBenutzer = [...gespeicherteBenutzer, neuerBenutzer];
            setBenutzername('');
            setPasswort('');
            setError(false);
            localStorage.setItem('user', JSON.stringify(updatedBenutzer));
        };
}
    const handleBenutzerChange = (event) => {
        setBenutzername(event.target.value);
    };

    const handlePasswortChange = (event) => {
        setPasswort(event.target.value);
    };

    const erstelleUserId = () => {
        return uuidv4(); //https://www.npmjs.com/package/uuid
    }

    return (
        <>
        {error && <h1>Bitte fülle alle Felder aus</h1>}
            <h2 class="RegText">Registrierung</h2>
            <TextField class="RegBenutzername" placeholder="Benutzername" onChange={handleBenutzerChange} />
            <TextField class="RegPasswort" placeholder="Passwort" variant="filled" onChange={handlePasswortChange} type="password"/>
            <Link to="/">
            <Button class="RegButton" variant="contained" onClick={handleRegister} > Registrieren </Button>
            </Link>
        </>
    );
}

export default Registrierung;