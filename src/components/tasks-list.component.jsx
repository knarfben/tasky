import { useState } from 'react';

const TasksList = ({ tasks, onChangeTask, onDeleteTask }) => {
  const [editingTaskId, setEditingTaskId] = useState(-1);
  const [editingTaskText, setEditingTaskText] = useState('');

  const checkBoxHandler = (taskId) => {
    const changedTask = tasks.find((task) => task.id === taskId);
    onChangeTask({ ...changedTask, done: !changedTask.done });
  };

  const editTask = (taskId) => {
    if (editingTaskId >= 0) {
      alert('You cannot edit more than one task at the time!');
    } else {
      setEditingTaskText(tasks.find((task) => task.id === taskId).text);
      setEditingTaskId(taskId);
    }
  };

  const changeTextHandler = (saveTaskId) => {
    const changedTask = tasks.find((task) => task.id === saveTaskId);
    onChangeTask({ ...changedTask, text: editingTaskText });
    setEditingTaskId(-1);
  };

  const onChangeHandler = (e) => {
    setEditingTaskText(e.target.value);
  };

  const deleteTaskHandler = (taskId) => {
    onDeleteTask(taskId);
    setEditingTaskId(-1);
  };
  return (
    <>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                onChange={() => checkBoxHandler(task.id)}
                id={`cb${task.id}`}
                type="checkbox"
                checked={task.done}
              />
              {editingTaskId === task.id ? (
                <>
                  <input value={editingTaskText} onChange={onChangeHandler} />
                  <button
                    type="button"
                    onClick={() => changeTextHandler(task.id)}
                  >
                    save
                  </button>
                </>
              ) : (
                <>
                  <label htmlFor={`cb${task.id}`}>{task.text}</label>
                  {!task.done && (
                    <button type="button" onClick={() => editTask(task.id)}>
                      edit
                    </button>
                  )}
                </>
              )}
              <button type="button" onClick={() => deleteTaskHandler(task.id)}>
                &#10005;
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="nothing">
          Not much to see here. Create a new task 😍
        </div>
      )}
    </>
  );
};

export default TasksList;
