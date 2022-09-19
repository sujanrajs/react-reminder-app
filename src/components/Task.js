import { MdCancel } from "react-icons/md";

const Task = ({ task }) => {
  return (
    <div>
      <h3>
        {task.title}
        <MdCancel />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
