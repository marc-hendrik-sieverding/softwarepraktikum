import { TextField, Button } from '@react-ui-org/react-ui';


function Anmeldung() {
    return(
        <>
    <div className="wrapper">
      <h1>Login</h1>
    </div>
    <TextField placeholder = "Benutzername" onChange={() => {}} required/>
    <TextField placeholder = "Passwort" variant= "filled" required minLength={8} />
    <Button>Anmeldung</Button>
    </>
)}

export default Anmeldung;