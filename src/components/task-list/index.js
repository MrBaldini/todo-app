import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task';
import './task-list.css';

function TaskList({ todos, onToggleDone, updateTaskDate, updateInterval, onEdit, onSubmitChanges, onDeleted }) {
  const elements = todos.map((item) => {
    const { id } = item;
    return (
      <li key={id}>
        <Task
          item={item}
          id={id}
          onToggleDone={() => onToggleDone(id)}
          updateTaskDate={updateTaskDate}
          updateInterval={updateInterval}
          onEdit={() => onEdit(id)}
          onSubmitChanges={onSubmitChanges}
          onDeleted={() => onDeleted(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}

TaskList.defaultProps = {
  todos: [],
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
};

export default TaskList;
