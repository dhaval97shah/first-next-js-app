"use client";
import Zoom from "@mui/material/Zoom";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";

const AboutMe = () => {
  return (
    <div className="mt-2 left-section">
      {/* <Zoom in> */}
      <div className="text-[#fff] lg:text-5xl text-3xl font-bold my-8">
        DHAVAL SHAH
      </div>
      {/* </Zoom> */}
      {/* <Image
              src="/d1.jpg"
              alt="profile-pic"
              width={120}
              height={120}
              className="rounded-full bg-white h-[120px] w-[120px] border-4 border-white"
              priority
            /> */}
      <Grow in timeout={{ enter: 700, exit: 250 }}>
        <div>
          <p className="text-white mt-6 w-[550px] max-w-full text-base opacity-80 font-thin">
            Hello! I'm Dhaval Shah,
            <br /> A passionate and skilled developer with a focus on creating
            exceptional web and mobile applications. With a strong foundation in
            React Native, React JS, Bootstrap, Tailwind CSS, and Material UI, I
            bring a unique blend of technical expertise and creative flair to
            every project I undertake.
          </p>
          <p className="text-white mt-6 w-[550px] max-w-full text-base opacity-80 font-thin">
            I believe that great projects begin with clear communication and
            collaboration. When working on a new endeavor, I take the time to
            understand my client's objectives thoroughly. Together, we create a
            roadmap that outlines the development process and ensures we remain
            on track throughout the project's lifecycle.
          </p>
        </div>
      </Grow>
      <Fade in timeout={{ enter: 700, exit: 250 }}>
        <div>
          <div className="text-2xl text-white font-bold mt-8">
            Let's Create Something Remarkable!
          </div>
          <p className="text-white mt-3 w-[550px] max-w-full text-base opacity-80 font-thin">
            If you have a project in mind or want to collaborate on an exciting
            idea, I'd love to hear from you! Whether it's developing a complex
            enterprise application or crafting an aesthetically pleasing
            website.
          </p>
          <p className="text-white mt-2 w-[550px] max-w-full text-lg font-medium opacity-80">
            Let's work together to bring your idea to life!
          </p>
        </div>
      </Fade>
      {/* <Image
              src="/d1.jpg"
              alt="Vercel Logo"
              className="dark:invert absolute lg:left-[70px] left-0 top-10 opacity-10"
              width={600}
              height={400}
              priority
            /> */}
    </div>
  );
};

export default AboutMe;
