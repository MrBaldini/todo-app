import React, { useState, useEffect } from 'react';
import './timer.css';

const STATUS = {
  STARTED: true,
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
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
          clearInterval(interval);
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
      <div>
        <button className="icon icon-play" type="button" aria-label="Start timer" onClick={handleStart} />
        <button className="icon icon-pause" type="button" aria-label="Pause timer" onClick={handlePause} />
        <span className="timer">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
    </span>
  );
}

export default Timer;
