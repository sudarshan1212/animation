import React, { useRef } from "react";
import image1 from "../assets/Default_Create_a_movie_poster_featuring_a_rugged_worn_detectiv_3.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const Card = () => {
  const image = [
    {
      image: image1,
      color: "#9b59b6",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui iste fugit magnam libero eum fuga facere atque aut reprehenderit?",
    },
    {
      image: image1,
      color: "#1abc9c",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui iste fugit magnam libero eum fuga facere atque aut reprehenderit?",
    },
    {
      image: image1,
      color: "#2980b9",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui iste fugit magnam libero eum fuga facere atque aut reprehenderit?",
    },
    {
      image: image1,
      color: "#f39c12",
      description:
        "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui iste fugit magnam libero eum fuga facere atque aut reprehenderit?",
    },
  ];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  return (
    <div className="h-full flex items-center justify-center flex-col gap-10  ">
      {image.map((item, index) => (
        <div
          key={index}
          className={`bg-[${
            item.color
          }] w-1/2 h-1/2 border rounded-xl sticky gap-5 top-2  top-${
            index * 4 + 3
          }`}
          //   style={{ top: `calc(-10% + ${index * 25}px)` }}
        >
          <motion.div
            style={{ scale: scale }}
            className="flex items-center justify-center gap-10  top-[1px]"
          >
            <motion.div>
              <motion.img src={item.image} className="rounded-xl" alt="" />
            </motion.div>
            <div>{item.description}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Card;
