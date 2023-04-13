import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

import Timer from '../timer';
import './task.css';

export default class Task extends Component {
  constructor() {
    super();
    this.state = { label: '' };
  }

  componentDidMount() {
    const { updateInterval, updateTaskDate } = this.props;
    this.refreshTaskDate = setInterval(updateTaskDate, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.refreshTaskDate);
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { onSubmitChanges, id } = this.props;
    const { label } = this.state;
    onSubmitChanges(label, id);
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    const { onToggleDone, id, onDeleted, onEdit, item } = this.props;
    const { label, timerMin, timerSec, date, done, edit, hide } = item;

    let classNames;
    if (done) classNames = 'completed';
    if (edit) classNames = 'editing';
    if (hide) classNames = 'hidden';

    return (
      <div className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleDone} checked={done} />
          <label htmlFor={id}>
            <span className="title">{label}</span>
            <span className="description">
              <Timer timerMin={timerMin} timerSec={timerSec} />
            </span>
            <span className="description">
              created{' '}
              {formatDistanceToNow(date, {
                includeSeconds: true,
                addSuffix: true,
              })}
            </span>
          </label>
          <button className="icon icon-edit" type="button" aria-label="Edit" onClick={onEdit} />
          <button className="icon icon-destroy" type="button" aria-label="Delete" onClick={onDeleted} />
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="edit"
            defaultValue={label}
            onChange={this.onLabelChange}
            onClick={this.onLabelChange}
          />
        </form>
      </div>
    );
  }
}

Task.defaultProps = {
  updateInterval: 60000,
  updateTaskDate: () => {},
  onSubmitChanges: () => {},
  onToggleDone: () => {},
  onDeleted: () => {},
  onEdit: () => {},
};

Task.propTypes = {
  updateInterval: PropTypes.number,
  updateTaskDate: PropTypes.func,
  onSubmitChanges: PropTypes.func,
  onToggleDone: PropTypes.func,
  onDeleted: PropTypes.func,
  onEdit: PropTypes.func,
};
