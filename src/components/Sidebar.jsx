import { useContext } from "react";
import Button from "./Button";
import { ProjectsContext } from "../store/projects-context";

export default function Sidebar() {

  const projectCtx = useContext(ProjectsContext);

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="uppercase font-semibold md:text-xl text-stone-200">
        Your projects
      </h2>
      <Button>+ Add Project</Button>
      <ul className="list-none w-full mt-8">
        {projectCtx.projectsState.projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 my-1 rounded-sm hover:bg-stone-800 hover:text-stone-200";

          if (project.id === projectCtx.projectsState.selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }


          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => projectCtx.handleSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
