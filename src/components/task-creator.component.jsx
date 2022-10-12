import { useState } from 'react';

const TaskCreator = ({ createTaskHandler }) => {
  const [newTask, setNewTask] = useState('');
  const onChangeHandler = (e) => {
    setNewTask(e.target.value);
  };

  const onClickHandler = () => {
    createTaskHandler(newTask);
  };

  return (
    <div>
      <input onChange={onChangeHandler} value={newTask} />{' '}
      <button onClick={onClickHandler} type="button">
        new todo
      </button>
    </div>
  );
};

export default TaskCreator;
