import  { useRef } from "react";
import image1 from "../assets/Default_Create_a_movie_poster_featuring_a_rugged_worn_detectiv_3.jpg";

import { motion, useScroll, useTransform } from "framer-motion";

const Collections = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div ref={container} className="h-[180vh] relative bg-black">
      <div className="sticky top-[0px] h-screen bg-orange-600">
        <div className="w-full h-full absolute top-0 flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ scale: scale4 }}
            className="w-[25vw] h-[25vh]  "
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src={image1} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
