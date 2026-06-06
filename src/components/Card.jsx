import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import github from "../imagens/icons/github.png";
// "./imagens/icons/github.png";

function Card({ img, title, tech, git, live, desc }) {
    return (
        <>
            <div className="card bg-white w-[320px] h-[440px] m-2 rounded-lg shadow-2xl">
                <div className="top">
                    <img
                        className="w-[320px] h-[250px] object-cover p-2 rounded-xl "
                        src={img}
                        alt="img"
                    />
                </div>
                <div class="flex flex-col justify-between h-55">
                    <div className="bottom flex flex-col justify-center items-start p-3 bg-white ">
                        <div className="text-lg font-semibold tracking-tighter text-gray-800 inter ">
                            {title}
                        </div>

                        <div className="py-0">
                            {tech.map((tech, index) => (
                                <button
                                    class="text-sm text-gray-800 mb-0
                                 mr-1 hfa:bg-gray-200/60 d:bg-gray-900/20 d:text-gray-50/80 d:hfa:bg-gray-900/30
                                rounded border border-gray-700/10 bg-gray-100/60 py-[2px] 
                                px-1.5 text-[13px] font-medium hfa:bg-gray-200/60 d:bg-gray-900/20 
                                d:text-gray-50/80 d:hfa:bg-gray-900/30
                                "
                                    // border-blue-950 rounded border  mr-1 px-3
                                    key={index}>
                                    <a
                                        href={git}
                                        target="_blank"
                                        class="flex flex-row justify-center items-center"
                                        rel="noreferrer">
                                        {tech}
                                    </a>
                                </button>
                            ))}
                        </div>

                        <div className="text-xs font-normal tracking-normal mt-1">
                            {desc}
                        </div>
                    </div>
                    <div className="flex px-3 py-3 items-end ">
                        <a
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded border border-gray-700/50 hover:shadow-sm text-sm
                        hover:bg-blue-400 font-semibold text-gray-700 py-1.5 px-3 mr-1 flex items-center justify-center">
                            <FontAwesomeIcon
                                class="w-4 h-4 mr-2"
                                icon={faArrowUpRightFromSquare}
                            />
                            Live Demo
                        </a>

                        {/* <button className="border px-3 py-1 text-xs rounded-lg ">
                            Add to Cart
                        </button> */}
                        <button
                            class="py-1 px-2 rounded border border-gray-700/50 hover:shadow-sm font-semibold 
                        hover:bg-sky-600/30 text-gray-700 text-sm">
                            <a
                                href={git}
                                target="_blank"
                                class="flex flex-row justify-center items-center "
                                rel="noreferrer">
                                <img
                                    src={github}
                                    alt="Logo"
                                    class="w-6 h-6 bg-transparent rounded-lg mr-1"
                                    href="#home"
                                />
                                View Source
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;
