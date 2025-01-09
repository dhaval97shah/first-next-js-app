"use client";

import { useEffect, useState } from "react";
import { SKILLS, SUB_SKILLS } from "../consts/SKILLS";
import { useTransition, animated } from "@react-spring/web";

const SkillsAnimatedList = () => {
  const [skills, setSkills] = useState<any>([...SKILLS]);
  const [subSkills, setSubSkills] = useState<any>([...SUB_SKILLS]);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffledSubSkillsList = [...SUB_SKILLS].sort(
        () => 0.5 - Math.random()
      );
      setSubSkills(shuffledSubSkillsList);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let height = 0;
  const transitions = useTransition(
    subSkills.map((data: any) => ({
      ...data,
      y: (height += 30) - 30,
    })),
    {
      key: (item: any) => item.title,
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }: any) => ({ y, height, opacity: 1 }),
      update: ({ y, height }: any) => ({ y, height }),
    }
  );

  return (
    <div /* className="fixed right-10" */ className="-mt-8">
      {skills.map((item: { title: string }) => (
        <animated.div
          className="text-[#c8ccd0] lg:text-6xl text-3xl mb-2 title2 w-fit"
          key={item.title}
        >
          {item.title} <hr />
        </animated.div>
      ))}
      <div className="mt-12 ml-4">
        {transitions((style: any, item: any, t: any, index: any) => (
          <animated.div
            className="text-[#fff] lg:text-xl text-3xl font-bold lg:mt-2 mt-1"
            style={{ zIndex: subSkills.length - index, ...style }}
            key={item.title}
          >
            {item.title?.split(" ")?.map((i: string) => (
              <>
                <span className="skill-font">{i}</span>
                <span>&nbsp;&nbsp;</span>
              </>
            ))}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAnimatedList;
