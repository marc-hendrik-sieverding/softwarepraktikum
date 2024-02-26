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
  const Addiere1h = () => {
    setSeconds(prevSeconds => prevSeconds + 3600);
  }
  
  const Subtrahiere1h = () => {
    setSeconds(prevSeconds => prevSeconds - 3600);
  }

  const resetTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(0);
  };

return {
    seconds,
    startTimer,
    resetTimer,
    Addiere1h,
    Subtrahiere1h
  };
}