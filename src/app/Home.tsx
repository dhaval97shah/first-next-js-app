"use client";
import Image from "next/image";
import AboutMe from "./components/AboutMe";
import SkillsAnimatedList from "./components/SkillsAnimatedList";
import ProjectSlider from "./components/ProjectSlider";
import FooterLinks from "./components/FooterLinks";
import styled from "styled-components";

const Wrapper = styled.div`
  /* border: 5px solid #4c5564; */
  /* .left-section {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url("/d1.jpg") center center no-repeat;
    padding: 4px;
  } */
`;

export default function Home() {
  return (
    <Wrapper className="flex min-h-screen flex-col items-center justify-between p-24 pt-20 pb-16 relative main-page">
      <div className="w-full items-center justify-between font-mono text-sm">
        <div className="flex lg:flex-row flex-col items-start justify-between w-[96%] gap-3">
          <AboutMe />
          <SkillsAnimatedList />
        </div>
        <ProjectSlider />
      </div>
      <FooterLinks />
    </Wrapper>
  );
}
