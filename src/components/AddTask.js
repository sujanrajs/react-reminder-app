import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add task");
      return;
    }
    onAdd({ title, day, reminder });
    setTitle("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input
          type="text"
          placeholder="Add Date and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>
      <input className="btn" type="submit" value="Save task" />
    </form>
  );
};

export default AddTask;
