import { useState, useEffect, useRef } from "react";
import logo from "./logoBG.png";
import image from "./imagens/Capturar1.JPG";
import image2 from "./imagens/myphoto2.jpg";
import image3 from "./imagens/myphoto3.jpg";
import image4 from "./imagens/myphoto4.jpg";

import baby from "./imagens/Imgicons/baby-born.png";

import codephoto from "./imagens/index_code.png";
import github from "./imagens/icons/github.png";
import linkedin from "./imagens/icons/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    // faMoon,
    faSun,
    faPlus,
    faComputer,
    faWindow,
    faDesktop,
    faBarChart,
    faBarcode,
    faBars,
    faBarsProgress,
    faBarsStaggered,
    faTimes,
    // faGreaterThan,
    // faTerminal,
    faArrowRight,
    faArrowUpRightFromSquare,
    // faGithub,
    // faLinkedin,
    // <FontAwesomeIcon icon="fa-solid fa-rectangle-terminal" />
} from "@fortawesome/free-solid-svg-icons";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

import "./App.css";
import React from "react";

// reposive metrics:
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// 2xl: 1536

// 3xl: 1920-----------

function Navbar() {
    // data { scroll, introrefs, aboutrefs, projectsrefs }
    const links = [
        { name: "Home", href: "#about", active: true, note: "Presentation " },
        { name: "About", href: "#about", note: "More about me" },
        { name: "Projects", href: "#about", note: "Work i've done" },
        { name: "Contact", ref: "#Contact", note: "My contacts" },
    ];
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="h-20 fixed top-0 left-0 w-full z-10 bg-white/60 backdrop-filter backdrop-blur-md">
            <nav className="nav flex justify-between items-center border-b border-gray-800/10">
                <div className="flex nav-logo justify-between items-center py-5 cursor-pointer">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-10 h-10"
                        href="#home"
                    />
                </div>

                {/* Links da navbar flex */}
                <ul className="list-lisks list-none xl:space-x-5 hidden md:flex md:space-x-0">
                    {/* map in links */}
                    {links.map((link, index) => (
                        <li
                            className="links"
                            key={index}
                            // href={link.href}

                            onClick={() => console.log(link.href)}>
                            <a href="#about">{link.name}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex">
                    {/* add icon dark mode */}
                    <button className="items-center px-3 rounded-lg">
                        <FontAwesomeIcon
                            icon={faSun}
                            className="text-gray-500 hover:text-gray-800"
                        />
                    </button>
                    <div className="hidden md:flex">
                        <button className="button-contactme">Contact Me</button>
                    </div>
                    <div className="relative flex items-center px-1 md:hidden">
                        <button
                            className="button-dropdown "
                            onClick={toggleDropdown}>
                            {isDropdownOpen ? (
                                <FontAwesomeIcon
                                    icon={faTimes}
                                    className="text-gray-400 hover:text-gray-800 text-[18px]"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faBars}
                                    className="text-gray-400 hover:text-gray-800 text-[18px]"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            {isDropdownOpen && (
                <div
                    className="fixed top-0 left-0 z-50 w-full h-full"
                    // bg-gray-800"
                    style={{ backgroundColor: "#0f172a" }}>
                    <nav
                        className="nav bg-white flex justify-between items-center 
                    border-b border-gray-800/10">
                        <div className="flex nav-logo justify-between items-center py-5 cursor-pointer">
                            <img
                                src={logo}
                                alt="Logo"
                                className="w-10 h-10"
                                href="#home"
                            />
                        </div>

                        {/* Links da navbar flex */}
                        <ul className="list-lisks list-none xl:space-x-5 hidden lg:flex lg:space-x-2">
                            {/* map in links */}
                            {links.map((link, index) => (
                                <li
                                    className="links"
                                    key={index}
                                    // href={link.href}
                                    href="#about"
                                    onClick={() => console.log(link.href)}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>

                        <div className="flex">
                            {/* add icon dark mode */}
                            <button className="items-center px-3 rounded-lg">
                                <FontAwesomeIcon
                                    icon={faSun}
                                    className="text-gray-500 hover:text-gray-800"
                                />
                            </button>
                            <div className="hidden lg:flex">
                                <button className="button-contactme">
                                    Contact Me
                                </button>
                            </div>
                            <div className="relative flex items-center px-1 lg:hidden">
                                <button
                                    className="button-dropdown "
                                    onClick={toggleDropdown}>
                                    {isDropdownOpen ? (
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                            className="text-gray-400 hover:text-gray-800 text-[18px]"
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faBars}
                                            className="text-gray-400 hover:text-gray-800 text-[18px]"
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className="mx-5 h-full border-x border-dashed  border-white/30">
                        <ul
                            className=" pt-28   
                        list-lisks list-none space-y-16 mx-5">
                            {/* map in links */}
                            {links.map((link, index) => (
                                <li className="flex items-center justify-between">
                                    <div
                                        className="inter text-gray-400 text-[17px]"
                                        key={index}
                                        // href={link.href}
                                        href="#about"
                                        onClick={() => console.log(link.href)}>
                                        {link.name}
                                    </div>
                                    <div className="mx-2 pt-3 flex-1 border-b-2 border-dotted border-white/20 "></div>
                                    <div className="note ">
                                        <p className="text-gray-500 text-[13px]">
                                            {link.note}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center mt-20 items-center">
                            <button
                                className="button-rainbow whitespace-nowrap 
                            border-2 bg-white border-opacity-40 px-10 py-3 shadow-2xl
                            font-medium tracking-tight text-gray-900 rounded-lg shadow-red">
                                Let's work
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

function Intro() {
    return (
        <section
            // ref={ref}
            className="container mx-auto  mt-36 mb-32">
            {/* mx-0 px-32 pb-0 */}
            <div
                className="Intro text-black container mx-auto 
                flex items-center justify-center ">
                <div className="relative  xl:flex xl:items-center xl:justify-center  ">
                    <div className="Intro-Info max-w-5xl p-6  ">
                        <p className="intro-welcome blueStrong">
                            Welcome to my site.
                        </p>
                        <h1 className="title mb-5">
                            I'm&nbsp;
                            <strong className="title-name blueStrong">
                                Rúben Albuquerque
                            </strong>
                            ,
                            <div className="title-body">
                                a Data Scientist and Web developer
                                <br />
                                enthusiast.
                            </div>
                        </h1>
                        <div className="intro-description max-w-xl">
                            <p className="mb-6 ">
                                I love writing code that takes things to the
                                next level, creating highly performant websites,
                                automated API integrations, building my own
                                dev-tools, and creating stunning user
                                experiences that make you feel WOW!
                            </p>
                            <p className="text-lg mb-8">
                                I am always keen to learn and explore new
                                technologies, frameworks, and programming
                                languages. Currently, I'm learning about Astro
                                and Replicache.
                            </p>
                        </div>
                        <a
                            href="/resume"
                            className="intro-letswork text-white bg-gray-800 rounded-lg 
                        hover:bg-gray-900 border-2 border-gray-500">
                            Let's Work
                        </a>
                        <a
                            href="/resume"
                            className="intro-resume bg-transparent text-gray-500 border-2 
                        border-gray-500 ml-6 rounded-lg
                         hover:text-gray-900 transition-colors">
                            Resume
                        </a>
                    </div>
                    <div className="relative widthDiv xl:mt-6">
                        {/* <h1>ola ruben</h1> */}
                        {/* <div className="myblur "></div> */}
                        <div
                            className="Intro-Code xl:absolute xl:right-[14%] 
                            xl:top-[5%] w-full rounded-lg mt-10 ">
                            <div
                                className="bg-header bg-gray-800 flex items-center 
                            border-b-0 border-gray-800 px-4 rounded-t-lg ">
                                <button className=" flex gap-2 pr-4 py-3 defaultButton">
                                    <span className="bg-red-600 hover:bg-red-700 w-3 h-3 rounded-full"></span>
                                    <span className="bg-yellow-500 hover:bg-yellow-600 w-3 h-3 rounded-full"></span>
                                    <span className="bg-green-500 hover:bg-green-600 w-3 h-3 rounded-full"></span>
                                </button>

                                <h2 className="text-sm text-gray-500 px-5 py-3 bg-gray-900 rounded-t-xl mr-0 ">
                                    ./index.tsx
                                </h2>

                                <div className="flex items-center justify-center">
                                    <button className=" rounded-full w-8 h-8 hover:bg-slate-700 transition-colors">
                                        <span className="text-white text-base text-justify ">
                                            <FontAwesomeIcon
                                                icon={faPlus}
                                                className=" text-xs"
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <pre className="py-3 px-4 bg-gray-900 rounded-b-lg">
                                <code className="whitespace-pre-wrap">
                                    <label className="red">import</label>
                                    <label className="white">{" {"}</label>
                                    <label className="orange"> FC </label>
                                    <label className="white">{"}"}</label>
                                    <label className="red"> from </label>
                                    <label className="green">"react"</label>
                                    <label className="white">;</label>
                                    <br />
                                    <br />
                                    <label className="red">type</label>
                                    <label className="white">
                                        {" "}
                                        WelcomeProps{" "}
                                    </label>
                                    <label className="red"> = </label>
                                    <label className="white">{" {"}</label>
                                    <br />
                                    <label className="white">&nbsp; uses</label>
                                    <label className="blue">:</label>
                                    <br />
                                    <label className="blue">
                                        &nbsp;&nbsp;&nbsp;&nbsp;|
                                    </label>
                                    <label className="green">
                                        &nbsp;"explore new tech"
                                    </label>
                                    <br />
                                    <label className="blue">
                                        &nbsp;&nbsp;&nbsp;&nbsp;|
                                    </label>
                                    <label className="green">
                                        &nbsp;"display my skills"
                                    </label>
                                    <br />
                                    <label className="blue">
                                        &nbsp;&nbsp;&nbsp;&nbsp;|
                                    </label>
                                    <label className="green">
                                        &nbsp;"find freelancing opportunities"
                                    </label>
                                    <br />
                                    <label className="blue">
                                        &nbsp;&nbsp;&nbsp;&nbsp;|
                                    </label>
                                    <label className="green">
                                        &nbsp; "find a fulltime job"
                                    </label>
                                    <label className="white">;</label>
                                    <br />
                                    <label className="white">{" };"}</label>
                                    <br />
                                    <br />
                                    <label className="red">export</label>
                                    <label className="red"> const </label>
                                    <label className="white">Welcome</label>
                                    <label className="white">:</label>
                                    <label className="orange"> FC</label>
                                    <label className="white">{"<"}</label>
                                    <label className="white">
                                        WelcomeProps
                                    </label>
                                    <label className="white">{">"}</label>
                                    <label className="white"> = </label>
                                    <label className="white">{"("}</label>
                                    <label className="white">{"{ "}</label>
                                    <label className="white">uses</label>
                                    <label className="white">{" }"}</label>
                                    <label className="white">{")"} </label>
                                    <label className="white">{"=> {"}</label>

                                    <br />
                                    <label className="red">
                                        &nbsp;&nbsp;return
                                    </label>
                                    <label className="white"> {"("}</label>
                                    <br />
                                    <label className="blue">
                                        &nbsp;&nbsp;&nbsp;&nbsp;{" <> "}
                                    </label>
                                    <br />
                                    <label className="blue">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {"<h1>"}
                                    </label>
                                    <label className="white">
                                        This is my little slice of the internet.
                                    </label>
                                    <label className="blue">{"</h1>"}</label>
                                    <label className="white">;</label>
                                    <br />
                                    <label className="blue">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {"<p>"}
                                    </label>
                                    <br />
                                    <label className="white">
                                        {" "}
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I
                                        use this site to{" "}
                                    </label>
                                    <label className="blue">{"<em>"}</label>
                                    <label className="white">{"{"}</label>
                                    <label className="white">uses</label>
                                    <label className="white">{"}"}</label>
                                    <label className="blue">{"</em>"}</label>
                                    <br />
                                    <label className="blue">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {"</p>"}
                                    </label>
                                    <label className="white">;</label>
                                    <br />

                                    <label className="blue">
                                        &nbsp;&nbsp;&nbsp;&nbsp;{" </> "}
                                    </label>
                                    <br />
                                    <label className="white">
                                        &nbsp;&nbsp;{");"}
                                    </label>
                                    <br />
                                    <label className="white">{"};"}</label>
                                    <br />
                                    <br />
                                    <label className="red">
                                        export default{" "}
                                    </label>
                                    <label className="white">Welcome;</label>
                                    <br />
                                </code>
                            </pre>
                        </div>

                        {/* <div className="myblur-terminal "></div> */}
                        <div
                            className="terminal max-w-lg rounded-lg absolute right-[5%] top-[-40%]
                        bg-gray-900 bg-opacity-80 w-80 h-60 overflow-hidden mt-40">
                            <div
                                className=" terminal-header flex flex-row items-center bg-gray-800 p-2 
                        rounded-t-lg">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="bg-red-600 hover:bg-red-700 w-3 h-3 rounded-full mr-2"></div>
                                    <div className="bg-yellow-500 hover:bg-yellow-600 w-3 h-3 rounded-full mr-2"></div>
                                    <div className="bg-green-500 hover:bg-green-600 w-3 h-3 rounded-full mr-2"></div>
                                </div>
                                <div className="flex items-center justify-center flex-grow pr-16">
                                    <h1 className="text-sm text-center text-gray-500">
                                        Terminal
                                    </h1>
                                </div>
                            </div>
                            <div className="terminal-body px-2 py-1">
                                <div className="terminal-text text">
                                    <div className="line">
                                        <label className="blueStrong">
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="w-4 green"
                                            />{" "}
                                            Welcome@Portfolio:$&nbsp;
                                        </label>
                                        <label className="white">
                                            More informations
                                        </label>
                                    </div>
                                    <br />
                                    <div className="line">
                                        <label className="red">
                                            bash: More: command not found &nbsp;
                                        </label>
                                    </div>
                                    <br />
                                    <div className="line">
                                        <label className="blueStrong ">
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                                className="w-4 green"
                                            />{" "}
                                            Welcome@Portfolio:$&nbsp;
                                        </label>
                                        <label className="white">
                                            python more_info.py
                                        </label>
                                    </div>
                                    <br />
                                    <div className="line mb-1">
                                        <label className="white ">
                                            Contacts found - Connections:
                                        </label>
                                    </div>
                                    <div className="line">
                                        <label className="text-blue-200 flex items-center">
                                            &nbsp;&nbsp;
                                            <button className="flex items-center w-full hover:bg-blue-700 text-white font-bold rounded">
                                                <img
                                                    src={linkedin}
                                                    alt="Logoo"
                                                    className="w-8 h-8 mr-3 "
                                                    href="#home"
                                                />{" "}
                                                <a
                                                    href="https://www.linkedin.com/in/rubenalbuquerque/"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    Linkedin
                                                </a>
                                            </button>
                                        </label>
                                    </div>
                                    <div className="line">
                                        <label className="text-blue-200 flex items-center">
                                            &nbsp;&nbsp;
                                            <button className="flex items-center w-full text-white hover:bg-slate-100 hover:text-black font-bold  rounded p-1">
                                                <img
                                                    src={github}
                                                    alt="Logoo"
                                                    className="w-6 h-6 bg-white rounded-lg mr-5"
                                                    href="#home"
                                                />{" "}
                                                <a
                                                    href="https://github.com/rubenAlbuquerque"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    Github
                                                </a>
                                            </button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function About() {
    const imagesInfo = {
        image_1: {
            key: 1,
            src: image,
            alt: "Logo",
            degres: 0,
        },
        image_4: {
            key: 2,
            src: image4,
            alt: "Logo",
            degres: 5,
        },
        image_2: {
            key: 3,
            src: image2,
            alt: "Logo",
            degres: 5,
        },
        image_3: {
            key: 4,
            src: image3,
            alt: "Logo",
            degres: -5,
        },
    };

    const experiences = [
        {
            icon: "https://source.unsplash.com/random/100x100",
            title: "Experience 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            icon: "https://source.unsplash.com/random/100x100",
            title: "Experience 2",
            description:
                "Praesent eget ipsum nec justo consectetur scelerisque.",
        },
        // Add more experiences...
    ];
    const events = [
        {
            // date: "Janeiro 2018 - Dezembro 2019",
            year: "1999",
            // mount: "Março",
            icon: baby,

            title: "Born",
            description:
                " in Lisbon, Portugal, a city full of history, culture, and scenic beauty! ",
        },
        {
            year: "2006",
            icon: "online",
            title: "Exploring the Internet",
            description:
                "I was fortunate to explore the internet at the age of 10 using a 28.9KBit modem. I was absolutely mind-blown 🤯",
        },
        {
            year: "2012",
            icon: "computer",
            title: "First Computer",
            description: "I got my first computer 😂",
        },
        {
            year: "2016",
            icon: "code",
            title: "First Line of Code",
            description: "Built my first code for a media player with C#",
        },
        {
            year: "2017",
            icon: "graduation-cap",
            title: "Graduated High School",
            description:
                "Completed my last three years at a High-school for Technology and Media in Germany. Shortly after, I found myself working different jobs, trying to figure out what I wanted to do.",
        },
        {
            year: "2017",
            icon: "university",
            title: "Started College in Bioinformatics",
            description: "Enrolled in the Barreiro College for Bioinformatics.",
        },
        {
            year: "2018",
            icon: "code",
            title: "Web Development",
            description: "Built my first websites using HTML, CSS, and JS. 🙃",
        },
        {
            year: "2018",
            icon: "travel",
            title: "Visit to Paris",
            description: "Had a memorable trip to Paris.",
        },
        {
            year: "2019",
            icon: "code",
            title: "Coding Skills",
            description:
                "Pursued my interests in web development & tech professionally. Completed the FreeCodeCamp Front-end certification.",
        },
        {
            year: "2020",
            icon: "work",
            title: "Internship at Germano de Sousa",
            description: "Worked as an IT intern at Germano de Sousa.",
        },
        {
            year: "2020",
            icon: "graduation-cap",
            title: "Graduated in Bioinformatics",
            description: "Completed my bachelor's degree in Bioinformatics.",
        },
        {
            year: "2021",
            icon: "university",
            title: "Started Master's in Computer Science and Multimedia",
            description:
                "Began my master's program in Computer Science and Multimedia.",
        },
        {
            year: "2023",
            icon: "website",
            title: "Personal Website",
            description:
                "Decided to build my personal website with React and Tailwind CSS.",
        },
    ];

    const [images, setImages] = useState(Object.values(imagesInfo));
    // const isLastElement = (index) => index === images.length - 1;
    // const [showDescription, setShowDescription] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const [scrollX, setScrollX] = useState(0);

    // Function to handle the scroll
    const handleScroll = (scrollOffset) => {
        const container = document.querySelector(".flex"); // Replace '.flex' with the appropriate class to target the scrolling container
        if (container) {
            const newScrollX = scrollX + scrollOffset;
            setScrollX(newScrollX);
            container.scroll({ left: newScrollX, behavior: "smooth" });
        }
    };

    const handleCardClick = (selectedImage) => {
        setImages((prevImages) => {
            // remove selectedImage
            const filteredImages = prevImages.filter(
                (image) => image !== selectedImage
            );
            // add selectedImage to the end of the array
            return [...filteredImages, selectedImage];
        });
    };
    return (
        <section
            className="about pt-10 container mx-auto px-20 "
            id="about"
            key="about">
            {/* about */}
            <div className="flex flex-col justify-center items-center p-5 ">
                <h1 className="about-title text-4xl font-bold font-inter text-gray-800">
                    About me
                </h1>
            </div>
            <div className="xl:flex xl:items-center xl:justify-center ">
                {/* images */}
                <div className="xl:w-5/12 mx-10 my-20 flex items-center justify-center">
                    <div className="swiper ">
                        {Object.keys(images).map((key, index) => {
                            const image = images[key];

                            return (
                                <div
                                    className="card bg-gray-200 "
                                    style={{
                                        "--i": index,
                                        "--deg": image.degres,
                                        transform: `translateZ(calc(-10px * var(--i)))
                                                    translateY(calc(0px * var(--i)))
                                                    rotate(calc(var(--deg) * 1deg  * var(--i)))`,
                                    }}
                                    key={image.key}
                                    onClick={() => handleCardClick(image)}>
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="object-top"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* info - texto */}
                <div className=" xl:w-6/12 py-5 pr-5 pl-5">
                    <div className="flex flex-row items-center">
                        <div className="col m-auto">
                            <h1
                                className="primary
                            text-4xl font-extrabold tracking-tighter text-center">
                                24
                            </h1>
                            <p
                                className="text-[15px] font-semibold tracking-tight text-center
                            text-gray-400 d:text-gray-300/80 ">
                                Years Old
                            </p>
                        </div>
                        <div className="col m-auto">
                            <h1
                                className="primary
                            text-4xl font-extrabold tracking-tighter text-center">
                                1+
                            </h1>
                            <p
                                className="text-[15px] font-semibold tracking-tight text-center
                            text-gray-400 d:text-gray-300/80 ">
                                Years Dev
                            </p>
                        </div>
                        <div className="col m-auto">
                            <h1
                                className="primary
                            text-4xl font-extrabold tracking-tighter text-center">
                                4510
                            </h1>
                            <p
                                className="text-[15px] font-semibold tracking-tight text-center
                            text-gray-400 d:text-gray-300/80 ">
                                Commits
                            </p>
                        </div>
                        {/* Repositorios?? */}
                        {/* <div className="col m-auto">
                            <h1
                                className="bg-gradient-to-r text-blue-500 bg-clip-text 
                            text-4xl font-extrabold tracking-tighter text-transparent text-center">
                                5
                            </h1>
                            <p
                                className="text-[15px] font-semibold tracking-tight text-center
                            text-gray-400 d:text-gray-300/80truncate overflow-ellipsis">
                                Completed projects
                            </p>
                        </div> */}
                        <div className="col m-auto">
                            <h1
                                className="bg-gradient-to-r primary bg-clip-text 
                            text-4xl font-extrabold tracking-tighter text-center ">
                                7
                            </h1>
                            <p
                                className="text-[15px] font-semibold tracking-tight text-center
                            text-gray-400 d:text-gray-300/80 truncate overflow-ellipsis">
                                Countries visited
                            </p>
                        </div>
                        {/* Número de países visitados, Número de projetos concluídos */}
                    </div>

                    <main
                        // className="about-text px-5 text-[18px] font-medium text-justify pt-5
                        // tracking-tight max-w-3xl leading-relaxed text-gray-500 d:text-gray-100/70 ">
                        className="about-text px-5 text-justify pt-5 
                        secondary sm:text-[16px] 2xl:text-[18px]">
                        <p>
                            I'm a 22 years old student from Portugal, currently
                            studying Computer Engineering at the University of
                            Minho. I'm passionate about technology and
                            everything that surrounds it. I'm always looking for
                            new challenges and opportunities to learn and
                            improve my skills. I'm a very curious person and
                            that's why I'm always looking for new things to
                            learn and new projects to work on. I'm a very
                            dedicated person and I always try to give my best in
                            everything I do.
                        </p>
                        <p>
                            I'm a 22 years old student from Portugal, currently
                            studying Computer Engineering at the University of
                            Minho. I'm passionate about technology and
                            everything that surrounds it. I'm always looking for
                            new challenges and opportunities to learn and
                            improve my skills. <br />
                        </p>

                        <div className="flex items-center justify-end mt-6 space-x-6">
                            <button
                                className="flex items-center justify-center py-2 px-6 text-[16px]
                            rounded-md primaryButtonh bg-transparent text-gray-500 border-2 
                        border-gray-500 ml-6 hover:text-gray-900 transition-colors">
                                <img
                                    src={linkedin}
                                    alt="Logo"
                                    className="w-8 h-8 mr-3"
                                />
                                <a
                                    href="https://www.linkedin.com/in/rubenalbuquerque/"
                                    target="_blank"
                                    rel="noreferrer">
                                    Linkedin
                                </a>
                            </button>
                            <button
                                className="flex items-center justify-center py-2 px-7 text-[16px]
                            rounded-md primaryButtonh bg-transparent text-gray-500 border-2 
                        border-gray-500 ml-6 hover:text-gray-900 transition-colors">
                                <img
                                    src={github}
                                    alt="Logo"
                                    className="w-8 h-8 mr-3"
                                />
                                <a
                                    href="https://github.com/rubenAlbuquerque"
                                    target="_blank"
                                    rel="noreferrer">
                                    Github
                                </a>
                            </button>
                        </div>
                    </main>
                </div>
            </div>
            {/* statistics and text */}

            {/* pontos da cronologia */}
            {/* <div className="absolute top-0 left-0 h-5 w-[20px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div> */}
            <section className="bg-gray-100/40 py-6 rounded-lg">
                <div className="max-w-full mx-auto px-1 sm:px-6 lg:px-3 ">
                    <div
                        className="flex justify-center overflow-x-auto bg-gray-0 rounded-lg py-5 px-5
                    first-letter:scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500">
                        <button
                            // className=""
                            onClick={() => handleScroll(-150)} // Scroll left by 150 pixels (or adjust the value as needed)
                            className=" flex items-center justify-center bg-white rounded-full w-10 h-10 shadow-md hover:shadow-lg focus:outline-none">
                            <FaChevronLeft size={30} />
                        </button>
                        <h2 className="inter text-3xl font-bold text-gray-800 text-center mx-10">
                            My Timeline
                        </h2>
                        <button
                            onClick={() => handleScroll(150)} // Scroll right by 150 pixels (or adjust the value as needed)
                            className="flex items-center justify-center bg-white rounded-full w-10 h-10 shadow-md hover:shadow-lg focus:outline-none">
                            <FaChevronRight size={30} />
                        </button>
                    </div>

                    <div
                        className="flex justify-center overflow-x-auto bg-gray-0 rounded-lg py-5 px-2
                    first-letter:scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500">
                        <div className="relative inline-flex w-full">
                            <ul className="flex ">
                                {events.map((event, index) => (
                                    <li
                                        className="relative"
                                        key={index}
                                        onMouseEnter={() =>
                                            setHoveredIndex(index)
                                        }
                                        onMouseLeave={() =>
                                            setHoveredIndex(null)
                                        }>
                                        <div
                                            className="absolute top-6 left-24 h-2.5 w-[210px] 
                                            bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] 
                                            bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>

                                        <div className="w-52 h-72 ">
                                            <header className="flex justify-center ">
                                                <div>
                                                    <div
                                                        className={`inter w-10 h-6 flex items-center justify-center ${
                                                            event.year === ""
                                                                ? "bg-transparent "
                                                                : "bg-transparent"
                                                        }`}>
                                                        <span className="text-[13px] font-medium leading-relaxed tracking-tight text-gray-500">
                                                            {event.year}
                                                        </span>
                                                    </div>

                                                    {hoveredIndex === index && (
                                                        <div className="w-10 flex items-center justify-center">
                                                            <div className="h-[60px] w-[3px] rounded-lg bg-sky-600"></div>
                                                        </div>
                                                    )}
                                                    {hoveredIndex !== index && (
                                                        <div className="w-10 flex items-center justify-center">
                                                            <div className="h-[30px] w-[2px] rounded-lg bg-gray-500 selected:bg-sky-500"></div>
                                                        </div>
                                                    )}

                                                    <div className="w-10 flex items-center justify-center">
                                                        <div className=" rounded-lg">
                                                            <img
                                                                src={event.icon}
                                                                style={{
                                                                    height: "20px",
                                                                    width: "20px",
                                                                }}
                                                                alt="Baby Born"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </header>
                                            <main className="w-52 flex flex-col items-center justify-center py-3">
                                                <div className="bg-transparent text-center">
                                                    {hoveredIndex !== index && (
                                                        <h1
                                                            className="inter text-[16px] whitespace-nowrap font-semibold 
                                                        tracking-tight 
                                                    text-gray-800 d:text-gray-100">
                                                            {event.title}
                                                        </h1>
                                                    )}

                                                    {hoveredIndex === index && (
                                                        <div>
                                                            <h1
                                                                className="inter primary text-[18px] whitespace-nowrap font-semibold 
                                                        tracking-tight 
                                                    text-gray-800 d:text-gray-100">
                                                                {event.title}
                                                            </h1>

                                                            <p
                                                                className=" inter
                                                        text-[14px] font-medium leading-relaxed tracking-tight text-gray-500">
                                                                {/* // opacity-0 group-hover:opacity-100"> */}
                                                                {
                                                                    event.description
                                                                }
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </main>
                                        </div>
                                    </li>
                                ))}
                                <header className="flex justify-center w-52">
                                    <div>
                                        <div className=" flex items-center justify-center">
                                            <span className="text-sm text-center font-semibold text-gray-500 ">
                                                Today
                                            </span>
                                        </div>

                                        <div className=" flex items-center justify-center">
                                            <div className="h-[30px] w-[2px]  rounded-lg bg-gray-500  selected:bg-sky-500"></div>
                                        </div>
                                    </div>
                                </header>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

function Projects({ reff }) {
    console.log(reff);
    const image = "https://source.unsplash.com/random/800x1200";

    const projectsInfo = [
        {
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://source.unsplash.com/random/800x1200",
            link: "https://source.unsplash.com/random/800x1200",
            tech: ["React", "Tailwind", "Firebase"],
            githubLink: "https://github.com/rubenmoya/rubenmoya.com",
            liveLink: "https://rubenmoya.com",
        },
        {
            title: "Project 2",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://source.unsplash.com/random/800x1200",
            link: "https://source.unsplash.com/random/800x1200",
            tech: ["React", "Tailwind", "Firebase"],
            githubLink: "https://github.com/rubenmoya/rubenmoya.com",
            liveLink: "https://rubenmoya.com",
        },
        {
            title: "Project 3",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://source.unsplash.com/random/800x1200",
            link: "https://source.unsplash.com/random/800x1200",
            tech: ["React", "Tailwind", "Firebase"],
            githubLink: "https://github/3",
            liveLink: "https://rubenmoya.com",
        },
        {
            title: "Project 3",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://source.unsplash.com/random/800x1200",
            link: "https://source.unsplash.com/random/800x1200",
            tech: ["React", "Tailwind", "Firebase"],
            githubLink: "https://github/3",
            liveLink: "https://rubenmoya.com",
        },
        {
            title: "Project 3",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            image: "https://source.unsplash.com/random/800x1200",
            link: "https://source.unsplash.com/random/800x1200",
            tech: ["React", "Tailwind", "Firebase"],
            githubLink: "https://github/3",
            liveLink: "https://rubenmoya.com",
        },
    ];

    return (
        <section ref={reff} className="#projects  mt-0">
            <div className="flex flex-col justify-center items-center pt-10 pb-5">
                <h1 className="about-title text-4xl font-bold text-gray-800">
                    Projects
                    {/* "<projects>" */}
                </h1>
            </div>

            <div className=" p-0 ">
                <div className="w-9/12 mx-auto my-5">
                    <h1
                        className="text-2xl font-bold text-gray-800 tracking-tighter pb-1
                    border-b border-gray-600">
                        <span className="text-red-700">&lt;</span>
                        Web developer Projects
                        <span className="text-red-700">/&gt;</span>
                    </h1>

                    <main className=" mt-0 ">
                        <div className="">
                            <ul className="flex flex-row gap-4 overflow-x-auto p-5">
                                {projectsInfo.map((project, index) => (
                                    <li
                                        key={index}
                                        className="w-80 min-w-80 flex-shrink-0 
                                        border border-gray-500/90 rounded-lg">
                                        <div className="w-full">
                                            <img
                                                src={project.image}
                                                alt=""
                                                className="rounded-t-lg object-cover object-top"
                                            />
                                        </div>
                                        <div className="px-2">
                                            <h1 class="text-2xl font-bold inter primary tracking-tight pt-2">
                                                {project.title}
                                            </h1>
                                            <div className="py-2">
                                                {project.tech.map(
                                                    (tech, index) => (
                                                        <button
                                                            class="py-1 px-3 rounded border text-xs border-blue-950 mr-1 font-medium"
                                                            key={index}>
                                                            <a
                                                                href={
                                                                    project.githubLink
                                                                }
                                                                target="_blank"
                                                                class="flex flex-row justify-center items-center"
                                                                rel="noreferrer">
                                                                {tech}
                                                            </a>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                            <p class="inter secondary line-clamp-5 text-sm">
                                                {project.description}
                                                {project.description}
                                            </p>
                                            <div class="flex flex-row justify-end py-3">
                                                <button class="rounded border-0 border-blue-950 hover:shadow-sm hover:bg-sky-600 bg-blue-400 text-black py-0 px-3 mr-3 text-sm font-semibold flex items-center justify-center">
                                                    <FontAwesomeIcon
                                                        class="w-4 h-4 mr-2"
                                                        icon={
                                                            faArrowUpRightFromSquare
                                                        }
                                                    />
                                                    Live Demo
                                                </button>
                                                <button class="py-1 px-2 rounded border border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-600/30">
                                                    <a
                                                        href={
                                                            project.githubLink
                                                        }
                                                        target="_blank"
                                                        class="flex flex-row justify-center items-center text-sm"
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
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>
                </div>

                <div className="w-9/12 mx-auto my-5">
                    <h1
                        className="text-2xl font-bold text-gray-800 tracking-tighter pb-1
                    border-b border-gray-600">
                        <span className="text-red-700">&lt;</span>
                        Data Scientist Projects
                        <span className="text-red-700">/&gt;</span>
                    </h1>

                    <main className=" mt-0 ">
                        <div className="">
                            <ul className="flex flex-row gap-4 overflow-x-auto p-5">
                                {projectsInfo.map((project, index) => (
                                    <li
                                        key={index}
                                        className="w-80 min-w-80 flex-shrink-0 
                                        border border-gray-500/90 rounded-lg">
                                        <div className="w-full">
                                            <img
                                                src={project.image}
                                                alt=""
                                                className="rounded-t-lg object-cover object-top"
                                            />
                                        </div>
                                        <div className="px-2">
                                            <h1 class="text-2xl font-bold inter primary tracking-tight pt-2">
                                                {project.title}
                                            </h1>
                                            <div className="py-2">
                                                {project.tech.map(
                                                    (tech, index) => (
                                                        <button
                                                            class="py-1 px-3 rounded border text-xs border-blue-950 mr-1 font-medium"
                                                            key={index}>
                                                            <a
                                                                href={
                                                                    project.githubLink
                                                                }
                                                                target="_blank"
                                                                class="flex flex-row justify-center items-center"
                                                                rel="noreferrer">
                                                                {tech}
                                                            </a>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                            <p class="inter secondary line-clamp-5 text-sm">
                                                {project.description}
                                                {project.description}
                                            </p>
                                            <div class="flex flex-row justify-end py-3">
                                                <button class="rounded border-0 border-blue-950 hover:shadow-sm hover:bg-sky-600 bg-blue-400 text-black py-0 px-3 mr-3 text-sm font-semibold flex items-center justify-center">
                                                    <FontAwesomeIcon
                                                        class="w-4 h-4 mr-2"
                                                        icon={
                                                            faArrowUpRightFromSquare
                                                        }
                                                    />
                                                    Live Demo
                                                </button>
                                                <button class="py-1 px-2 rounded border border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-600/30">
                                                    <a
                                                        href={
                                                            project.githubLink
                                                        }
                                                        target="_blank"
                                                        class="flex flex-row justify-center items-center text-sm"
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
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>
                </div>
                <div className="w-9/12 mx-auto my-5">
                    <h1
                        className="text-2xl font-bold text-gray-800 tracking-tighter pb-1
                    border-b border-gray-600">
                        <span className="text-red-700">&lt;</span>
                        Fun Projects
                        <span className="text-red-700">/&gt;</span>
                    </h1>

                    <main className=" mt-0 ">
                        <div className="">
                            <ul className="flex flex-row gap-4 overflow-x-auto p-5">
                                {projectsInfo.map((project, index) => (
                                    <li
                                        key={index}
                                        className="w-80 min-w-80 flex-shrink-0 
                                        border border-gray-500/90 rounded-lg">
                                        <div className="w-full">
                                            <img
                                                src={project.image}
                                                alt=""
                                                className="rounded-t-lg object-cover object-top"
                                            />
                                        </div>
                                        <div className="px-2">
                                            <h1 class="text-2xl font-bold inter primary tracking-tight pt-2">
                                                {project.title}
                                            </h1>
                                            <div className="py-2">
                                                {project.tech.map(
                                                    (tech, index) => (
                                                        <button
                                                            class="py-1 px-3 rounded border text-xs border-blue-950 mr-1 font-medium"
                                                            key={index}>
                                                            <a
                                                                href={
                                                                    project.githubLink
                                                                }
                                                                target="_blank"
                                                                class="flex flex-row justify-center items-center"
                                                                rel="noreferrer">
                                                                {tech}
                                                            </a>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                            <p class="inter secondary line-clamp-5 text-sm">
                                                {project.description}
                                                {project.description}
                                            </p>
                                            <div class="flex flex-row justify-end py-3">
                                                <button class="rounded border-0 border-blue-950 hover:shadow-sm hover:bg-sky-600 bg-blue-400 text-black py-0 px-3 mr-3 text-sm font-semibold flex items-center justify-center">
                                                    <FontAwesomeIcon
                                                        class="w-4 h-4 mr-2"
                                                        icon={
                                                            faArrowUpRightFromSquare
                                                        }
                                                    />
                                                    Live Demo
                                                </button>
                                                <button class="py-1 px-2 rounded border border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-600/30">
                                                    <a
                                                        href={
                                                            project.githubLink
                                                        }
                                                        target="_blank"
                                                        class="flex flex-row justify-center items-center text-sm"
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
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

function Contact({ reff }) {
    return (
        <section ref={reff} className="#contact h-screen bg-red-200">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer>
            <div className="">
                <div
                    class="container mx-auto my-10 py-10
                text-gray-600 text-[15px] font-semibold tracking-tight text-center
                d:text-gray-300/80 truncate overflow-ellipsis">
                    <h3 class="text-blue-500 font-bold mb-2 text-[18px] tracking-wide">
                        What's Next?
                    </h3>
                    <h1 className="text-5xl font-bold mb-2">Get In Touch</h1>
                    <p className="">I'm available for freelance projects.</p>
                    <p className=" mb-4">
                        Contact me to discuss your project needs.
                    </p>
                    {/*                     
                    <div className="flex items-center justify-center mb-10">
                        <button
                            className="bg-transparent  text-gray-700 py-2 px-6  border-2
                    border-gray-700 rounded-lg font-semibold
                    hover:text-gray-900 transition-colors flex items-center justify-center">
                            
                            <img
                                src={linkedin}
                                alt="Logoo"
                                className="w-6 h-6 bg-transparent mr-1"
                                href="#home"
                            />
                            Linkedin
                        </button>
                        <button
                            className="bg-transparent  text-gray-700 py-2 px-6 border-2
                    border-gray-700 rounded-lg font-semibold
                    hover:text-gray-900 transition-colors flex items-center justify-center">
                            
                            <img
                                src={github}
                                alt="Logoo"
                                className="w-6 h-6 bg-transparent mr-1"
                                href="#home"
                            />
                            Github
                        </button>
                    </div> */}

                    <button
                        className="font-medium text-white
                                bg-gray-800 rounded-lg  py-3 px-12
                            hover:bg-gray-900 border-2 border-gray-500">
                        <a href="/">Let's Work</a>
                    </button>
                </div>
            </div>
            <div className="bg-gray-800 text-white py-6">
                <div
                    class="container mx-auto flex flex-col 
                lg:flex-row justify-between items-center px-32">
                    <div class="mb-4 lg:mb-0">
                        <p class="text-gray-400">
                            &copy; 2023 Rúben Albuquerque. All rights reserved.
                        </p>
                    </div>
                    <ul class="flex space-x-4">
                        <li>
                            <a
                                href="#home"
                                class="text-gray-400 hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                class="text-gray-400 hover:text-white">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

function App() {
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);

    const scrollToSection = (section) => {
        console.log(section);
        section.current.scrollIntoView({ behavior: "smooth" });

        let ref;

        if (section === "Intro") {
            ref = introRef.current;
        } else if (section === "About") {
            ref = aboutRef.current;
        } else if (section === "Projects") {
            ref = projectsRef.current;
            console.log(ref);
        }

        console.log(ref);
        if (ref) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="App">
            <Navbar
            // scroll={scrollToSection}
            // introrefs={introRef}
            // aboutRef={aboutRef}
            // projref={projectsRef}
            />
            <Intro ref={introRef} />
            {/* <About ref={aboutRef} /> */}
            <About ref={aboutRef} />
            {/* Smal viedo (trailer) on the projects image (demo and source) */}
            <Projects ref={projectsRef} />
            {/* Projects alternatives/small  - Fun projects*/}
            {/* <Contact /> */}
            <Footer />
        </div>
    );
}

export default App;
