import React from 'react';
import './App.css';
import NachAnmeldung from '../Routen/NachAnmeldung';
import Anmeldung from '../Routen/Anmeldung';
import Daten from '../Routen/Daten'
import Zeit_erfasst from '../Routen/Zeit_erfasst'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './styles.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Anmeldung />} />
        <Route path="/NachAnmeldung" element={<NachAnmeldung  />} />
        <Route path="/Daten" element={<Daten  />} />
        <Route path="/Zeit_erfasst" element={<Zeit_erfasst />}/ >
      </Routes>
    </BrowserRouter>
  );
}

export default App
