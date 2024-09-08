import blueBerry from "../assets/blueberry.png";
import bannana from "../assets/bannana.png";
import green from "../assets/green apple.png";
import leaf from "../assets/leaf.png";
import leaf2 from "../assets/leaf 2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useRef, useState } from "react";
const Donut = () => {
  const [first, setfirst] = useState(1);
  const blueBerryTextRef = useRef(null);
  const blueBerryRef = useRef(null);
  const greenAplleRef = useRef(null);
  const greenContainerRef = useRef(null);
  const greenTextRef = useRef(null);
  const timeLine = useRef(gsap.timeline({ paused: true }));
  const handleNext = () => {
    timeLine.current = gsap.timeline();

    const animationProps = { ease: "power1.inOut", duration: 0.8 };
    if (first === 1) {
      timeLine.current
        .to(blueBerryTextRef.current, { y: 700, ...animationProps }, "a")
        .to(
          blueBerryRef.current,
          { y: -550, rotate: 180, scale: 0.5, ...animationProps },
          "a"
        )
        .to(
          greenAplleRef.current,
          { scale: 1, top: "60%", rotate: 0, ...animationProps },
          "a"
        )
        .to(greenContainerRef.current, { scale: 20, ...animationProps }, "a")
        .to(
          greenTextRef.current,
          { scale: 1, top: "55%", ...animationProps },
          "a"
        )
        .to(
          ".leaf1, .leaf2, .leaf3, .leaf4",
          { rotate: 45, ...animationProps },
          "a"
        );
    }
  };
  const handlePrevious = () => {
    timeLine.current.reverse();
  };
  return (
    <div className="h-[100vh] bg-gradient-to-t from-[#e0b8ff] to-[#744eb2] flex items-center justify-center overflow-hidden">
      <div className="w-full h-full relative">
        <div
          ref={greenContainerRef}
          className="absolute  rounded-full bg-red-500 size-36 -top-28 left-1/2 -translate-x-1/2 scale-50 bg-gradient-to-t from-[#E0FFB8] to-[#7AB24E] "
        />
        <h1
          ref={blueBerryTextRef}
          className="text-[15vw] text-white w-full text-center uppercase font-semibold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          Blue berry
        </h1>
        <h1
          ref={greenTextRef}
          className="text-[15vw] text-white w-full text-center scale-0 -top-64 uppercase font-semibold absolute -translate-y-1/2 left-1/2 -translate-x-1/2"
        >
          green Apple
        </h1>
        <img
          ref={blueBerryRef}
          src={blueBerry}
          className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[40vw]"
          alt=""
        />
        {/* two */}
        <img
          ref={greenAplleRef}
          src={bannana}
          className=" absolute top-[110%] w-[40vw] -translate-y-1/2 left-1/2 size-[55w] rotate-180 -translate-x-1/2   scale-[0.4]"
          alt=""
        />
        <img
          src={leaf}
          className="w-52 absolute top-[5%]  left-[15%] -rotate-45 leaf1"
          alt=""
        />
        <img
          src={leaf2}
          className="w-80 absolute top-[5%]  right-[15%] leaf3"
          alt=""
        />
        <img
          src={leaf2}
          className=" w-80  absolute bottom-[5%]  left-[15%]  -rotate-90 leaf2"
          alt=""
        />
        <img
          src={leaf}
          className="w-52 absolute bottom-[5%]  right-[15%] rotate-12 leaf4"
          alt=""
        />
        {/* swipe Animation */}

        <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full flex justify-between">
          <ChevronLeft
            onClick={() => {
              handlePrevious();
              setfirst((prev) => prev - 1);
            }}
            className="size-12 cursor-pointer"
          />
          <ChevronRight
            onClick={() => {
              handleNext();
              setfirst((prev) => prev + 1);
            }}
            className="size-12 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Donut;
