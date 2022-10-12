const TasksList = ({ tasks, checkTaskHandler }) => {
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
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
