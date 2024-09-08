import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const textRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      textRef.current.querySelectorAll("span"),
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.02, // Stagger the start times
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          // markers: true, // Optional: for debugging
        },
      }
    );
  }, []);
  const pharse =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat laudantium fugit quisquam, quod laudantium fugit quisquam, quod laudantium fugit quisquam, quod dolorum omnis suscipit culpa neque expedita cupiditate?";
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10">
      <div className="flex justify-between items-center mx-44">
        <div className="w-2/3 text-7xl font-semibold  h-full border-r">
          <p ref={textRef} className="text-white">
            {pharse.split(" ").map((word, index) => (
              <span key={index} className="inline-block mr-1 overflow-hidden ">
                {word}
              </span>
            ))}
          </p>
        </div>

        <div className=" text-white font-thin  w-1/3 flex flex-col justify-evenly pl-10">
          <div className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem
            laborum ipsam harum, maxime modi. Perferendis sint nihil modi.
            Veniam.
          </div>
          <div
            data-scroll
            data-scroll-speed={0.3}
            className="h-44 w-44 ml-20 font-bold mt-63 bg-white text-2xl text-black rounded-full text-center flex items-center justify-center  "
          >
            Click Me!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
