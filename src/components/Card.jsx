import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import github from "../imagens/icons/github.png";
// "./imagens/icons/github.png";

function Card({ img, title, tech, git, live }) {
    return (
        <>
            <div className="card bg-white w-[300px] h-[400px] m-2 rounded-lg shadow-lg">
                <div className="top">
                    <img
                        className="w-[300px] h-[250px] object-cover p-2 rounded-xl "
                        // src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
                        src={img}
                        alt="img"
                    />
                </div>
                <div className="bottom flex flex-col justify-center items-start p-3 bg-white ">
                    <div className="text-2xl font-bold tracking-tighter text-gray-800 inter">
                        {title}
                    </div>
                    {/* text-2xl font-bold inter primary tracking-tight pt-2 */}
                    {/* <div className="category text-xs font-light my-1">
                        5.4 cm (6.1-inch) display1
                    </div> */}

                    <div className="py-2">
                        {tech.map((tech, index) => (
                            <button
                                class="text-sm text-gray-800 
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
                    <div className="flex items-center my-2">
                        <button
                            class="rounded border border-gray-700/50 hover:shadow-sm text-sm
                        hover:bg-blue-400 font-semibold text-gray-700 py-1.5 px-3 mr-1 flex items-center justify-center">
                            <FontAwesomeIcon
                                class="w-4 h-4 mr-2"
                                icon={faArrowUpRightFromSquare}
                            />
                            Live Demo
                        </button>

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
