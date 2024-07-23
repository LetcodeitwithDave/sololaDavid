import React from "react";
import { frontend, backend, webdesign, softskill } from "../../public/image";

const skills = [
  {
    category: "Web Design",
    details: ["Responsive Design", "User Research", "UI/UX Design"],
    image: webdesign,
  },
  {
    category: "Frontend",
    details: ["Javascript", "ReactJS", "Tailwindcss", "Bootstrap"],
    image: frontend,
  },
  {
    category: "Backend",
    details: ["Python", "Django", "Flask", "Django REST framework"],
    image: backend,
  },
  {
    category: "Soft Skills",
    details: [
      "Effective communication",
      "Collaboration",
      "Commitment",
      "Leadership",
    ],
    image: softskill,
  },
];

function Skill() {
  return (
    <div className="flex flex-col mt-28 justify-center items-center">
      <h1 className="text-4xl font-poppinsBold text-baseContent text-center">
        My <span className="text-buttonColor">Skills</span>
      </h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white w-lg border mt-0  rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            {skill.image && (
              <img src={skill.image} alt="" className=" w-14 h-14 mx-auto " />
            )}
            <h2 className="text-2xl  font-poppinsBold text-baseContent text-center  mt-4 mb-4">
              {skill.category}
            </h2>
            <ul className="text-lg font-poppinsMedium text-baseContent space-y-2 text-center lg:text-left">
              {skill.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
