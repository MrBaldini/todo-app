import React, { useState, useEffect } from 'react';
import './timer.css';

const STATUS = {
  STARTED: false,
};

function Timer({ timerMin = 0, timerSec = 0 }) {
  const [minutes, setMinutes] = useState(timerMin);
  const [seconds, setSeconds] = useState(timerSec);
  const [status, setStatus] = useState(STATUS.STARTED);
  let interval;

  useEffect(() => {
    if (status) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  });

  const handleStart = () => {
    setStatus(true);
  };

  const handlePause = () => {
    setStatus(false);
  };

  return (
    <span>
      {minutes === 0 && seconds === 0 ? null : (
        <div>
          <button className="icon icon-play" type="button" aria-label="Start timer" onClick={handleStart} />
          <button className="icon icon-pause" type="button" aria-label="Pause timer" onClick={handlePause} />
          <span className="timer">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>
      )}
    </span>
  );
}

export default Timer;
