import { ABOUT_TEXT } from "../constants";
import { RiReactjsLine } from "react-icons/ri";
import { DiPython } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaSwift } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";

import { motion } from "framer-motion";

const iconAnimations = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const About = () => {
  return (
    <div className="min-h-screen">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl pt-11"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex justify-center text-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="my-2 lg:maxw-xl py-6 lg:px-80 sm:px-12"
            >
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="my-20 text-center text-4xl"
      >
        Technologies i use
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconAnimations(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 hover:scale-110"></RiReactjsLine>
        </motion.div>
        <motion.div
          variants={iconAnimations(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJavascript className="text-7xl text-yellow-400 hover:scale-110"></DiJavascript>
        </motion.div>
        <motion.div
          variants={iconAnimations(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFlask className="text-7xl text-green hover:scale-110"></SiFlask>
        </motion.div>
        <motion.div
          variants={iconAnimations(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiPython className="text-7xl hover:scale-110"></DiPython>
        </motion.div>
        <motion.div
          variants={iconAnimations(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaSwift className="text-7xl text-orange-600 hover:scale-110"></FaSwift>
        </motion.div>
        <motion.div
          variants={iconAnimations(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500 hover:scale-110"></FaNodeJs>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
