import { FaGithub } from "react-icons/fa";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen lg:mb-35">
      <div className="flex flex-col h-full">
        <div className="w-full">
          <nav className="mb-20 flex items-center justify-between px-6 py-6">
            <div className="text-3xl">
              <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
              >
                dominiksoft.dev
              </motion.h1>
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1 }}
              className="text-3xl"
            >
              <a
                href="https://github.com/Swerox"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                <FaGithub />
              </a>
            </motion.div>
          </nav>

          <div className="flex flex-col lg:items-start h-full px-6">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pb-11 text-5xl lg:text-8xl md:text-4xl font-thin tracking-tight lg:mt-16"
            >
              Dominik Dittrich
            </motion.h1>
            <span className="text-3xl lg:text-5xl md:text-4xl bg-gradient-to-r from-violet-500 via-slate-500 to-purple-400 bg-clip-text tracking-tight text-transparent">
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter.typeString("Software Developer")
                    .pauseFor(500)
                    .start();
                }}
              ></TypeWriter>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
