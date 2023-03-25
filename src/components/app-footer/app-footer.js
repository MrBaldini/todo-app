import React from "react";

import TasksFilter from "../tasks-filters";

import "./app-footer.css";

const AppFooter = ({ itemsLeft, 
                     onClearCompleted,
                     onSelectedCompletedFilter,
                     onSelectedActiveFilter,
                     onSelectedAllFilter }) => {
  return (
    <div className="footer">
      <span className="todo-count">{ itemsLeft } items left</span>
      <TasksFilter onSelectedCompletedFilter={ onSelectedCompletedFilter }
                   onSelectedActiveFilter={ onSelectedActiveFilter }
                   onSelectedAllFilter={ onSelectedAllFilter } />
      <button className="clear-completed"
              onClick={ onClearCompleted }>Clear completed</button>
    </div>
  );
};

export default AppFooter;