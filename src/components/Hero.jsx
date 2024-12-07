import { FaGithub } from "react-icons/fa";
import TypeWriter from 'typewriter-effect'
const Hero = () => {
  return (
    <div className="min-h-screen lg:mb-35">
      <div className="flex flex-col h-full">
        <div className="w-full">
          <nav className="mb-20 flex items-center justify-between px-6 py-6">
            <div className="text-3xl">
              <h1>dominiksoft.dev</h1>
            </div>
            <div className="text-3xl">
            <a 
            href="https://github.com/Swerox"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
              <FaGithub />
              </a>
            </div>
          </nav>

          <div className="flex flex-col items-center lg:items-start justify-center h-full px-6">
            <h1 className="pb-11 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Dominik Dittrich
            </h1>
            <span className="bg-gradient-to-r from-violet-500 via-slate-500 to-purple-400 bg-clip-text text-5xl tracking-tight text-transparent">
              <TypeWriter onInit={(typewriter) => {
                typewriter.typeString('Software Developer')
                .start();
              }}>
              </TypeWriter>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
