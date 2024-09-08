import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useAnimate } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
import image1 from "../assets/Default_Create_a_movie_poster_featuring_a_rugged_worn_detectiv_3.jpg";

const Hero = () => {
  const [isActive, setIsActive] = useState(true);

  const burger = useRef(null);
  const containerRef = useRef(null);
  const t1 = gsap.timeline({ delay: 1 });
  useGSAP(() => {
    gsap.to(burger.current, {
      scale: 1.2,
      opacity: 1,
      duration: 1,
      ease: "power2.out",

      scrollTrigger: {
        trigger: containerRef.current,
        // start: "bottom top",
        start: "120% 50%",
        markers: true,
        scrub: true,
      },
    });
    gsap.from(".blocke", {
      scaleY: "0.01",
      // height: 0, // Initial height
      transformOrigin: "center", // Scale from the center
      duration: 0.6, // Duration of the animation
      ease: "easeInOut", // Easing function
    });
  });
  const containerUp = {
    hidden: {
      transformOrigin: "center",
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    },
    show: (i) => ({
      clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
      transition: {
        delay: 2 + i * 0.2,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };
  const variants = {
    open: {
      width: 400,
      height: 650,
      top: "-5px",
      right: "-15px",
      opacity: 1,
    },
    closed: {
      width: 10,
      height: 40,
      // top: "0px",
      // right: "0px",
      opacity: 0,
    },
  };

  return (
    <>
      {/* <Loader /> */}
      <div
        // ref={containerRef}
        className="bg-red-600 h-screen relative pt-5 overflow-hidden"
      >
        <div className="flex justify-between items-center mx-20">
          <div className="">Logo</div>
          <div className="flex   gap-10 text-xl font-normal ">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="relative w-1/2 flex items-end justify-end">
            <motion.div
              className="bg-[#C1FB75] rounded-lg  absolute overflow-visible z-30  top-0"
              variants={variants}
              animate={isActive ? "closed" : "open"}
              initial="closed"
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col text-black py-56 text-5xl px-5 gap-5 font-semibold overflow-hidden">
                <p>Projects</p>
                <p>Agency</p>
                <p>Expertise</p>
                <p>Careers</p>
              </div>
            </motion.div>

            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="relative mt-5 text-2xl rounded-full top-0   bg-black h-10 w-28 overflow-hidden"
            >
              <motion.div
                className="absolute h-full w-full z-30 "
                animate={{ top: isActive ? "0" : "-100%" }}
                initial={{ top: "0" }} // Set initial state here
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="bg-[#C1FB75] h-full font-normal w-full flex items-center justify-center text-black">
                  Menu
                </div>
                <div className="absolute bg-black text-white top-full h-full w-full flex items-center justify-center">
                  Close
                </div>
              </motion.div>
            </button>
          </div>
          {/* <div
            ref={burger}
            className="font-medium right-0 mt-10 mr-16 fixed scale-0 z-50 text-xl capitalize rounded-xl bg-black px-5 py-5 text-white"
          >
            menu
          </div> */}
        </div>
        <div className="top-0 left-0 w-full flex relative h-3/4 ">
          <motion.div
            custom={0}
            variants={containerUp}
            initial="hidden"
            animate="show"
            className="z-10 blocke absolute right-[25%] -top-5 flex-1 h-full w-44  bg-black clip-polygon rounded-lg"
          ></motion.div>
          <img
            src={image1}
            alt="Description"
            className="blocke absolute right-[25%] object-cover -top-5 flex-1 h-full w-44  bg-black clip-polygon rounded-lg"
          />
          <motion.div
            custom={2}
            variants={containerUp}
            initial="hidden"
            animate="show"
            className="z-10 blocke absolute right-[40%] top-16 flex-1 h-full w-44  bg-black clip-polygon rounded-lg"
          ></motion.div>
          <img
            src={image1}
            alt="Description"
            className="blocke absolute right-[40%] top-16 object-cover flex-1 h-full w-44  bg-black clip-polygon rounded-lg"
          />
          <motion.div
            variants={containerUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="blocke absolute right-[10%] top-20 flex-1 h-full w-44  bg-black clip-polygon rounded-lg"
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
