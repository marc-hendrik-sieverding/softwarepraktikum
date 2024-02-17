import React from 'react';
import './App.css';
import NachAnmeldung from '../Routen/NachAnmeldung';
import Anmeldung from '../Routen/Anmeldung';
import Daten from '../Routen/Daten'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
              <Route path ="/" element={<Anmeldung />} >
              <Route path ="/NachAnmeldung" element={<NachAnmeldung />}/>
              <Route path ="/Daten" element={<Daten />}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
