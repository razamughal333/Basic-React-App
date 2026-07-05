import { useState } from "react";

function MiniProject() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Practice Components",
    "Build Mini Projects",
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "2px solid #ddd",
        borderRadius: "10px",
        fontFamily: "Arial",
      }}
    >
      <h1>📝 React Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{
          width: "70%",
          padding: "10px",
          marginRight: "10px",
        }}
      />

      <button onClick={addTask}>Add Task</button>

      <hr />

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span>{task}</span>

              <button
                onClick={() => deleteTask(index)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total Tasks: {tasks.length}</h3>
    </div>
  );
}

export default MiniProject;