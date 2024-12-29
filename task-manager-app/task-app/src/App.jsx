// import React from "react";
// import TaskList from "./component/TaskList.jsx";
// import "./App.css";
// // import { TaskProvider } from "./Context/TaskContext.jsx";

// function App() {
//   return (
//     <div className="app">
//       <h1 className="name">Task Manager</h1>

//       <TaskList />
//     </div>
//   );
// }

// export default App;

import React from "react";
import TaskList from "./component/TaskList.jsx";
import "./App.css";
import { TaskProvider } from "./Context/TaskContext.jsx"; // Import the TaskProvider

function App() {
  return (
    <TaskProvider>
      {" "}
      {/* Wrap your app with the TaskProvider */}
      <div className="app">
        <h1 className="name">Task Manager</h1>
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
