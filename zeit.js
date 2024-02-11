import React, { useState } from 'react';

function TextField() {

  const [textValue, setTextValue] = useState('');

  const Eingabe = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={textValue}
        onChange={Eingabe}
        placeholder="Benutzername"
      />
      <p>Du hast eingegeben: {textValue}</p>
    </div>
  );
}
export default TextField;