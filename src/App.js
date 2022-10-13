import { useReducer } from 'react';
import './App.css';
import TaskCreator from './components/task-creator.component';
import TasksList from './components/tasks-list.component';

const initialTasks = [
  { id: 0, text: 'Go to hell!', done: false },
  { id: 1, text: 'Go to heaven!', done: true },
  { id: 2, text: 'Go to the purgatory!', done: false },
];

let nextId = 3;

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'add':
      return [...tasks, { id: nextId++, text: action.text, done: false }];
    case 'change':
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    case 'delete':
      return tasks.filter((task) => task.id !== action.taskId);
    default:
      throw new Error('wrong action type');
  }
};

const App = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const duplicatedTask = (text) => {
    return tasks.some((task) => task.text === text);
  };

  const handleAddTask = (taskText) => {
    if (taskText && !duplicatedTask(taskText)) {
      dispatch({
        type: 'add',
        text: taskText,
      });
    } else {
      alert('Task text cannot be empty or duplicated!');
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: 'delete',
      taskId: taskId,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({ type: 'change', task: task });
  };

  return (
    <div className="App">
      <h1>A day in the life</h1>
      <TaskCreator createTaskHandler={handleAddTask} />
      <TasksList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onChangeTask={handleChangeTask}
      />
    </div>
  );
};

export default App;
