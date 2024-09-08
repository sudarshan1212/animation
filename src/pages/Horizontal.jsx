import React, { useEffect, useRef, useState } from "react";
import One from "../assets/1.jpg";
import Two from "../assets/2.jpg";
import Three from "../assets/3.jpg";
import Four from "../assets/4.jpg";
import Five from "../assets/5.jpg";
import Six from "../assets/6.jpg";
import Seven from "../assets/7.jpg";
import Eight from "../assets/8.jpg";
import Nine from "../assets/9.jpg";
import Ten from "../assets/10.jpg";
import Eleven from "../assets/11.jpg";
import Twele from "../assets/12.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
const Horizontal = () => {
  const images = [
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twele,
  ];
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const updateDimension = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };
  useEffect(() => {
    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  const contianer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contianer,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3.3]);
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 1.25]
  );
  const y4 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3]);
  return (
    <main className="relative ">
      <div
        ref={contianer}
        className="h-[175vh] relative bg-[#2D2D2D] flex gap-8 p-8 box-border  overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} x={2} />
        <Column images={[images[3], images[4], images[5]]} y={y2} x={1} />
        <Column images={[images[6], images[7], images[8]]} y={y3} x={2} />`
        <Column images={[images[9], images[10], images[11]]} y={y4} x={1} />
      </div>
    </main>
  );
};
const Column = ({ images, y = 0, x }) => {
  return (
    <motion.div
      className="relative flex flex-col gap-8 w-[25%] min-w-[250px]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`relative h-full w-full rounded-lg overflow-hidden ${
            x % 2 === 0 ? "-top-1/2" : "-top-full"
          }`}
        >
          <img src={src} alt="image" className="object-cover" />
        </div>
      ))}
    </motion.div>
  );
};

export default Horizontal;
