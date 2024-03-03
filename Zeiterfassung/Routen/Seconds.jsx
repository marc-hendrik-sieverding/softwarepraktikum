import { useState } from 'react';

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

return {
    seconds,
    startTimer,
    resetTimer,
  };
}