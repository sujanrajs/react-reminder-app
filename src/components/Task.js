const Task = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
