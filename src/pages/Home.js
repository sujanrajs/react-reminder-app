import { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

// Below given url is for json server deployed in heroku
const HerokuUrl = `https://reminder-json-server.herokuapp.com/tasks`;

// Below given url is for local json server, comment above heroku url while using local json server
// const LocalUrl = `http://localhost:5000/tasks`;

const Home = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // below this replace HerokuUrl by LocalUrl while running local json server

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(HerokuUrl);
    const data = await res.json();
    return data;
  };

  // Add task
  const addTask = async (task) => {
    const res = await fetch(HerokuUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`${HerokuUrl}/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Fetch task and toggle Reminder
  const fetchTask = async (id) => {
    const res = await fetch(`${HerokuUrl}/${id}`);
    const data = await res.json();
    return data;
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateReminder = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`${HerokuUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateReminder),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <>
      <Header
        title="Reminder App"
        onAddBtn={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <div className="empty-container">
          <h3> Sorry! No tasks to Show</h3>
        </div>
      )}
    </>
  );
};

export default Home;
