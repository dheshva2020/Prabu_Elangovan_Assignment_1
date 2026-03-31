import { useState } from 'react';
import TaskList from '../components/TaskList';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Task Page</h2>

      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <TaskList tasks={tasks} setTasks={setTasks} />

      {/* Conditional Rendering */}
      {tasks.length === 0 && <p>No tasks added yet</p>}
    </div>
  );
}