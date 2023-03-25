import React from "react";

import NewTaskForm from "../new-task-form";
import "./app-header.css";

const AppHeader = ({ onAddedTask, onSubmitChanges }) => {
  return (
    <div className="header"> 
      <h1>Todos</h1>
      <NewTaskForm onSubmitChanges={ onSubmitChanges }
                   onAddedTask={ onAddedTask } />
    </div>
  );
};

export default AppHeader;