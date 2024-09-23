import { useReducer } from "react";
import { createContext } from "react";

export const ProjectsContext = createContext({
  projectsState: {},
  handleAddProject: () => {},
  handleDeleteProject: () => {},
  handleCancelAddProject: () => {},
  handleSaveProject: () => {},
  handleSelectProject: () => {},
  handleAddTask: () => {},
  handleDeleteTask: () => {},
});

function projectsStateReducer(state, action) {
  if (action.type === "ADD_PROJECT") {
    return {
      ...state,
      selectedProjectId: null,
    };
  } else if (action.type === "CANCEL_ADD_PROJECT") {
    return {
      ...state,
      selectedProjectId: undefined,
    };
  } else if (action.type === "SAVE_PROJECT") {
    const newProject = {
      ...action.payload,
      id: Math.random(),
    };
    const newProjects = [...state.projects, newProject];
    return {
      ...state,
      selectedProjectId: undefined,
      projects: newProjects,
    };
  } else if (action.type === "SELECT_PROJECT") {
    return {
      ...state,
      selectedProjectId: action.payload,
    };
  } else if (action.type === "DELETE_PROJECT") {
    const newProjects = state.projects.filter(
      (project) => project.id !== state.selectedProjectId
    );
    return {
      ...state,
      selectedProjectId: undefined,
      projects: newProjects,
    };
  } else if (action.type === "ADD_TASK") {
    const newTask = {
      text: action.payload,
      projectId: state.selectedProjectId,
      id: Math.random(),
    };
    return {
      ...state,
      tasks: [newTask, ...state.tasks],
    };
  } else if (action.type === "DELETE_TASK") {
    const newTasks = state.tasks.filter((task) => task.id !== action.payload);
    return {
      ...state,
      tasks: newTasks,
    };
  }
}

export default function ProjectContextProvider({ children }) {
  const [projectsState, projectsStateDispatch] = useReducer(
    projectsStateReducer,
    {
      selectedProjectId: undefined,
      projects: [],
      tasks: [],
    }
  );

  function handleAddProject() {
    projectsStateDispatch({
      type: "ADD_PROJECT",
    });
  }

  function handleCancelAddProject() {
    projectsStateDispatch({
      type: "CANCEL_ADD_PROJECT",
    });
  }

  function handleSaveProject(projectData) {
    projectsStateDispatch({
      type: "SAVE_PROJECT",
      payload: projectData,
    });
  }

  function handleSelectProject(projectId) {
    projectsStateDispatch({
      type: "SELECT_PROJECT",
      payload: projectId,
    });
  }

  function handleDeleteProject() {
    projectsStateDispatch({
      type: "DELETE_PROJECT",
    });
  }

  function handleAddTask(taskData) {
    projectsStateDispatch({
      type: "ADD_TASK",
      payload: taskData,
    });
  }

  function handleDeleteTask(id) {
    projectsStateDispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  const projectsCtx = {
    projectsState: projectsState,
    handleAddProject: handleAddProject,
    handleDeleteProject: handleDeleteProject,
    handleCancelAddProject: handleCancelAddProject,
    handleSaveProject: handleSaveProject,
    handleSelectProject: handleSelectProject,
    handleAddTask: handleAddTask,
    handleDeleteTask: handleDeleteTask,
  };

  return (
    <ProjectsContext.Provider value={projectsCtx}>
      {children}
    </ProjectsContext.Provider>
  );
}
