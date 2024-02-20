import React, { useState} from 'react';
import './App.css';
import NachAnmeldung from '../Routen/NachAnmeldung';
import Anmeldung from '../Routen/Anmeldung';
import Daten from '../Routen/Daten'
import Erfassen from '../Routen/Erfassen'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Anmeldung />} />
        <Route path="/NachAnmeldung" element={<NachAnmeldung />} />
        <Route path="/Daten" element={<Daten />} />
        <Route path="/Erfassen" element={<Erfassen />}/ >
      </Routes>
    </BrowserRouter>
  );
}

export default App
