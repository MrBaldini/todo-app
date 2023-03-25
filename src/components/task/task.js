import React, { Component } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./task.css";

export default class Task extends Component {

  state = {
    label: ""
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
    const { label, onDeleted, 
            onToggleDone, done,
            onEdit, edit, hide } = this.props;
    const date = formatDistanceToNow(new Date(), {
      addSuffix: true,
    });

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
              created { date }
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