import { useState } from 'react';
import Zeit_erfasst from './Zeit_erfasst';

export default function Seconds() {
    const [intervalId, setIntervalId] = useState(null);
    const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if (intervalId === null) {
      const id = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(0);
  };
  const saveTimer = () => {
    return <Zeit_erfasst seconds={seconds}></Zeit_erfasst>
  };


return {
    seconds,
    startTimer,
    resetTimer,
    saveTimer
  };
}