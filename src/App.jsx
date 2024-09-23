import GamePage from "./pages/MainPage";
import ProjectContextProvider from "./store/projects-context";

function App() {
  return (
    <ProjectContextProvider>
       <GamePage />
    </ProjectContextProvider>
  );
}

export default App;
