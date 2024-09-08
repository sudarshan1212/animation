import { motion, useAnimate } from "framer-motion";
import image1 from "../assets/Default_Create_a_movie_poster_featuring_a_rugged_worn_detectiv_3.jpg";
import image2 from "../assets/Default_Create_a_vibrant_movie_poster_that_showcases_a_juxtapo_0.jpg";
import image3 from "../assets/Default_Create_a_vibrant_movie_poster_that_showcases_a_juxtapo_1.jpg";
import image4 from "../assets/Default_Create_a_vibrant_movie_poster_that_showcases_a_juxtapo_2.jpg";
import { useEffect } from "react";
const Loader = () => {
  const [scope, animate] = useAnimate();
  async function myAnimation() {
    await animate("#imageCon", {
      clipPath: "polygon(50% 40%,50% 40%,50% 60%,50% 60%)",
      display: "none",
    });
    await animate(
      "#imageCon",
      {
        clipPath: "polygon(0 40%,100% 40%,100% 60%,0 60%)",
        display: "flex",
      },
      {
        delay: 0.45,
        duration: 0.4,
        ease: "easeInOut",
      }
    );
    await animate(
      "#imageCon",
      {
        clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
        display: "flex",
      },
      {
        delay: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      }
    );
    await animate(
      "#imageCon",
      {
        clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
        display: "flex",
      },
      {
        delay: 0.2,
        duration: 0.4,
        ease: "easeInOut",
      }
    );
  }
  useEffect(() => {
    myAnimation();
  }, []);
  const move = {
    hidden: (i) => ({
      y: "100%",
      x: i[0],
    }),
    moveUp: (i) => ({
      y: 0,
      transition: {
        delay: i[1],
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
    moveRight: {
      x: "10px",
      transition: {
        delay: 0.8,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    moveLeft: {
      x: "-10px",
      transition: {
        delay: 0.8,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  const imgChange = {
    hidden: {
      display: "block",
    },
    show: (i) => ({
      display: "none",
      transition: {
        duration: 0.6,
        delay: i,
        ease: "easeInOut",
      },
    }),
  };
  const containerUp = {
    hidden: {
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
    },
    show: {
      clipPath: "polygon(0% 0%,100% 0%,100% 0%,0% 0%)",
      display: "none",
      transition: {
        delay: 4,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="bg-black h-screen  absolute inset-0 overflow-hidden z-50"
      variants={containerUp}
      initial="hidden"
      animate="show"
      ref={scope}
    >
      <motion.section className="flex justify-center items-center w-full h-full overflow-hidden">
        <div className="overflow-y-clip">
          <motion.h1
            className="text-white font-bold text-[60px] "
            variants={move}
            animate={["moveUp", "moveLeft"]}
            initial="hidden"
            custom={[100, 0.2]}
          >
            The{" "}
          </motion.h1>
        </div>
        <motion.div id="imageCon" className="w-[300px] h-max relative 0">
          <motion.img
            src={image1}
            className="object-cover"
            variants={imgChange}
            initial="hidden"
            animate="show"
            custom={1.8}
          />
          <motion.img
            src={image2}
            alt=""
            variants={imgChange}
            className="object-cover"
            initial="hidden"
            animate="show"
            custom={2.2}
          />
          <motion.img
            src={image3}
            alt=""
            className="object-cover"
            variants={imgChange}
            initial="hidden"
            animate="show"
            custom={2.6}
          />
          <motion.img
            src={image4}
            alt=""
            variants={imgChange}
            initial="hidden"
            animate="show"
            custom={3}
            transition={{ delay: 3, duration: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="overflow-y-clip">
          <motion.h1
            variants={move}
            animate={["moveUp", "moveRight"]}
            initial="hidden"
            custom={[-100, 0.2]}
            className="text-white font-bold text-[60px]"
          >
            The{" "}
          </motion.h1>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Loader;
