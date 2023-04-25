import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './tasks-filter.css';

export default class TasksFilter extends Component {
  constructor() {
    super();
    this.state = {
      classNameOfAll: '',
      classNameOfActive: '',
      classNameOfCompleted: '',
    };
  }

  onSelectedAll = () => {
    const { onSelectedAllFilter } = this.props;
    onSelectedAllFilter();
    this.setState({
      classNameOfAll: 'selected',
      classNameOfActive: '',
      classNameOfCompleted: '',
    });
  };

  onSelectedActive = () => {
    const { onSelectedActiveFilter } = this.props;
    onSelectedActiveFilter();
    this.setState({
      classNameOfAll: '',
      classNameOfActive: 'selected',
      classNameOfCompleted: '',
    });
  };

  onSelectedCompleted = () => {
    const { onSelectedCompletedFilter } = this.props;
    onSelectedCompletedFilter();
    this.setState({
      classNameOfAll: '',
      classNameOfActive: '',
      classNameOfCompleted: 'selected',
    });
  };

  render() {
    const { classNameOfAll, classNameOfActive, classNameOfCompleted } = this.state;
    return (
      <ul className="filters">
        <li>
          <button type="button" className={classNameOfAll} onClick={this.onSelectedAll}>
            All
          </button>
        </li>
        <li>
          <button type="button" className={classNameOfActive} onClick={this.onSelectedActive}>
            Active
          </button>
        </li>
        <li>
          <button type="button" className={classNameOfCompleted} onClick={this.onSelectedCompleted}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
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
