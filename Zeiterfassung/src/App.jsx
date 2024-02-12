import { TextField } from '@react-ui-org/react-ui';
import React from 'react';
import './App.css';
import NachAnmeldung from '../Routen/NachAnmeldung';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <>
    <div className="wrapper">
      <h1>Login</h1>
    </div>
    <BrowserRouter>
        <Switch>
          <Route path="/home">
            <NachAnmeldung />
          </Route>
        </Switch>
    </BrowserRouter>
     <TextField  placeholder = "Benutzername" onChange={() => {}}  required/>
     <TextField minLength={8} placeholder = "Passwort" variant= "filled" required/>
    </>
  )
}

export default App
