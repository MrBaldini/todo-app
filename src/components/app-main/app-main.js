import React from "react";

import TaskList from "../task-list";
import AppFooter from "../app-footer";

import "./app-main.css";

const AppMain = ({ todos, onDeleted, 
                   onToggleDone, onEdit, 
                   onSubmitChanges,
                   itemsLeft,
                   onClearCompleted,
                   onSelectedCompletedFilter,
                   onSelectedActiveFilter,
                   onSelectedAllFilter }) => {
  return (
    <div className="main">
      <TaskList todos={ todos }
                onDeleted={ onDeleted }
                onToggleDone={ onToggleDone }
                onEdit={ onEdit }
                onSubmitChanges={ onSubmitChanges } />
      <AppFooter itemsLeft={ itemsLeft }
                onClearCompleted={ onClearCompleted }
                onSelectedCompletedFilter={ onSelectedCompletedFilter }
                onSelectedActiveFilter={ onSelectedActiveFilter }
                onSelectedAllFilter={ onSelectedAllFilter } />
    </div>
  );
};

export default AppMain;