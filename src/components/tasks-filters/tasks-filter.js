import React, { Component } from 'react';

import "./tasks-filter.css";

export default class TasksFilter extends Component {

  classNameAll = "";
  classNameOfActive = "";
  classNameOfCompleted = "";

  onSelectedAll = () => {
    this.props.onSelectedAllFilter();
    this.classNameOfAll = "selected";
    this.classNameOfActive = "";
    this.classNameOfCompleted = "";
  };

  onSelectedActive = () => {
    this.props.onSelectedActiveFilter();
    this.classNameOfAll = "";
    this.classNameOfActive = "selected";
    this.classNameOfCompleted = "";
  };

  onSelectedCompleted = () => {
    this.props.onSelectedCompletedFilter();
    this.classNameOfAll = "";
    this.classNameOfActive = "";
    this.classNameOfCompleted = "selected";
  };
  
  render() {

    return (
      <ul className="filters">
        <li>
          <button className={ this.classNameOfAll }
                  onClick={ this.onSelectedAll }>All</button>
        </li>
        <li>
          <button className={ this.classNameOfActive } 
                  onClick={ this.onSelectedActive }>Active</button>
        </li>
        <li>
          <button className={ this.classNameOfCompleted } 
                  onClick={ this.onSelectedCompleted }>Completed</button>
        </li>
      </ul>
    );
  };
};