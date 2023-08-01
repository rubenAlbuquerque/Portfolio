import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel({ k, data }) {
    const scrollLeft = () => {
        document.getElementById(`content-${k}`).scrollLeft -= 400;
    };
    const scrollRight = () => {
        document.getElementById(`content-${k}`).scrollLeft += 400;
    };

    return (
        <div className="relative">
            <div className="relative ">
                <button
                    onClick={scrollLeft}
                    className="absolute left-[-30px] top-[150px] p-2 m-2 rounded-full bg-gray-200/80">
                    <FiChevronLeft size={40} color="bg-gray-800" />
                </button>
                <button
                    onClick={scrollRight}
                    className="absolute right-[-30px] top-[150px] p-2 m-2 rounded-full bg-gray-200/80">
                    <FiChevronRight size={40} />
                </button>
            </div>
            <div
                id={"content-" + k}
                className="carousel p-4 flex items-center justify-start overflow-x-auto scrollbar-hidden scroll-smooth">
                {data.map((project, index) => (
                    <div>
                        <Card
                            img={project.image}
                            title={project.title}
                            tech={project.tech}
                            key={index}
                            git={project.githubLink}
                            live={project.liveLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
