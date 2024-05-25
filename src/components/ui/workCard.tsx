import React from "react";
import { WobbleCard } from "./wobble-card";

type WorkCardComponent = {
  date: string;
  projectName: string;
  description: string;
  bulletPoints: string[];
  img: string;
};

export const Projects: WorkCardComponent[] = [
  {
    date: "2024",
    bulletPoints: ["soomething i did", "they", "three"],
    description: "Someshit i did ",
    img: "",
    projectName: "Tratwo",
  },
];
const WorkCard = ({
  bulletPoints,
  date,
  description,
  img,
  projectName,
}: WorkCardComponent) => {
  return (
    <WobbleCard>
      <div className="flex ">
        <div className="flex flex-col bg-black shadow-md rounded-lg p-6">
          <div className="text-green-500 text-lg font-bold">{date}</div>
          <div className="text-white font-bold text-2xl mt-2">
            {projectName}
          </div>
          <div className="text-gray-600 mt-2">{description}</div>
          <div className="mt-4 space-y-2">
            {bulletPoints.map((i, index) => {
              return (
                <div key={index} className="text-gray-500">
                  {i}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4">
          <img
            src="path_to_your_image"
            alt="Work Card"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </WobbleCard>
  );
};

export default WorkCard;
