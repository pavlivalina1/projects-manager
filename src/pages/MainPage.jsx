import { useContext } from "react";
import NewProject from "../components/NewProject";
import Sidebar from "../components/Sidebar";
import NoProjectSelected from "../components/NoProjectSelected";
import SelectedProject from "../components/SelectedProject";
import { ProjectsContext } from "../store/projects-context";

function MainPage() {
  const {projectsState} = useContext(ProjectsContext)

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        {projectsState.selectedProjectId && (
          <SelectedProject project={selectedProject}/>
        )}
        {projectsState.selectedProjectId === null && (
          <NewProject />
        )}
        {projectsState.selectedProjectId === undefined && (
          <NoProjectSelected />
        )}
      </main>
    </>
  );
}

export default MainPage;
