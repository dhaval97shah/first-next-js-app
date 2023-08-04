import styled from "styled-components";
import { SUPPORTING_LIBS } from "@/app/consts/SUPPORTING_LIBS";

const Wrapper = styled.div`
  height: 2000px;
  overflow: hidden;
  position: relative;
  margin-right: 50px;

  @keyframes scroll {
    0% {
      top: 0;
    }
    100% {
      top: -200%;
    }
  }
  .scrolling-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: scroll 15s linear infinite;
  }
`;

const WorkWith = () => {
  return (
    <>
      <Wrapper className="flex flex-col w-[30%] items-start pt-24 pr-16 container">
        <div className="scrolling-content">
          <div className="mt-4 scrolling-area pt-[400px]">
            <div className="font-bold text-3xl text-white">I work with:</div>
            {SUPPORTING_LIBS.map((lib, index) => (
              <div key={index}>
                <div className="text-white text-2xl w-fit my-4 w-fit font-medium uppercase border-0 border-b-2 border-solid border-white">
                  {lib?.title}
                </div>
                <ul>
                  {lib?.description?.map((desc, index) => (
                    <li key={index} className="text-base text-gray-400 mt-2">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="h-[20px] w-[100px] bg-white" /> */}
      </Wrapper>
    </>
  );
};
export default WorkWith;
