import React, { Component } from "react";

import AppHeader from "../app-header";
import AppMain from "../app-main";

import "./app.css"

export default class App extends Component {

  maxId = 1;
  updateInterval = 60000;

  state = {
    todoData: []
  };

  createTask(label) {
    return {
      label,
      date: new Date(),
      done: false,
      edit: false,
      hide: false,
      id: this.maxId++
    };
  };

  updateTaskDate = () => {
    this.setState(({ todoData }) => {
      const newArr = [];
      todoData.forEach((el) => newArr.push(el));
      return {
        todoData: newArr 
      };
    });
  };
  
  toggleProperty = (arr, id, propertyName, label = null) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];

    if (label === null) label = oldItem.label;
    const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName], label };

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  };

  toggleHideDefault = (arr, defaultArr = []) => {
    
    arr.forEach((el) => {
      let newItem = { ...el, hide: false };
      defaultArr.push(newItem);      
    });

    return defaultArr;
  };

  toggleHideOnActive = (arr, propName) => {
    const defaultArr = [];
    const newArr = [];

    this.toggleHideDefault(arr, defaultArr);

    defaultArr.forEach((el) => {
      let newItem = {};
      if (!el.done) {
        newItem = { ...el, [propName]: true };
        newArr.push(newItem);
      } else {
        newItem = el;
        newArr.push(el);
      }
    });

    return newArr;
  };

  toggleHideOnCompleted = (arr, propName) => {
    const defaultArr = [];
    const newArr = [];

    this.toggleHideDefault(arr, defaultArr);

    defaultArr.forEach((el) => {
      let newItem = {};
      if (el.done) {
        newItem = { ...el, [propName]: true };
        newArr.push(newItem);
      } else {
        newItem = el;
        newArr.push(el);
      }
    });

    return newArr;
  };

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const newArr = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newArr
      };
    });
  };

  addTask = (text) => {
    const newItem = this.createTask(text);

    this.setState(({ todoData }) => {

      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onEditTask = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'edit')
      };
    });
  };

  onSubmitChanges = (label, id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'edit', label)
      };
    });
  };

  onClearCompleted = () => {
    const newArr = [];

    this.state.todoData.forEach((el) => el.done ? newArr.push(el.id) : el);
    
    newArr.forEach((el) => this.deleteTask(el));
  };

  onSelectedAllFilter = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleHideDefault(todoData)
      };
    });
  };

  onSelectedActiveFilter = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleHideOnCompleted(todoData, "hide")
      }
    });
  };

  onSelectedCompletedFilter = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleHideOnActive(todoData, "hide")
      }
    });
  };

  render() {

    const { todoData } = this.state;
    const itemsLeft = todoData.filter((el) => !el.done).length;

    return (
      <div className="todoapp">
        <AppHeader onAddedTask={ this.addTask }
                 onSubmitChanges={ this.onSubmitChanges } />
        <AppMain todos={ todoData }
                 onToggleDone={ this.onToggleDone }
                 updateTaskDate={ this.updateTaskDate }
                 updateInterval={ this.updateInterval }
                 onEdit={ this.onEditTask }
                 onSubmitChanges={ this.onSubmitChanges }
                 onDeleted={ this.deleteTask }
                 itemsLeft={ itemsLeft }
                 onSelectedAllFilter={ this.onSelectedAllFilter }
                 onSelectedActiveFilter={ this.onSelectedActiveFilter }
                 onSelectedCompletedFilter={ this.onSelectedCompletedFilter }
                 onClearCompleted={ this.onClearCompleted } />
      </div>
    );
  };
};