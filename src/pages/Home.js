import { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

// Below given url is for json server deployed in render, comment the line while using local json server
const apiUrl = `https://json-server-api-aujh.onrender.com/tasks`;

// Below given url is for local json server, comment the line while using json server deployed in render
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

  // below this replace apiUrl by LocalUrl while running local json server

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
  };

  // Add task
  const addTask = async (task) => {
    const res = await fetch(apiUrl, {
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
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Fetch task and toggle Reminder
  const fetchTask = async (id) => {
    const res = await fetch(`${apiUrl}/${id}`);
    const data = await res.json();
    return data;
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateReminder = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`${apiUrl}/${id}`, {
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
