import { useContext, useState } from "react";
import { ProjectsContext } from "../store/projects-context";

export default function AddTask() {
  const projectsCtx = useContext(ProjectsContext);
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTask() {
    if (enteredTask.trim() === "") {
      return;
    }
    projectsCtx.handleAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  );
}
