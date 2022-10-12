import { useState } from 'react';
import './App.css';
import TaskCreator from './components/task-creator.component';
import TasksList from './components/tasks-list.component';

const initialTasks = [
  { id: 0, text: 'Go to hell!', done: false },
  { id: 1, text: 'Go to heaven!', done: true },
  { id: 2, text: 'Go to the purgatory zone!', done: false },
];

let nextId = 3;

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const createTaskHandler = (taskText) => {
    if (taskText) {
      setTasks([...tasks, { id: nextId++, text: taskText, done: false }]);
    } else {
      alert('Task text cannot be empty!');
    }
  };

  const checkTaskHandler = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>A day in the life</h1>
      <TaskCreator createTaskHandler={createTaskHandler} />
      <TasksList tasks={tasks} checkTaskHandler={checkTaskHandler} />
    </div>
  );
};

export default App;
