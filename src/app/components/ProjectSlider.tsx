"use client";
import React, { useRef } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import styled from "styled-components";
import { PROJECTS } from "../consts/PROJECTS";

const Wrapper = styled.div`
  .projects-heading {
    text-decoration: none;
  }
  .projects-heading::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    bottom: -10px;
    left: 0;
    background-color: #fff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  .projects-heading:hover::before {
    transform: scaleX(1);
  }
`;

const ProjectSlider = () => {
  const ref = useRef<any>();
  return (
    <Wrapper className="mt-64">
      <div className="text-center mb-16">
        <Link
          href="/projects"
          className="title text-white text-5xl font-bold uppercase projects-heading relative hover:opacity-90 transition ease-in-out duratio-300"
        >
          Projects
        </Link>
      </div>
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(parentWidth: any, carouselRef: any) => {
            // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
            // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
            // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
            // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
            let currentVisibleSlide = 7;
            if (parentWidth <= 1440) currentVisibleSlide = 7;
            if (parentWidth <= 1080) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                carouselWidth={parentWidth}
                data={PROJECTS}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={7}
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
    </Wrapper>
  );
};

export default ProjectSlider;

export const Card = React.memo(function (props: any) {
  const { data, dataIndex } = props;
  const { cover, title } = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 500,
        userSelect: "none",
      }}
      className="my-slide-component relative group"
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 10,
          background: "white",
        }}
        draggable={false}
        src={cover}
      />
      <div className="absolute bottom-0 left-0 right-0 m-auto w-full h-full flex justify-center">
        <div className="flex justify-center items-center bg-[rgba(0,0,0,0.7)] w-full rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
          <div className="text-white text-5xl font-medium skill-font">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
});
