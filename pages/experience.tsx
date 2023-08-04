"use client";
import ProjectAreas from "@/app/components/experience/ProjectAreas";
import WorkWith from "@/app/components/experience/WorkWith";
import { SUPPORTING_LIBS } from "@/app/consts/SUPPORTING_LIBS";
import Image from "next/image";
import styled from "styled-components";
import Grow from "@mui/material/Grow";

const Wrapper = styled.div`
  /* border: 5px solid #4c5564; */
  /* .left-section {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url("/d1.jpg") center center no-repeat;
    padding: 4px;
  } */
`;

export default function Experience() {
  return (
    <Wrapper className="flex min-h-screen justify-between pb-8 bg-[#000] relative main-page w-full overflow-hidden max-h-[100vh]">
      <div className="w-full items-center justify-between font-mono text-sm w-[70%] lg:pr-32 p-24 pb-0 overflow-y-auto">
        <Grow in timeout={{ enter: 700, exit: 250 }}>
          <div className="text-gray-400 text-5xl font-bold">
            5 years of Experience
          </div>
        </Grow>
        <div className="text-gray-200 mt-8 text-lg max-w-full">
          <p>
            I started development journey in 2018, I started as a React Native
            developer and then started working on React JS as well. Within these
            5 years I have worked on many projects and I have learned a lot of
            things.
          </p>
          <p className="mt-4">
            My main tech stack is React Native and React JS. Whenever it comes
            to website, I prefer to use React JS and if it's mobile application,
            I'll go for React native.
          </p>
          <div className="mt-8 text-2xl font-bold">Role & Responsibilities</div>
          <p className="mt-2 text-lg">React JS Developer</p>
          <p className="mt-2 text-lg">React Native Developer</p>
          <p className="mt-2 text-lg">Project Manager</p>
        </div>
        <ProjectAreas />
      </div>
      <WorkWith />
    </Wrapper>
  );
}
