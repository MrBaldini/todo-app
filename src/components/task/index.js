import React, { useState, useEffect } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

import Timer from '../timer';
import './task.css';

function Task({ onToggleDone, id, onDeleted, onEdit, item, onSubmitChanges, updateTaskDate, updateInterval }) {
  const { label, timerMin, timerSec, date, done, edit, hide } = item;
  const [changedLabel, setChangedLabel] = useState('');

  useEffect(() => {
    const refreshTaskDate = setInterval(updateTaskDate, updateInterval);
    return () => clearInterval(refreshTaskDate);
  }, []);

  const onLabelChange = (e) => {
    setChangedLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitChanges(changedLabel, id);
  };

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
      <form onSubmit={onSubmit}>
        <input type="text" className="edit" defaultValue={label} onChange={onLabelChange} />
      </form>
    </div>
  );
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

export default Task;
