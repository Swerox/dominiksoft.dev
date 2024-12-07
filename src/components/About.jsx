import { ABOUT_TEXT } from "../constants";
import { RiReactjsLine } from "react-icons/ri"
import { DiPython } from "react-icons/di"
import { SiFlask } from "react-icons/si"
import { DiJavascript } from "react-icons/di"
import { FaSwift } from "react-icons/fa6"



const About = () => {
  return (
    <div className="min-h-screen">
      <h1 className="my-20 text-center text-4xl pt-11">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex justify-center text-center lg:justify-start">
            <p className="my-2 maxw-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
            <h1 className="my-20 text-center text-4xl">Technologies i use</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className ="text-7xl text-cyan-400"></RiReactjsLine>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJavascript className ="text-7xl text-yellow-400"></DiJavascript>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiFlask className ="text-7xl text-green"></SiFlask>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiPython className ="text-7xl"></DiPython>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaSwift className ="text-7xl text-orange-600"></FaSwift>
                </div>
            </div>
    </div>
    
  );
};

export default About;
