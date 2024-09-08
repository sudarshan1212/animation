import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Words = () => {
  const firstRef = useRef(null);
  const secondtRef = useRef(null);
  const pharse =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat laudantium fugit quisquam, quod laudantium fugit quisquam, quod laudantium fugit quisquam, quod dolorum omnis suscipit culpa neque expedita cupiditate?";
  useGSAP(() => {
    gsap.from(firstRef.current.querySelectorAll("span"), {
      scrollTrigger: {
        trigger: firstRef.current,
        start: "top 40%",
        end: "top 20%",
        scrub: true, //false
      },
      opacity: 0.1,
      stagger: 0.1,
      duration: 0.1,
    });
    gsap.from(secondtRef.current.querySelectorAll("span"), {
      scrollTrigger: {
        trigger: secondtRef.current,
        start: "top 40%",
        end: "top 20%",
        scrub: true, //false
      },
      y: 10,
      opacity: 0,
      stagger: 0.5,
      duration: 1,
    });
  }, []);
  return (
    <div className="h-auto flex flex-col items-center justify-center max-w-screen-2xl mx-auto overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-3 gap-3">
        {" "}
        <section ref={firstRef} className=" text-4xl font-semibold mb-10">
          {pharse.split(" ").map((word, index) => (
            <span key={index} className="inline-block mr-1 overflow-hidden ">
              {word}
            </span>
          ))}
        </section>{" "}
        <section
          ref={secondtRef}
          className=" text-4xl font-semibold mb-10 overflow-hidden"
        >
          {pharse.split(" ").map((word, index) => (
            <span key={index} className="inline-block mr-1 overflow-hidden ">
              {word}
            </span>
          ))}
        </section>
        <div className="col-start-2 row-start-2">
          {" "}
          {pharse.split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block text-4xl  mr-1 overflow-hidden "
            >
              {word}
            </span>
          ))}
        </div>
        <div className="col-start-1 row-start-2">4</div>
        <div className="row-start-3">5</div>
        <div className="row-start-3">6</div>
      </div>
    </div>
  );
};

export default Words;
