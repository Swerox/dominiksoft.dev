import { RiReactjsLine } from "react-icons/ri"
import { DiPython } from "react-icons/di"
import { SiFlask } from "react-icons/si"
import { DiJavascript } from "react-icons/di"
import { FaSwift } from "react-icons/fa6"

const Technologies = () => {
    return (
        <div className="border b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Things i like</h1>
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
    )
}

export default Technologies