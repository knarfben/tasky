const TasksList = ({ tasks, checkTaskHandler, deleteTask }) => {
  const clickHandler = (taskId) => {
    checkTaskHandler(taskId);
  };
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            onChange={() => clickHandler(task.id)}
            id={`cb${task.id}`}
            type="checkbox"
            checked={task.done}
          />
          <label htmlFor={`cb${task.id}`}>{task.text}</label>
          <button type="button" onClick={() => deleteTask(task.id)}>
            &#10005;
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
