import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis, tempore hic repellat quia minima exercitationem voluptas, officia minus earum inventore obcaecati at alias blanditiis tenetur facilis.",
  },
  {
    year: 2017,
    title: "Google",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis, tempore hic repellat quia minima exercitationem voluptas, officia minus earum inventore obcaecati at alias blanditiis tenetur facilis.",
  },
  {
    year: 2015,
    title: "Amazon",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis, tempore hic repellat quia minima exercitationem voluptas, officia minus earum inventore obcaecati at alias blanditiis tenetur facilis.",
  },
  {
    year: 2012,
    title: "Facebook",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis, tempore hic repellat quia minima exercitationem voluptas, officia minus earum inventore obcaecati at alias blanditiis tenetur facilis.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-width-[1040px] w-full m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work </h1>
      {data.map((item, idx) => {
        return (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        );
      })}
    </div>
  );
};

export default Work;
