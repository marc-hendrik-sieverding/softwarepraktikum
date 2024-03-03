// FilterDatum.js
import { useState, useEffect } from 'react';

export default function useFilterDatum(gespeicherteEingaben) {
  const [gefilterteDaten, setGefilterteDaten] = useState([]);
  const [aktuellesDatum, setAktuellesDatum] = useState(new Date());

  useEffect(() => {
    filternNachDatum();
  }, [aktuellesDatum, gespeicherteEingaben]);

  const filternNachDatum = () => {
    const gefiltert = gespeicherteEingaben.filter((eintrag) => {
      const eintragDatum = new Date(eintrag.Datum);
      return (
        eintragDatum.getDate() === aktuellesDatum.getDate() &&
        eintragDatum.getMonth() === aktuellesDatum.getMonth() &&
        eintragDatum.getFullYear() === aktuellesDatum.getFullYear()
      );
    });
    setGefilterteDaten(gefiltert);
  };

  const vorherigerTag = () => {
    const neuesDatum = new Date(aktuellesDatum);
    neuesDatum.setDate(neuesDatum.getDate() - 1);
    setAktuellesDatum(neuesDatum);
  };

  const naechsterTag = () => {
    const neuesDatum = new Date(aktuellesDatum);
    neuesDatum.setDate(neuesDatum.getDate() + 1);
    setAktuellesDatum(neuesDatum);
  };

  return {
    aktuellesDatum,
    gefilterteDaten,
    vorherigerTag,
    naechsterTag
  };
}
