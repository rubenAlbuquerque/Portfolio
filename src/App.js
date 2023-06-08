import { useState, useEffect, useRef } from "react";
import logo from "./logoBG.png";
import image from "./imagens/Capturar1.JPG";
import image2 from "./imagens/myphoto2.jpg";
import image3 from "./imagens/myphoto3.jpg";
import image4 from "./imagens/myphoto4.jpg";

import codephoto from "./imagens/index_code.png";
import github from "./imagens/icons/github.png";
import linkedin from "./imagens/icons/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    // faMoon,
    faSun,
    faPlus,
    // faGreaterThan,
    // faTerminal,
    faArrowRight,
    // faGithub,
    // faLinkedin,
    // <FontAwesomeIcon icon="fa-solid fa-rectangle-terminal" />
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import React from "react";

function Navbar({ scroll, introrefs, aboutrefs, projectsrefs }) {
    // data
    const links = [
        { name: "Home", ref: introrefs, active: true },
        { name: "About", ref: aboutrefs },
        { name: "Projects", ref: projectsrefs },
        { name: "Contact", ref: "#Contact" },
    ];

    // const homeRef = useRef(null);
    // const aboutRef = useRef(null);
    // const projectsRef = useRef(null);
    // const contactRef = useRef(null);

    // const scroolToSection = (ref) => {
    //     ref.current.scrollIntoView({ behavior: "smooth" });
    // };

    return (
        <header className=" h-20 mx-auto">
            <nav className="nav flex justify-between items-center border-b border-gray-800/10">
                <div className="flex nav-logo justify-between items-center py-5 cursor-pointer">
                    <img
                        src={logo}
                        alt="Logoo"
                        className="w-10 h-10 "
                        href="#home"
                    />
                    <h1 className="text-3xl font-sans text-gray-800">úben</h1>
                </div>

                <ul className="list-lisks flex list-none space-x-5 ">
                    {/* map in links */}
                    {links.map((link, index) => (
                        <li
                            className="links"
                            key={index}
                            onClick={() => scroll(link.ref)}>
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
                    <button className="button-contactme">
                        {/*  ring-offset-2 ring-opacity-50 */}
                        Contact Me
                    </button>
                </div>
            </nav>
        </header>
    );
}

function Intro() {
    return (
        <section
            // ref={ref}
            className="container mx-auto px-32 pb-32">
            <div
                className="Intro text-black container mx-auto 
                flex items-center justify-center pr-96">
                <div
                    className="relative flex items-center 
                justify-center ">
                    <div className="Intro-Info max-w-3xl p-6">
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

                        {/* <ul className="sm:scrollbar-none -mx-4 mb-2 flex items-center gap-6 overflow-x-auto px-4 pb-2 text-[15px] font-medium">
                        <li className="flex items-center gap-2 text-gray-500 d:text-gray-400">
                           <img align="left" alt="Python" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

                            Next.js
                        </li>
                        <li className="flex items-center gap-2 text-gray-500 d:text-gray-400">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                role="img"
                                viewBox="0 0 24 24"
                                className="h-7 w-7 text-gray-400 d:text-gray-300/80"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <title></title>
                                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path>
                            </svg>
                            Node.js
                        </li>
                        <li className="flex items-center gap-2 text-gray-500 d:text-gray-400">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                role="img"
                                viewBox="0 0 24 24"
                                className="h-7 w-7 text-gray-400 d:text-gray-300/80"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <title></title>
                                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                            </svg>
                            Tailwind
                        </li>
                        <li className="flex items-center gap-2 text-gray-500 d:text-gray-400">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                role="img"
                                viewBox="0 0 24 24"
                                className="h-7 w-7 text-gray-400 d:text-gray-300/80"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <title></title>
                                <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"></path>
                            </svg>
                            Shopify
                        </li>
                    </ul> */}

                        <div className="intro-description pr-32">
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
                    <div className="myblur "></div>
                    <div className="Intro-Code max-w-lg rounded-lg absolute right-[-50%] top-[30%]  ">
                        <div className="bg-header bg-gray-800 flex items-center border-b-0 border-gray-800 px-4 rounded-t-lg ">
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
                                <label className="white"> WelcomeProps </label>
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
                                <label className="white">WelcomeProps</label>
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
                                <label className="red">export default </label>
                                <label className="white">Welcome;</label>
                                <br />
                            </code>
                        </pre>
                    </div>

                    <div className="myblur-terminal "></div>
                    <div
                        className="terminal max-w-lg rounded-lg absolute right-[-60%] top-[15%]
                    bg-gray-900 bg-opacity-80 w-80 h-60 overflow-hidden">
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

    const [images, setImages] = useState(Object.values(imagesInfo));

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
        <section className="about h-screen container mx-auto px-20" id="about">
            {/* about */}
            <div className="flex flex-col justify-center items-center p-5 ">
                <h1 className="about-title text-4xl font-bold font-inter text-gray-800">
                    About me
                </h1>
            </div>
            <div className="flex flex-row justify-center p-5 bmb-10">
                {/* images */}
                <div className="w-6/12 flex items-center justify-center">
                    <div className="swiper">
                        {Object.keys(images).map((key, index) => {
                            const image = images[key];
                            // const i = index % 2 === 0 ? -1 : 1;
                            // const i = index;
                            // console.log(image.degres);

                            return (
                                <div
                                    className="card"
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
                                        className="w-30"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-6/12 py-5 pr-20 pl-5">
                    <div className="flex flex-row items-center">
                        <div className="col m-auto">
                            <h1
                                className="text-blue-500
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
                                className="text-blue-500
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
                                className="text-blue-500
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
                                className="bg-gradient-to-r text-blue-500 bg-clip-text 
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
                    {/* <header
                        className="grid max-w-xl grid-cols-2 gap-0 text-center 
                    sm:grid-cols-4 sm:text-left">
                        <figure
                            data-tip="1180649576 seconds"
                            className="cursor-help select-none spacing-1"
                            currentitem="false">
                            <span
                                className="bg-gradient-to-r text-blue-500 bg-clip-text 
                            text-4xl font-extrabold tracking-tighter text-transparent">
                                24
                            </span>
                            <figcaption
                                className="text-[15px] font-semibold tracking-tight 
                            text-gray-400 d:text-gray-300/80">
                                Years Old
                            </figcaption>
                        </figure>
                        <figure
                            data-tip="First line of code written in 1997"
                            className="cursor-help select-none spacing-1"
                            currentitem="false">
                            <span className="bg-gradient-to-r text-blue-500 bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent">
                                1+
                            </span>
                            <figcaption
                                className="text-[15px] font-semibold tracking-tight 
                            text-gray-400 d:text-gray-300/80">
                               1+ Years Web Dev
                            </figcaption>
                        </figure>
                        <figure
                            data-tip="Who also loves running."
                            className="cursor-help select-none spacing-1"
                            currentitem="false">
                            <span
                                className="bg-gradient-to-r text-blue-500 
                            bg-clip-text text-4xl font-extrabold tracking-tighter 
                            text-transparent">
                             1+ Years Web Dev
                                1Amazing dog
                            </span>
                            <figcaption
                                className="text-[15px] font-semibold tracking-tight 
                            text-gray-400 d:text-gray-300/80">
                                Amazing dog
                            </figcaption>
                        </figure>
                        <figure
                            data-tip="111 GitHub Stars"
                            className="cursor-help select-none spacing-1"
                            currentitem="false">
                            <span
                                className="bg-gradient-to-r text-blue-500 
                            bg-clip-text text-4xl font-extrabold tracking-tighter 
                            text-transparent">
                             1+ Years Web Dev
                                1 Amazing dog
                                4 510 Commits
                            </span>
                            <figcaption
                                className="text-[15px] font-semibold tracking-tight 
                            text-gray-400 d:text-gray-300/80">
                                Commits
                            </figcaption>
                        </figure>
                    </header> */}
                    {/* <main class="tracking tight max-w-3xl leading-relaxed text-gray-500 d:text-gray-100/70 [&amp;>p+p]:mt-4">
                        <p>
                            I'm a Cape Town based Web Developer and
                            Entrepreneur. My focus area for the past few years
                            has been front-end development with{" "}
                            <strong>Next.js</strong>,{" "}
                            <strong>Typescript</strong> and{" "}
                            <strong>TailwindCSS</strong> to create beautiful
                            user- and developer experiences that bring delight.
                        </p>
                        <p>
                            I’ve spent most of my life deeply interested in
                            technology and food, continuously building things
                            with both. As a teenager, I was a classic computer
                            nerd, spending most of my times messing with the
                            computer, doing 1 of 4 things: Modding games and
                            figuring things out. Tinkering with hardware,
                            building computers. Developing websites with
                            FrontPage 98 and Flash. And of course, playing
                            games.
                        </p>
                        <p>Most of that is still true today.</p>
                    </main> */}
                    <main
                        // className="about-text px-5 text-[18px] font-medium text-justify pt-5
                        // tracking-tight max-w-3xl leading-relaxed text-gray-500 d:text-gray-100/70 ">
                        className="about-text text-[18px] px-5 text-justify pt-5 
                        text-gray-700">
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
                        {/* <div className="flex  items-center p-4 space-x-7"> */}
                        {/* <button
                                className="flex items-center py-1 px-2
                            bg-transparent text-gray-500 border-2 
                        border-gray-500 font-medium rounded">
                                <img
                                    src={linkedin}
                                    alt="Logoo"
                                    className="w-8 h-8 mr-1 "
                                    href="#home"
                                />{" "}
                                <a
                                    href="https://www.linkedin.com/in/rubenalbuquerque/"
                                    target="_blank"
                                    rel="noreferrer">
                                    Linkedin
                                </a>
                            </button>
                            <button
                                className="flex items-center py-1 px-2
                            bg-slate-300 bg-transparent text-gray-500 border-2 
                        border-gray-500font-medium rounded">
                                <img
                                    src={github}
                                    alt="Logoo"
                                    className="w-8 h-8 mr-1"
                                    href="#home"
                                />{" "}
                                <a
                                    href="https://github.com/rubenAlbuquerque"
                                    target="_blank"
                                    rel="noreferrer">
                                    Github
                                </a>
                            </button> */}
                        {/* <a
                                href="/resume"
                                className="intro-resume bg-transparent text-gray-500 border-2 
                        border-gray-500 ml-6 rounded-lg
                         hover:text-gray-900 transition-colors">
                                Resume
                            </a> */}
                        {/* </div> */}
                        <div className="flex items-center mt-6 space-x-6">
                            <button
                                className="flex items-center justify-center py-2 px-4 text-[16px]
                            rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 
                            hover:text-gray-800 focus:outline-none focus:bg-gray-300 
                            focus:text-gray-800">
                                <img
                                    src={linkedin}
                                    alt="Logo"
                                    className="w-8 h-8 mr-2"
                                />
                                <a
                                    href="https://www.linkedin.com/in/rubenalbuquerque/"
                                    target="_blank"
                                    rel="noreferrer">
                                    Linkedin
                                </a>
                            </button>
                            <button
                                className="flex items-center justify-center py-2 px-4 text-[16px] 
                            rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 
                            hover:text-gray-800 focus:outline-none focus:bg-gray-300 
                            focus:text-gray-800">
                                <img
                                    src={github}
                                    alt="Logo"
                                    className="w-8 h-8 mr-2"
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
            <section className="max-w-full px-4 pb-16 md:px-8 bg-red-500">
                <div className="-mx-4 flex h-96 py-4 px-0 xl:mx-0">
                    <div className="relative">
                        <header className="absolute left-0 -translate-x-1/2 select-none text-xs font-semibold text-gray-400">
                            2015
                        </header>
                        <div
                            className="mt-6 grid"
                            style={{
                                gridTemplateColumns: "repeat(10, 120px)",
                            }}>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Restaurant Consultant
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white">
                                        <path
                                            fillRule="evenodd"
                                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Restaurant Consultant
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I left my full-time position early in
                                        2015 to focus on a Postgraduate diploma
                                        at UCT. I continued my work in a
                                        Consulting Role.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Co-founded SimplyStuck
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.796,9.982C20.849,5.357,16.729,2,12,2C6.486,2,2,6.486,2,12c0,4.729,3.357,8.849,7.982,9.796	c0.067,0.014,0.135,0.021,0.201,0.021c0.263,0,0.518-0.104,0.707-0.293l10.633-10.633C21.761,10.653,21.863,10.313,21.796,9.982z M11,18c0-0.545,0.055-1.088,0.162-1.612c0.105-0.515,0.263-1.02,0.466-1.5c0.201-0.476,0.45-0.934,0.737-1.359	c0.29-0.428,0.619-0.826,0.978-1.186c0.359-0.358,0.758-0.688,1.184-0.977c0.428-0.288,0.886-0.537,1.36-0.738	c0.481-0.203,0.986-0.36,1.501-0.466c0.704-0.145,1.442-0.183,2.17-0.134l-8.529,8.529C11.016,18.372,11,18.187,11,18z M4,12	c0-4.411,3.589-8,8-8c2.909,0,5.528,1.589,6.929,4.005c-0.655,0.004-1.31,0.068-1.943,0.198c-0.643,0.132-1.274,0.328-1.879,0.583	c-0.594,0.252-1.164,0.563-1.699,0.923c-0.533,0.361-1.03,0.771-1.479,1.22s-0.858,0.945-1.221,1.48	c-0.359,0.533-0.67,1.104-0.922,1.698c-0.255,0.604-0.451,1.235-0.583,1.878C9.068,16.643,9,17.32,9,18	c0,0.491,0.048,0.979,0.119,1.461C6.089,18.288,4,15.336,4,12z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Co-founded SimplyStuck
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        Started a Vinyl sticker business, while
                                        exploring the very interesting customer
                                        segment of students 👨‍ 🎓 It was part
                                        study, part real business, but somehow
                                        eventually faded &amp; failed as we had
                                        a team of 6 co-founders. Stick to 1 or 2
                                        if you can. 😉
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Got Engaged
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M201.837 53.087L177.547 21h55.676zM278.766 21l30.82 31.465L333.065 21h-54.298zm12.428 38.12L256 23.18l-35.25 35.985h70.5zm82.091 0l-23.511-30.855-23.003 30.9h46.57zM161.096 28.683L138.5 59.188h45.746zm51.248 48.242L256 196.821l43.69-119.896h-87.38zm-73.166 0l90.384 99.017-36.153-99.017h-54.231zm233.712 0h-54.23l-36.076 99.017zm-19.455 48.142l-29.059 31.838a154.298 154.298 0 0 1 85.786 138.119C410.14 380.008 340.995 449.197 256 449.197s-154.14-69.144-154.14-154.14a154.298 154.298 0 0 1 85.787-138.119L158.588 125.1a196.044 196.044 0 0 0-98.53 169.924C60.057 403.056 147.955 491 256 491c108.044 0 195.943-87.899 195.943-195.943a196.044 196.044 0 0 0-98.542-169.99z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Got Engaged
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I asked my then girlfriend, Elizabeth,
                                        to marry me. She said yes! I took her
                                        out for a super romantic dinner and
                                        popped the question in a full
                                        restaurant.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Graduated Postgraduate at UCT
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 640 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Graduated Postgraduate at UCT
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I went back to University in 2015 to
                                        advance with a Postgraduate Diploma in
                                        Business Management &amp;
                                        Entrepreneurship. 📚 👓
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Got Married
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M201.837 53.087L177.547 21h55.676zM278.766 21l30.82 31.465L333.065 21h-54.298zm12.428 38.12L256 23.18l-35.25 35.985h70.5zm82.091 0l-23.511-30.855-23.003 30.9h46.57zM161.096 28.683L138.5 59.188h45.746zm51.248 48.242L256 196.821l43.69-119.896h-87.38zm-73.166 0l90.384 99.017-36.153-99.017h-54.231zm233.712 0h-54.23l-36.076 99.017zm-19.455 48.142l-29.059 31.838a154.298 154.298 0 0 1 85.786 138.119C410.14 380.008 340.995 449.197 256 449.197s-154.14-69.144-154.14-154.14a154.298 154.298 0 0 1 85.787-138.119L158.588 125.1a196.044 196.044 0 0 0-98.53 169.924C60.057 403.056 147.955 491 256 491c108.044 0 195.943-87.899 195.943-195.943a196.044 196.044 0 0 0-98.542-169.99z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Got Married
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        If this Year wasn't enough. Liz and I
                                        decided to have a small ceremony with
                                        the closes friends &amp; family at a
                                        beautiful wine farm in Cape Town.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Restaurant Consultant
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white">
                                        <path
                                            fillRule="evenodd"
                                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Restaurant Consultant
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I left my full-time position early in
                                        2015 to focus on a Postgraduate diploma
                                        at UCT. I continued my work in a
                                        Consulting Role.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Co-founded SimplyStuck
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.796,9.982C20.849,5.357,16.729,2,12,2C6.486,2,2,6.486,2,12c0,4.729,3.357,8.849,7.982,9.796	c0.067,0.014,0.135,0.021,0.201,0.021c0.263,0,0.518-0.104,0.707-0.293l10.633-10.633C21.761,10.653,21.863,10.313,21.796,9.982z M11,18c0-0.545,0.055-1.088,0.162-1.612c0.105-0.515,0.263-1.02,0.466-1.5c0.201-0.476,0.45-0.934,0.737-1.359	c0.29-0.428,0.619-0.826,0.978-1.186c0.359-0.358,0.758-0.688,1.184-0.977c0.428-0.288,0.886-0.537,1.36-0.738	c0.481-0.203,0.986-0.36,1.501-0.466c0.704-0.145,1.442-0.183,2.17-0.134l-8.529,8.529C11.016,18.372,11,18.187,11,18z M4,12	c0-4.411,3.589-8,8-8c2.909,0,5.528,1.589,6.929,4.005c-0.655,0.004-1.31,0.068-1.943,0.198c-0.643,0.132-1.274,0.328-1.879,0.583	c-0.594,0.252-1.164,0.563-1.699,0.923c-0.533,0.361-1.03,0.771-1.479,1.22s-0.858,0.945-1.221,1.48	c-0.359,0.533-0.67,1.104-0.922,1.698c-0.255,0.604-0.451,1.235-0.583,1.878C9.068,16.643,9,17.32,9,18	c0,0.491,0.048,0.979,0.119,1.461C6.089,18.288,4,15.336,4,12z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Co-founded SimplyStuck
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        Started a Vinyl sticker business, while
                                        exploring the very interesting customer
                                        segment of students 👨‍ 🎓 It was part
                                        study, part real business, but somehow
                                        eventually faded &amp; failed as we had
                                        a team of 6 co-founders. Stick to 1 or 2
                                        if you can. 😉
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Got Engaged
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M201.837 53.087L177.547 21h55.676zM278.766 21l30.82 31.465L333.065 21h-54.298zm12.428 38.12L256 23.18l-35.25 35.985h70.5zm82.091 0l-23.511-30.855-23.003 30.9h46.57zM161.096 28.683L138.5 59.188h45.746zm51.248 48.242L256 196.821l43.69-119.896h-87.38zm-73.166 0l90.384 99.017-36.153-99.017h-54.231zm233.712 0h-54.23l-36.076 99.017zm-19.455 48.142l-29.059 31.838a154.298 154.298 0 0 1 85.786 138.119C410.14 380.008 340.995 449.197 256 449.197s-154.14-69.144-154.14-154.14a154.298 154.298 0 0 1 85.787-138.119L158.588 125.1a196.044 196.044 0 0 0-98.53 169.924C60.057 403.056 147.955 491 256 491c108.044 0 195.943-87.899 195.943-195.943a196.044 196.044 0 0 0-98.542-169.99z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Got Engaged
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I asked my then girlfriend, Elizabeth,
                                        to marry me. She said yes! I took her
                                        out for a super romantic dinner and
                                        popped the question in a full
                                        restaurant.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Graduated Postgraduate at UCT
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 640 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Graduated Postgraduate at UCT
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I went back to University in 2015 to
                                        advance with a Postgraduate Diploma in
                                        Business Management &amp;
                                        Entrepreneurship. 📚 👓
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Restaurant Consultant
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white">
                                        <path
                                            fillRule="evenodd"
                                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                {/* <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div> */}
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Restaurant Consultant
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I left my full-time position early in
                                        2015 to focus on a Postgraduate diploma
                                        at UCT. I continued my work in a
                                        Consulting Role.
                                    </p>
                                </main>
                            </section>
                        </div>
                    </div>
                    {/* <div className="relative">
                        <header className="absolute left-0 -translate-x-1/2 select-none text-xs font-semibold text-gray-400">
                            2016
                        </header>
                        <div
                            className="mt-6 grid"
                            style={{
                                gridTemplateColumns: "repeat(10, 120px)",
                            }}>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Restaurant Consultant
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white">
                                        <path
                                            fillRule="evenodd"
                                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Restaurant Consultant
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I left my full-time position early in
                                        2015 to focus on a Postgraduate diploma
                                        at UCT. I continued my work in a
                                        Consulting Role.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Co-founded SimplyStuck
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.796,9.982C20.849,5.357,16.729,2,12,2C6.486,2,2,6.486,2,12c0,4.729,3.357,8.849,7.982,9.796	c0.067,0.014,0.135,0.021,0.201,0.021c0.263,0,0.518-0.104,0.707-0.293l10.633-10.633C21.761,10.653,21.863,10.313,21.796,9.982z M11,18c0-0.545,0.055-1.088,0.162-1.612c0.105-0.515,0.263-1.02,0.466-1.5c0.201-0.476,0.45-0.934,0.737-1.359	c0.29-0.428,0.619-0.826,0.978-1.186c0.359-0.358,0.758-0.688,1.184-0.977c0.428-0.288,0.886-0.537,1.36-0.738	c0.481-0.203,0.986-0.36,1.501-0.466c0.704-0.145,1.442-0.183,2.17-0.134l-8.529,8.529C11.016,18.372,11,18.187,11,18z M4,12	c0-4.411,3.589-8,8-8c2.909,0,5.528,1.589,6.929,4.005c-0.655,0.004-1.31,0.068-1.943,0.198c-0.643,0.132-1.274,0.328-1.879,0.583	c-0.594,0.252-1.164,0.563-1.699,0.923c-0.533,0.361-1.03,0.771-1.479,1.22s-0.858,0.945-1.221,1.48	c-0.359,0.533-0.67,1.104-0.922,1.698c-0.255,0.604-0.451,1.235-0.583,1.878C9.068,16.643,9,17.32,9,18	c0,0.491,0.048,0.979,0.119,1.461C6.089,18.288,4,15.336,4,12z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Co-founded SimplyStuck
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        Started a Vinyl sticker business, while
                                        exploring the very interesting customer
                                        segment of students 👨‍ 🎓 It was part
                                        study, part real business, but somehow
                                        eventually faded &amp; failed as we had
                                        a team of 6 co-founders. Stick to 1 or 2
                                        if you can. 😉
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Got Engaged
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M201.837 53.087L177.547 21h55.676zM278.766 21l30.82 31.465L333.065 21h-54.298zm12.428 38.12L256 23.18l-35.25 35.985h70.5zm82.091 0l-23.511-30.855-23.003 30.9h46.57zM161.096 28.683L138.5 59.188h45.746zm51.248 48.242L256 196.821l43.69-119.896h-87.38zm-73.166 0l90.384 99.017-36.153-99.017h-54.231zm233.712 0h-54.23l-36.076 99.017zm-19.455 48.142l-29.059 31.838a154.298 154.298 0 0 1 85.786 138.119C410.14 380.008 340.995 449.197 256 449.197s-154.14-69.144-154.14-154.14a154.298 154.298 0 0 1 85.787-138.119L158.588 125.1a196.044 196.044 0 0 0-98.53 169.924C60.057 403.056 147.955 491 256 491c108.044 0 195.943-87.899 195.943-195.943a196.044 196.044 0 0 0-98.542-169.99z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Got Engaged
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I asked my then girlfriend, Elizabeth,
                                        to marry me. She said yes! I took her
                                        out for a super romantic dinner and
                                        popped the question in a full
                                        restaurant.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Graduated Postgraduate at UCT
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 640 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Graduated Postgraduate at UCT
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I went back to University in 2015 to
                                        advance with a Postgraduate Diploma in
                                        Business Management &amp;
                                        Entrepreneurship. 📚 👓
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Got Married
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M201.837 53.087L177.547 21h55.676zM278.766 21l30.82 31.465L333.065 21h-54.298zm12.428 38.12L256 23.18l-35.25 35.985h70.5zm82.091 0l-23.511-30.855-23.003 30.9h46.57zM161.096 28.683L138.5 59.188h45.746zm51.248 48.242L256 196.821l43.69-119.896h-87.38zm-73.166 0l90.384 99.017-36.153-99.017h-54.231zm233.712 0h-54.23l-36.076 99.017zm-19.455 48.142l-29.059 31.838a154.298 154.298 0 0 1 85.786 138.119C410.14 380.008 340.995 449.197 256 449.197s-154.14-69.144-154.14-154.14a154.298 154.298 0 0 1 85.787-138.119L158.588 125.1a196.044 196.044 0 0 0-98.53 169.924C60.057 403.056 147.955 491 256 491c108.044 0 195.943-87.899 195.943-195.943a196.044 196.044 0 0 0-98.542-169.99z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Got Married
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        If this Year wasn't enough. Liz and I
                                        decided to have a small ceremony with
                                        the closes friends &amp; family at a
                                        beautiful wine farm in Cape Town.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Restaurant Consultant
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white">
                                        <path
                                            fillRule="evenodd"
                                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Restaurant Consultant
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I left my full-time position early in
                                        2015 to focus on a Postgraduate diploma
                                        at UCT. I continued my work in a
                                        Consulting Role.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Co-founded SimplyStuck
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.796,9.982C20.849,5.357,16.729,2,12,2C6.486,2,2,6.486,2,12c0,4.729,3.357,8.849,7.982,9.796	c0.067,0.014,0.135,0.021,0.201,0.021c0.263,0,0.518-0.104,0.707-0.293l10.633-10.633C21.761,10.653,21.863,10.313,21.796,9.982z M11,18c0-0.545,0.055-1.088,0.162-1.612c0.105-0.515,0.263-1.02,0.466-1.5c0.201-0.476,0.45-0.934,0.737-1.359	c0.29-0.428,0.619-0.826,0.978-1.186c0.359-0.358,0.758-0.688,1.184-0.977c0.428-0.288,0.886-0.537,1.36-0.738	c0.481-0.203,0.986-0.36,1.501-0.466c0.704-0.145,1.442-0.183,2.17-0.134l-8.529,8.529C11.016,18.372,11,18.187,11,18z M4,12	c0-4.411,3.589-8,8-8c2.909,0,5.528,1.589,6.929,4.005c-0.655,0.004-1.31,0.068-1.943,0.198c-0.643,0.132-1.274,0.328-1.879,0.583	c-0.594,0.252-1.164,0.563-1.699,0.923c-0.533,0.361-1.03,0.771-1.479,1.22s-0.858,0.945-1.221,1.48	c-0.359,0.533-0.67,1.104-0.922,1.698c-0.255,0.604-0.451,1.235-0.583,1.878C9.068,16.643,9,17.32,9,18	c0,0.491,0.048,0.979,0.119,1.461C6.089,18.288,4,15.336,4,12z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Co-founded SimplyStuck
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        Started a Vinyl sticker business, while
                                        exploring the very interesting customer
                                        segment of students 👨‍ 🎓 It was part
                                        study, part real business, but somehow
                                        eventually faded &amp; failed as we had
                                        a team of 6 co-founders. Stick to 1 or 2
                                        if you can. 😉
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Got Engaged
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 512 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M201.837 53.087L177.547 21h55.676zM278.766 21l30.82 31.465L333.065 21h-54.298zm12.428 38.12L256 23.18l-35.25 35.985h70.5zm82.091 0l-23.511-30.855-23.003 30.9h46.57zM161.096 28.683L138.5 59.188h45.746zm51.248 48.242L256 196.821l43.69-119.896h-87.38zm-73.166 0l90.384 99.017-36.153-99.017h-54.231zm233.712 0h-54.23l-36.076 99.017zm-19.455 48.142l-29.059 31.838a154.298 154.298 0 0 1 85.786 138.119C410.14 380.008 340.995 449.197 256 449.197s-154.14-69.144-154.14-154.14a154.298 154.298 0 0 1 85.787-138.119L158.588 125.1a196.044 196.044 0 0 0-98.53 169.924C60.057 403.056 147.955 491 256 491c108.044 0 195.943-87.899 195.943-195.943a196.044 196.044 0 0 0-98.542-169.99z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Got Engaged
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I asked my then girlfriend, Elizabeth,
                                        to marry me. She said yes! I took her
                                        out for a super romantic dinner and
                                        popped the question in a full
                                        restaurant.
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Graduated Postgraduate at UCT
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 640 512"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                                    </svg>
                                </button>
                                <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Graduated Postgraduate at UCT
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I went back to University in 2015 to
                                        advance with a Postgraduate Diploma in
                                        Business Management &amp;
                                        Entrepreneurship. 📚 👓
                                    </p>
                                </main>
                            </section>
                            <section className="relative">
                                <button className=" absolute flex -translate-x-1/2 flex-col items-center px-3 hfa:outline-none">
                                    <span className="sr-only">
                                        2015 - Restaurant Consultant
                                    </span>
                                    <div className="h-8 w-0.5 bg-gray-500 transition-all selected:h-[80px] selected:bg-sky-500"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="mt-2 h-5 w-5 text-gray-500 transition-all d:text-gray-400 selected:text-gray-900 d:selected:text-white">
                                        <path
                                            fillRule="evenodd"
                                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                                // <div className="absolute top-0 left-px h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]"></div>
                                <main className="pointer-events-none relative mt-32 w-[17rem] opacity-0 transition-opacity  selected:pointer-events-auto selected:opacity-100 -translate-x-1/2 text-center">
                                    <h3 className="whitespace-nowrap font-semibold tracking-tight text-gray-800 d:text-gray-100">
                                        Restaurant Consultant
                                    </h3>
                                    <p className="text-[15px] font-medium leading-relaxed tracking-tight text-gray-500">
                                        I left my full-time position early in
                                        2015 to focus on a Postgraduate diploma
                                        at UCT. I continued my work in a
                                        Consulting Role.
                                    </p>
                                </main>
                            </section>
                        </div>
                    </div> */}
                </div>
            </section>
        </section>
    );
}

function Projects({ reff }) {
    console.log(reff);
    return (
        <section ref={reff} className="#bout h-screen mt-20">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="about-title text-4xl font-bold text-gray-800">
                    Projects
                </h1>
            </div>
        </section>
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
                scroll={scrollToSection}
                introrefs={introRef}
                aboutRef={aboutRef}
                projref={projectsRef}
            />
            <Intro ref={introRef} />
            {/* <About ref={aboutRef} /> */}
            <About ref={aboutRef} />
            {/* Smal viedo (trailer) on the projects image (demo and source) */}
            <Projects ref={projectsRef} />
            {/* Projects alternatives/small  - Fun projects*/}
        </div>
    );
}

export default App;
