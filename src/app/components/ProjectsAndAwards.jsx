import { FaCheck } from "react-icons/fa6";
import TimeLineComponent from "./TimelineComponent";

export default function ProjectsAndAwards() {
  return (
    <div className="flex w-full h-[50vh] gap-5">
      {/* Projects*/}
      <div className="flex flex-col w-2/3 p-8 gap-6 rounded-[18px] bg-[#18181B]/45">
        <span className="block text-white text-2xl font-semibold">
          Projects
        </span>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <span className="text-white block text-base font-medium">
              Software Engineer
            </span>
            <span className="text-white text-sm px-3 py-2 bg-[#212125] rounded-full">
              Jan 2023 - Current
            </span>
          </div>
          <span className="text-xs font-normal text-[#C3C3C3]/78">
            Kondapur, Hyderabad
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <FaCheck className="text-[#12825F] size-5 shrink-0" />
            <span className="text-xs font-normal text-[#C3C3C3]">
              Currently working on building an event streaming data layer and
              analytics engine for a client that includes high throughput data
              pipeline (Kafka, Golang Microservices and Spark Jobs) and OLAP
              cube (Click-house with Star Schema) for efficient analytic
              queries.
            </span>
          </div>

          <div className="flex gap-2">
            <FaCheck className="text-[#12825F] size-5 shrink-0" />
            <span className="text-xs font-normal text-[#C3C3C3]">
              Proficient in Golang and Scala. Developed production-ready
              microservices in Golang and actively participated in maintaining
              and enhancing existing Scala services through bug fixes and API
              features development.
            </span>
          </div>
        </div>
      </div>

      {/* Awards*/}

      <div className="flex gap-10 flex-col w-1/3 p-8 rounded-[18px] bg-[#18181B]/45">
        <div className="flex gap-5 items-center">
          <span className="block text-white text-2xl font-semibold">
            Awards
          </span>
          <span className="block text-white px-3 py-2 bg-[#12825F] rounded-full">
            1.5 Years
          </span>
        </div>

        {/* Timeline */}
        <div>
          <TimeLineComponent />
        </div>
      </div>
    </div>
  );
}
