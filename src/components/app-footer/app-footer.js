import React from "react";
import PropTypes from "prop-types";
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

AppFooter.defaultProps = {
  itemsLeft: 0,
  onClearCompleted: () => {}
};

AppFooter.propTypes = {
  itemsLeft: PropTypes.number,
  onClearCompleted: PropTypes.func
};

export default AppFooter;