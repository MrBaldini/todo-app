import React, { Component } from 'react';

import './newTaskForm.css';

export default class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
      timerMin: '',
      timerSec: '',
    };
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onTimerMinChange = (e) => {
    this.setState({
      timerMin: +e.target.value,
    });
  };

  onTimerSecChange = (e) => {
    this.setState({
      timerSec: +e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label, timerMin, timerSec } = this.state;
    if (label !== '' && timerMin !== '' && timerSec !== '') {
      const { onAddedTask } = this.props;
      onAddedTask(label, timerMin, timerSec);
      this.setState({
        label: '',
        timerMin: '',
        timerSec: '',
      });
    }
  };

  render() {
    const { label, timerMin, timerSec } = this.state;
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <button type="submit" aria-label="Submit new task" />
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={label}
          required
        />
        <input
          className="new-todo-form__timer"
          type="number"
          placeholder="Min"
          onChange={this.onTimerMinChange}
          value={timerMin}
          required
        />
        <input
          className="new-todo-form__timer"
          type="number"
          min="0"
          max="59"
          placeholder="Sec"
          onChange={this.onTimerSecChange}
          value={timerSec}
          required
        />
      </form>
    );
  }
}
