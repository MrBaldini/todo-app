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
  const url =
    'https://audio-previews.elements.envatousercontent.com/files/188106830/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22LJCSRVX-positive-alert.mp3%22';
  const audio = new Audio(url);

  useEffect(() => {
    if (status) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            audio.play();
            clearInterval(interval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [minutes, seconds, status]);

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
