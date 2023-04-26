import { useState } from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

function TasksFilter({ onSelectedAllFilter, onSelectedActiveFilter, onSelectedCompletedFilter }) {
  const [classNameOfAll, setClassNameOfAll] = useState(null);
  const [classNameOfActive, setClassNameOfActive] = useState(null);
  const [classNameOfCompleted, setClassNameOfCompleted] = useState(null);

  const onSelectedAll = () => {
    onSelectedAllFilter();
    setClassNameOfAll('selected');
    setClassNameOfActive(null);
    setClassNameOfCompleted(null);
  };

  const onSelectedActive = () => {
    onSelectedActiveFilter();
    setClassNameOfAll(null);
    setClassNameOfActive('selected');
    setClassNameOfCompleted(null);
  };

  const onSelectedCompleted = () => {
    onSelectedCompletedFilter();
    setClassNameOfAll(null);
    setClassNameOfActive(null);
    setClassNameOfCompleted('selected');
  };

  return (
    <ul className="filters">
      <li>
        <button type="button" className={classNameOfAll} onClick={onSelectedAll}>
          All
        </button>
      </li>
      <li>
        <button type="button" className={classNameOfActive} onClick={onSelectedActive}>
          Active
        </button>
      </li>
      <li>
        <button type="button" className={classNameOfCompleted} onClick={onSelectedCompleted}>
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.defaultProps = {
  onSelectedAllFilter: () => {},
  onSelectedActiveFilter: () => {},
  onSelectedCompletedFilter: () => {},
};

TasksFilter.propTypes = {
  onSelectedAllFilter: PropTypes.func,
  onSelectedActiveFilter: PropTypes.func,
  onSelectedCompletedFilter: PropTypes.func,
};

export default TasksFilter;
