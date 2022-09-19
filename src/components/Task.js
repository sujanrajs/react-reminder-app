import { MdCancel } from "react-icons/md";

const Task = ({ task, onDelete }) => {
  return (
    <div>
      <h3>
        {task.title}
        <MdCancel
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
