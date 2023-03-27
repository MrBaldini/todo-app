import React, { Component } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import PropTypes from "prop-types";

import "./task.css";

export default class Task extends Component {

  state = {
    label: ""
  };

  static defaultProps = {
    updateInterval: 60000,
    updateTaskDate: () => {},
    onSubmitChanges: () => {},
    onToggleDone: () => {},
    onDeleted: () => {},
    onEdit: () => {}
  };

  static propTypes = {
    updateInterval: PropTypes.number,
    updateTaskDate: PropTypes.func,
    onSubmitChanges: PropTypes.func,
    onToggleDone: PropTypes.func,
    onDeleted: PropTypes.func,
    onEdit: PropTypes.func
  };

  componentDidMount() {
    const { updateInterval, updateTaskDate } = this.props;
    this.refreshTaskDate = setInterval(updateTaskDate, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.refreshTaskDate);
  };

  onLabelChange = (e) => {
    this.setState({ 
      label: e.target.value 
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { onSubmitChanges, id } = this.props;
    onSubmitChanges(this.state.label, id);

    this.setState({
      label: e.target.value 
    });
  };

  render() {
    const { label, date,
            onToggleDone, done,
            onDeleted,
            onEdit, edit,
            hide } = this.props;

    let classNames;
    if (done) classNames = "completed";
    if (edit) classNames = "editing";
    if (hide) classNames = "hidden";
  
    return (
      <div className={ classNames }>
        <div className="view">
          <input className="toggle" 
                  type="checkbox"
                  onChange={ onToggleDone }
                  checked={ done }></input>
          <label>
            <span className="description"
                  onClick={ onToggleDone }>
              { label }
            </span>
            <span className="created">
              created { formatDistanceToNow(date, {
                includeSeconds: true,
                addSuffix: true,
              }) }
            </span>
          </label>
          <button className="icon icon-edit"
                  onClick={ onEdit }></button>
          <button className="icon icon-destroy"
                  onClick={ onDeleted }></button>
        </div>
        <form onSubmit={ this.onSubmit }>
          <input type="text" 
                  className="edit" 
                  defaultValue={ label }
                  onChange={ this.onLabelChange }
                  onClick={ this.onLabelChange }></input>
        </form>
      </div>
    );
  };
};