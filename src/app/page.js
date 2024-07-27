import HeaderComponent from "./components/HeaderComponent";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";
import ProjectsAndAwards from "./components/ProjectsAndAwards";
import data from "./data/profile.json";

export default function Home() {
  return (
    <div className="bg-black flex flex-col p-12 gap-5">
      {/* Header */}

      <HeaderComponent />

      {/* Introduction */}

      <Introduction name={data.name} role={data.role}/>

      {/* Experience */}

      <Experience totalExperience={data.totalExperienceInYears} experiences={data.experiences}/>

      {/* Projects and Awards*/}

      <ProjectsAndAwards projects={data.projects}/>
    </div>
  );
}
