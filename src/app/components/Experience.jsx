import { FaCheck } from "react-icons/fa6";
import TimeLineComponent from "./TimelineComponent";

export default function Experience({totalExperience, experiences}) {

  function GetTimelineData(experiences) {
    return experiences.map((experience, idx) => {
      return {
        text: experience.name,
        description: experience.description,
        year: experience.timeLineDuration
      }
    });
  }

  return (
    <div className="flex w-full h-[50vh] gap-5">
      {/* Experience Representation*/}

      <div className="flex gap-10 flex-col w-1/3 p-8 rounded-[18px] bg-[#18181B]/45">
        <div className="flex gap-5 items-center">
          <span className="block text-white text-2xl font-semibold">
            Experience
          </span>
          <span className="block text-white px-3 py-2 bg-[#12825F] rounded-full">
            {totalExperience} Years
          </span>
        </div>

        {/* Timeline */}
        <div>
          <TimeLineComponent data={GetTimelineData(experiences)} totalExperience={totalExperience}/>
        </div>
      </div>

      {/* Experience Description */}
      <div className="flex flex-col w-2/3 p-8 gap-6 rounded-[18px] bg-[#18181B]/45">
        <span className="block text-white text-2xl font-semibold">
          Professional Experience
        </span>
        {experiences.map((each, idx) => (
          <div>
          <div className="flex flex-col gap-2 pb-2">
          <div className="flex gap-3 items-center">
            <span className="text-white block text-base font-medium">
              {each.name}
            </span>
            <span className="text-white text-sm px-3 py-2 bg-[#212125] rounded-full">
              {each.duration}
            </span>
          </div>
          <span className="font-normal text-xs py-2 text-[#C3C3C3]">
            {each.location}
          </span> 
        </div>
        <div className="flex flex-col gap-3">
          {each.details.map((detail, idx) => (
              <div className="flex gap-2">
              <FaCheck className="text-[#12825F] size-5 shrink-0" />
              <span className="text-xs font-normal text-[#C3C3C3]">
                {detail}
              </span>
            </div>
          ))}
        </div>
        </div>))}
      </div>
    </div>
  );
}
