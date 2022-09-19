const AddTask = () => {
  return (
    <form>
      <div>
        <label>Task</label>
        <input type="text" placeholder="Add task"></input>
      </div>
      <div>
        <label>Day & Time</label>
        <input type="text" placeholder="Add Date"></input>
      </div>
      <div>
        <label>Set Reminder</label>
        <input type="checkbox"></input>
      </div>
      <input type="submit" value="Save task" /> 
    </form>
  );
};

export default AddTask;
