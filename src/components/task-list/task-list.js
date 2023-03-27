import React from "react";
import Task from "../task";
import PropTypes from "prop-types";

import "./task-list.css";

const TaskList = ({ todos,
                    onToggleDone,
                    updateTaskDate,
                    updateInterval, 
                    onEdit, onSubmitChanges,
                    onDeleted }) => {

  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <Task { ...itemProps }
              id={ id }
              onToggleDone={ () => onToggleDone(id) }
              updateTaskDate={ updateTaskDate }
              updateInterval={ updateInterval }
              onEdit={ () => onEdit(id) }
              onSubmitChanges={ onSubmitChanges }
              onDeleted={ () => onDeleted(id) } />
      </li>
    );
  });

  return (
    <ul className="todo-list">
      { elements }
    </ul>
  );
};

TaskList.defaultProps = {
  todos: []
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object)
};

export default TaskList;