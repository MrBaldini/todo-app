import React, { useEffect, useState } from 'react';

import AppHeader from '../app-header';
import AppMain from '../app-main';
import './app.css';

function App() {
  const [todoData, setTodoData] = useState([]);
  const [maxId, setMaxId] = useState(1);

  const itemsLeft = todoData.filter((el) => !el.done).length;
  const updateInterval = 60000;

  useEffect(() => {
    setMaxId((id) => id + 1);
  }, [todoData]);

  const toggleHideDefault = (arr, defaultArr = []) => {
    arr.forEach((el) => {
      const newItem = { ...el, hide: false };
      defaultArr.push(newItem);
    });

    return defaultArr;
  };

  const toggleProperty = (arr, id, propertyName, label = null) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];

    if (label === null) label = oldItem.label;
    const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName], label };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  };

  const toggleHideOnActive = (arr, propName) => {
    const defaultArr = [];
    const newArr = [];

    toggleHideDefault(arr, defaultArr);

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

  const toggleHideOnCompleted = (arr, propName) => {
    const defaultArr = [];
    const newArr = [];

    toggleHideDefault(arr, defaultArr);

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

  const updateTaskDate = () => {
    setTodoData((data) => {
      const newArr = [];
      data.forEach((el) => newArr.push(el));
      return newArr;
    });
  };

  const deleteTask = (id) => {
    setTodoData((data) => {
      const index = data.findIndex((el) => el.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return newArr;
    });
  };

  function createTask(label, timerMin, timerSec) {
    return {
      label,
      timerMin,
      timerSec,
      date: new Date(),
      done: false,
      edit: false,
      hide: false,
      id: maxId,
    };
  }

  const addTask = (text, timerMin, timerSec) => {
    const newItem = createTask(text, timerMin, timerSec);

    setTodoData((data) => {
      const newArr = [...data, newItem];
      return newArr;
    });
  };

  const onToggleDone = (id) => {
    setTodoData((data) => {
      return toggleProperty(data, id, 'done');
    });
  };

  const onEditTask = (id) => {
    setTodoData((data) => {
      return toggleProperty(data, id, 'edit');
    });
  };

  const onSubmitChanges = (label, id) => {
    setTodoData((data) => {
      return toggleProperty(data, id, 'edit', label);
    });
  };

  const onClearCompleted = () => {
    const newArr = [];
    todoData.forEach((el) => (el.done ? newArr.push(el.id) : el));
    newArr.forEach((el) => deleteTask(el));
  };

  const onSelectedAllFilter = () => {
    setTodoData((data) => {
      return toggleHideDefault(data);
    });
  };

  const onSelectedActiveFilter = () => {
    setTodoData((data) => {
      return toggleHideOnCompleted(data, 'hide');
    });
  };

  const onSelectedCompletedFilter = () => {
    setTodoData((data) => {
      return toggleHideOnActive(data, 'hide');
    });
  };

  return (
    <div className="todoapp">
      <AppHeader onAddedTask={addTask} onSubmitChanges={onSubmitChanges} />
      <AppMain
        todos={todoData}
        onToggleDone={onToggleDone}
        updateTaskDate={updateTaskDate}
        updateInterval={updateInterval}
        onEdit={onEditTask}
        onSubmitChanges={onSubmitChanges}
        onDeleted={deleteTask}
        itemsLeft={itemsLeft}
        onSelectedAllFilter={onSelectedAllFilter}
        onSelectedActiveFilter={onSelectedActiveFilter}
        onSelectedCompletedFilter={onSelectedCompletedFilter}
        onClearCompleted={onClearCompleted}
      />
    </div>
  );
}

export default App;
