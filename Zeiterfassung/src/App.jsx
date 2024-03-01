import React from 'react';
import './App.css';
import NachAnmeldung from '../Routen/NachAnmeldung';
import Anmeldung from '../Routen/Anmeldung';
import Daten from '../Routen/Daten'
import Zeit_erfasst from '../Routen/Zeit_erfasst'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './styles.css';
import Registrierung from '../Routen/Registrierung';
import { useState } from 'react';

function App() { 
  const [registrierteUser, setRegistrierteUser] = useState([]);

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Anmeldung registrierteUser={registrierteUser} />} />
        <Route path="/NachAnmeldung" element={<NachAnmeldung/>} />
        <Route path="/Daten/:taetigkeiten/:seconds/:art/:value" element={<Daten/>} />
        <Route path="/Zeit_erfasst/:seconds" element={<Zeit_erfasst/>} />
        <Route path="/Registrierung" element={<Registrierung setRegistrierteUser={setRegistrierteUser} registrierteUser={registrierteUser} />} />
      </Routes>
    </BrowserRouter> //Referenz: https://reactrouter.com/en/main/router-components/browser-router
  );
}

export default App
