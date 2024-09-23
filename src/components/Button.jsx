import { useContext } from "react";
import { ProjectsContext } from "../store/projects-context";

export default function Button({ children, ...props }) {
  const { handleAddProject } = useContext(ProjectsContext);
  return (
    <p>
      <button
        {...props}
        onClick={handleAddProject}
        className="text-center text-xs md:text-base px-4 py-2 rounded-md mt-7 bg-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-600"
      >
        {children}
      </button>
    </p>
  );
}
