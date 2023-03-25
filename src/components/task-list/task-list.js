import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = ({ todos, onDeleted, 
                    onToggleDone, onEdit,
                    onSubmitChanges }) => {

  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <Task { ...itemProps }
              id={ id }
              onDeleted={ () => onDeleted(id) }
              onToggleDone={ () => onToggleDone(id) }
              onEdit={ () => onEdit(id) }
              onSubmitChanges={ onSubmitChanges } />
      </li>
    );
  });

  return (
    <ul className="todo-list">
      { elements }
    </ul>
  );
};

export default TaskList;