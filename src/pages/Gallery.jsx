import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import image1 from "../assets/Default_Create_a_movie_poster_featuring_a_rugged_worn_detectiv_3.jpg";
import image2 from "../assets/Default_Create_a_vibrant_movie_poster_that_showcases_a_juxtapo_0.jpg";
import image3 from "../assets/Default_Create_a_vibrant_movie_poster_that_showcases_a_juxtapo_1.jpg";
import image4 from "../assets/Default_Create_a_vibrant_movie_poster_that_showcases_a_juxtapo_2.jpg";
const image = [image1, image2, image3, image1, image2, image3, image1];
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef([]);
  const wrapperRefs = useRef([]);
  const marque = useRef(null);

  // useEffect(() => {
  //   document.scrollingElement.scrollTo(0, 0);
  //   return () => {};
  // }, []);
  useGSAP(() => {
    gsap.utils.toArray(containerRef.current).forEach((section, index) => {
      const wrapper = wrapperRefs.current[index];
      if (!wrapper) {
        console.log("error");

        return;
      }
      console.log(wrapper.scrollWidth);

      const [xStart, xEnd] =
        index % 2
          ? ["0%", (wrapper.scrollWidth - section.offsetWidth) * -1]
          : [(wrapper.scrollWidth - section.offsetWidth) * -1, "0%"];
      gsap.fromTo(
        wrapper,
        { x: xStart },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: wrapper,
            scrub: 2,
            duration: 3,
          },
        }
      );
    });
    gsap.fromTo(
      marque.current,
      { x: "0%" },
      {
        x: "-70%",
        duration: 5,
        ease: "linear",
        repeat: -1,
      }
    );
  }, [containerRef.current]);
  return (
    <div className=" scroller text-[12vw] overflow-x-hidden bg-cream ">
      <section className="h-fit">
        <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
          Keep smiling
        </div>
      </section>
      <section>
        {[1, 2].map((el, idx) => (
          <section key={el} ref={(el) => (containerRef.current[idx] = el)}>
            <div
              ref={(el) => (wrapperRefs.current[idx] = el)}
              className="wrapper flex text-[16vh] font-medium"
            >
              {image.map((el2, index) => (
                <img
                  key={index < 3}
                  className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer"
                  src={el2}
                />
              ))}
            </div>
          </section>
        ))}
      </section>

      <div>
        <div ref={marque} className=" flex text-[16vh] font-medium ">
          {image.map((el2, index) => (
            <img
              key={index}
              className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
              src={el2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
