import { useState } from 'react';

export default function Seconds(secondsValue) {
    const [intervalId, setIntervalId] = useState(null);
    const [seconds, setSeconds] = useState(secondsValue || 0);

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