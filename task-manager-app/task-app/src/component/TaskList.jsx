import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    if (!newTask.trim()) return;

    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);

    setNewTask("");
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // function to delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-list">
      <form className="submit-form" onSubmit={addTask}>
        <input
          className="input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="submit" type="submit">
          {" "}
          Add Task Button
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
