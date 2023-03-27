import React, { Component } from 'react';
import PropTypes from "prop-types";

import "./tasks-filter.css";

export default class TasksFilter extends Component {

  static defaultProps = {
    onSelectedAllFilter: () => {},
    onSelectedActiveFilter: () => {},
    onSelectedCompletedFilter: () => {}
  };

  static propTypes = {
    onSelectedAllFilter: PropTypes.func,
    onSelectedActiveFilter: PropTypes.func,
    onSelectedCompletedFilter: PropTypes.func 
  };

  state = {
    classNameOfAll: "",
    classNameOfActive: "",
    classNameOfCompleted: "",
  };

  onSelectedAll = () => {
    this.props.onSelectedAllFilter();

    this.setState({
      classNameOfAll: "selected",
      classNameOfActive: "",
      classNameOfCompleted: ""
    });
  };

  onSelectedActive = () => {
    this.props.onSelectedActiveFilter();

    this.setState({
      classNameOfAll: "",
      classNameOfActive: "selected",
      classNameOfCompleted: ""
    });
  };

  onSelectedCompleted = () => {
    this.props.onSelectedCompletedFilter();
    
    this.setState({
      classNameOfAll: "",
      classNameOfActive: "",
      classNameOfCompleted: "selected"
    });
  };
  
  render() {

    return (
      <ul className="filters">
        <li>
          <button className={ this.state.classNameOfAll }
                  onClick={ this.onSelectedAll }>All</button>
        </li>
        <li>
          <button className={ this.state.classNameOfActive } 
                  onClick={ this.onSelectedActive }>Active</button>
        </li>
        <li>
          <button className={ this.state.classNameOfCompleted } 
                  onClick={ this.onSelectedCompleted }>Completed</button>
        </li>
      </ul>
    );
  };
};