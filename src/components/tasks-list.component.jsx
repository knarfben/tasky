import { useState } from 'react';

const TasksList = ({ tasks, checkTaskHandler, deleteTask, saveTask }) => {
  const [editingTaskId, setEditingTaskId] = useState(-1);
  const [editingTaskText, setEditingTaskText] = useState('');

  const clickHandler = (taskId) => {
    checkTaskHandler(taskId);
  };

  const editTask = (taskId) => {
    console.log({ editingTaskId });
    if (editingTaskId >= 0) {
      alert('You cannot edit more than one task at the time!');
    } else {
      setEditingTaskText(tasks.find((task) => task.id === taskId).text);
      setEditingTaskId(taskId);
    }
  };

  const saveTaskHandler = (saveTaskId) => {
    saveTask(editingTaskText, saveTaskId);
    setEditingTaskId(-1);
  };

  const onChangeHandler = (e) => {
    setEditingTaskText(e.target.value);
  };

  const deleteTaskHandler = (taskId) => {
    deleteTask(taskId);
    setEditingTaskId(-1);
  };
  return (
    <>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                onChange={() => clickHandler(task.id)}
                id={`cb${task.id}`}
                type="checkbox"
                checked={task.done}
              />
              {editingTaskId === task.id ? (
                <>
                  <input value={editingTaskText} onChange={onChangeHandler} />
                  <button
                    type="button"
                    onClick={() => saveTaskHandler(task.id)}
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
