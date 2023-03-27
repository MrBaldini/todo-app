import React from "react";

import TaskList from "../task-list";
import AppFooter from "../app-footer";

import "./app-main.css";

const AppMain = ({ todos, 
                   onToggleDone,
                   updateTaskDate,
                   updateInterval,
                   onEdit, onSubmitChanges,
                   onDeleted,
                   itemsLeft,
                   onSelectedAllFilter,
                   onSelectedActiveFilter,
                   onSelectedCompletedFilter,
                   onClearCompleted, }) => {
  return (
    <div className="main">
      <TaskList todos={ todos }
                onToggleDone={ onToggleDone }
                updateTaskDate={ updateTaskDate }
                updateInterval={ updateInterval }
                onEdit={ onEdit }
                onSubmitChanges={ onSubmitChanges }
                onDeleted={ onDeleted } />
      <AppFooter itemsLeft={ itemsLeft }
                onSelectedAllFilter={ onSelectedAllFilter }
                onSelectedActiveFilter={ onSelectedActiveFilter }
                onSelectedCompletedFilter={ onSelectedCompletedFilter }
                onClearCompleted={ onClearCompleted } />
    </div>
  );
};

export default AppMain;