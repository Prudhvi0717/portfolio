import HeaderComponent from "./components/HeaderComponent";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import ProjectsAndAwards from "./components/ProjectsAndAwards";

export default function Home() {
  return (
    <div className="bg-black flex flex-col p-12 gap-5">
      {/* Header */}

      <HeaderComponent />

      {/* Introduction */}

      <Introduction />

      {/* Experience */}

      <Experience />

      {/* Projects and Awards*/}

      <ProjectsAndAwards />
    </div>
  );
}
