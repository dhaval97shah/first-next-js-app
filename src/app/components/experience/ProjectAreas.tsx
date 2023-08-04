import { PROJECT_AREAS } from "@/app/consts/PROJECT_AREAS";

const ProjectAreas = () => {
  return (
    <div className="mt-8 w-[80%]">
      <div className="text-white text-3xl font-bold">Areas of Projects:</div>
      <div className="mt-6 flex flex-wrap gap-4">
        {PROJECT_AREAS?.map((area, index) => (
          <div
            key={index}
            className="text-white text-lg opacity-75 px-2 p-1 rounded"
            style={{
              background: area.bgColor,
            }}
          >
            <span className="">{area?.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectAreas;
