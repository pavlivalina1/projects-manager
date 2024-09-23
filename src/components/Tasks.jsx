import { forwardRef, useContext } from "react";
import AddTask from "./AddTask";
import { ProjectsContext } from "../store/projects-context";

export default function Tasks() {

  const projectsCtx = useContext(ProjectsContext);

  let selectedProjectTasks = [];
  if (projectsCtx.projectsState.tasks.length > 0) {
    selectedProjectTasks = projectsCtx.projectsState.tasks.filter(
      (task) => task.projectId === projectsCtx.projectsState.selectedProjectId
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
      <AddTask />
      {selectedProjectTasks.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {selectedProjectTasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              {task.text}{" "}
              <button className="text-stone-700 hover:text-red-500" onClick={() => projectsCtx.handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks yet.
        </p>
      )}
    </section>
  );
}
