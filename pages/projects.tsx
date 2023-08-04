"use client";
import React, { useRef } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { PROJECTS } from "@/app/consts/PROJECTS";
import Image from "next/image";
import styled from "styled-components";
import classnames from "classnames";
import Grow from "@mui/material/Grow";

const Wrapper = styled.div`
  /* border: 5px solid #4c5564; */
  /* .left-section {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url("/d1.jpg") center center no-repeat;
    padding: 4px;
  } */
  .area {
    position: relative;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.8);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    animation-duration: 15s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 80px;
    height: 80px;
    animation-delay: 5s;
    animation-duration: 15s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 80px;
    height: 80px;
    animation-delay: 10s;
    animation-duration: 10s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 80px;
    height: 80px;
    animation-delay: 20s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 80px;
    height: 80px;
    animation-delay: 30s;
    animation-duration: 15s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`;

export default function Projects() {
  return (
    <Wrapper className="flex min-h-screen flex-col p-24 pb-16 bg-[#000] relative main-page">
      <Grow in timeout={{ enter: 700, exit: 250 }}>
        <div className="text-white text-5xl font-bold uppercase text-center">
          Projects
        </div>
      </Grow>
      <div className="projects-list flex flex-col gap-8 mt-12">
        {PROJECTS.map((project, index: number) => (
          <div
            key={project.title}
            className={classnames(
              "area items-center project-card border border-solid border-gray-400 p-4 rounded-lg flex",
              {
                "flex-row": index % 2 === 0,
                "flex-row-reverse": index % 2 !== 0,
              }
            )}
          >
            <ul className="circles">
              {project.images.map((image: string, index: number) => (
                <li key={index}>
                  <Image
                    alt="project-image"
                    src={image}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>

            <div className="w-[70%]">
              <ProjectCard images={project.images} />
            </div>
            <div
              className="w-[30%] flex p-6 px-10 flex flex-col justify-center m-6"
              // style={{
              //   background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${project.cover}) no-repeat`,
              // }}
            >
              <div
                className="text-4xl font-bold"
                style={{
                  color: project.titleColor,
                }}
              >
                {project.title}
              </div>
              <div className="text-base text-white mt-4">
                {project.description}
              </div>
              <div className="text-white text-lg mt-4 opacity-75">
                <span className="">Platform: </span>
                <span>{project.platform}</span>
              </div>
              <div className="text-white text-lg mt-4 opacity-75">
                <span>Tech-stack: </span>

                {project.techStack.map((tech: string, index: number) => (
                  <li className="text-base">{tech}</li>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const ProjectCard = ({ images }: any) => {
  const ref = useRef<any>();
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth: any, carouselRef: any) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={images}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              useGrabCursor
            />
          );
        }}
      />
      <>
        <IconButton
          color="primary"
          onClick={() => {
            ref.current?.goBack();
          }}
          className="text-white absolute top-[45%] -left-[10px] z-[10] bg-zinc-700 hover:bg-white group"
        >
          <KeyboardArrowLeftIcon className="group-hover:text-black" />
        </IconButton>
        <IconButton
          className="text-white absolute top-[45%] -right-[10px] z-[10] bg-zinc-700 hover:bg-white group"
          color="primary"
          onClick={() => {
            ref.current?.goNext(6);
          }}
        >
          <KeyboardArrowLeftIcon className="rotate-180 group-hover:text-black" />
        </IconButton>
      </>
    </div>
  );
};

export const Card = React.memo(function (props: any) {
  const { data, dataIndex } = props;
  return (
    <div
      style={{
        width: "100%",
        height: 700,
        userSelect: "none",
      }}
      className="my-slide-component relative group"
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
          borderRadius: 10,
          background: "white",
        }}
        draggable={false}
        src={data[dataIndex]}
      />
      {/* <div className="absolute bottom-0 left-0 right-0 m-auto w-full h-full flex justify-center">
        <div className="flex justify-center items-center bg-[rgba(0,0,0,0.7)] w-full rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
          <div className="text-white text-5xl font-medium">{title}</div>
        </div>
      </div> */}
    </div>
  );
});
