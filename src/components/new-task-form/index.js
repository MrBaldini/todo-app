import React, { useState } from 'react';

import './newTaskForm.css';

function NewTaskForm({ onAddedTask }) {
  const [label, setLabel] = useState('');
  const [timerMin, setTimerMin] = useState('');
  const [timerSec, setTimerSec] = useState('');

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onTimerMinChange = (e) => {
    setTimerMin(+e.target.value);
  };

  const onTimerSecChange = (e) => {
    setTimerSec(+e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (label !== '' && timerMin !== '' && timerSec !== '') {
      onAddedTask(label, timerMin, timerSec);
      setLabel('');
      setTimerMin('');
      setTimerSec('');
    }
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <button type="submit" aria-label="Submit new task" />
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={onLabelChange}
        value={label}
        required
      />
      <input
        className="new-todo-form__timer"
        type="number"
        placeholder="Min"
        onChange={onTimerMinChange}
        value={timerMin}
        required
      />
      <input
        className="new-todo-form__timer"
        type="number"
        min="0"
        max="59"
        placeholder="Sec"
        onChange={onTimerSecChange}
        value={timerSec}
        required
      />
    </form>
  );
}

export default NewTaskForm;
