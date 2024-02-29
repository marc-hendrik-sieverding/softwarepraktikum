export function Zeitformat(secondsValue) {
    if (secondsValue >= 3600) {
      const hourValue = Math.floor(secondsValue / 3600);
      const remainingSeconds = secondsValue % 3600;
      const minuteValue = Math.floor(remainingSeconds / 60);
      const secondValue = remainingSeconds % 60;
        return `${hourValue} Std, ${minuteValue} min, ${secondValue} Sek`;
    } 
    
    else if (secondsValue >= 60) {     
      const minuteValue = Math.floor(secondsValue / 60);
      const secondValue = secondsValue % 60;
        return (`${minuteValue} min, ${secondValue} Sek`);
    } 
    
    else {
      return `${secondsValue} Sekunde(n)`;
    }
  }