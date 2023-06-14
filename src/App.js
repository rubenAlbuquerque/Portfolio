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
    faComputer,
    faWindow,
    faDesktop,
    // faGreaterThan,
    // faTerminal,
    faArrowRight,
    faArrowUpRightFromSquare,
    // faGithub,
    // faLinkedin,
    // <FontAwesomeIcon icon="fa-solid fa-rectangle-terminal" />
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import React from "react";

// reposive metrics:
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// 2xl: 1536
// 3xl: 1920-----------

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
        <header className="h-20 mx-auto">
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

                {/* Menu responsivo */}
                <ul className="list-lisks flex list-none space-x-5 md:hidden">
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

                {/* Links da navbar */}
                <ul className="list-lisks flex list-none space-x-5 hidden md:flex">
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
    const events = [
        {
            // date: "Janeiro 2018 - Dezembro 2019",
            year: "2018",
            mount: "Janeiro",

            title: "Experiência 1",
            description:
                "Descrição da Experiência 1 -  It was part study, part real business, but somehow eventually faded &amp; failed as we had a team of 6 co-founders. Stick to 1 or 2 if you can. 😉",
        },
        {
            // date: "Fevereiro 2020 - Presente",
            year: "",
            mount: "Fevereiro",

            title: "Experiência 2",
            description:
                "Started a Vinyl sticker business, while exploring the very interesting customer segment of students 👨‍ 🎓",
        },
        {
            // date: "Fevereiro 2020 - Presente",
            year: "2020",
            mount: "Fevereiro",
            title: "Experiência 2",
            description:
                "I left my full-time position early in 2015 to focus on a Postgraduate diploma at UCT. I continued my work in a Consulting Role.",
        },
        {
            // date: "Fevereiro 2020 - Presente",
            year: "2020",
            mount: "Fevereiro",
            title: "Experiência 2",
            description: "Descrição da Experiência 5",
        },
        {
            // date: "Janeiro 2018 - Dezembro 2019",
            year: "2018",
            mount: "Janeiro",

            title: "Experiência 1",
            description:
                "Descrição da Experiência 1 -  It was part study, part real business, but somehow eventually faded &amp; failed as we had a team of 6 co-founders. Stick to 1 or 2 if you can. 😉",
        },
        {
            // date: "Janeiro 2018 - Dezembro 2019",
            year: "2018",
            mount: "Janeiro",

            title: "Experiência 1",
            description:
                "Descrição da Experiência 1 -  It was part study, part real business, but somehow eventually faded &amp; failed as we had a team of 6 co-founders. Stick to 1 or 2 if you can. 😉",
        },
        {
            // date: "Janeiro 2018 - Dezembro 2019",
            year: "2018",
            mount: "Janeiro",

            title: "Experiência 1",
            description:
                "Descrição da Experiência 1 -  It was part study, part real business, but somehow eventually faded &amp; failed as we had a team of 6 co-founders. Stick to 1 or 2 if you can. 😉",
        },
        {
            // date: "Janeiro 2018 - Dezembro 2019",
            year: "2018",
            mount: "Janeiro",

            title: "Experiência 1",
            description:
                "Descrição da Experiência 1 -  It was part study, part real business, but somehow eventually faded &amp; failed as we had a team of 6 co-founders. Stick to 1 or 2 if you can. 😉",
        },
    ];

    const [images, setImages] = useState(Object.values(imagesInfo));
    // const isLastElement = (index) => index === images.length - 1;
    const [showDescription, setShowDescription] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
        <section className="about container mx-auto px-20" id="about">
            {/* about */}
            <div className="flex flex-col justify-center items-center p-5 ">
                <h1 className="about-title text-4xl font-bold font-inter text-gray-800">
                    About me
                </h1>
            </div>
            <div className="flex flex-row justify-center p-5">
                {/* images */}
                <div className="w-6/12 flex items-center justify-center">
                    <div className="swiper">
                        {Object.keys(images).map((key, index) => {
                            const image = images[key];

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

                {/* info - texto */}
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

            {/* pontos da cronologia
            <div className="absolute top-0 left-0 h-2.5 w-[119px] bg-[image:linear-gradient(90deg,transparent_0px,transparent_9px,var(--line-color)_10px,var(--line-color)_10px)] bg-[length:10px_10px] [--line-color:theme(colors.gray.500)]">
            </div> */}
            <section className="bg-gray-100/40 py-6 rounded-lg">
                <div className="max-w-full mx-auto px-1 sm:px-6 lg:px-3 ">
                    <h2 className="inter text-3xl font-bold text-gray-800 text-center mb-4">
                        My Timeline
                    </h2>
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
                                                            <div className="h-[60px] w-[3px] rounded-lg bg-sky-500"></div>
                                                        </div>
                                                    )}
                                                    {hoveredIndex !== index && (
                                                        <div className="w-10 flex items-center justify-center">
                                                            <div className="h-[30px] w-[2px] rounded-lg bg-gray-500 selected:bg-sky-500"></div>
                                                        </div>
                                                    )}

                                                    <div className="w-10 flex items-center justify-center">
                                                        <div className=" rounded-lg">
                                                            <FontAwesomeIcon
                                                                icon={faDesktop}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </header>
                                            <main className="w-52 flex flex-col items-center justify-center py-3">
                                                <div className="bg-transparent text-center">
                                                    <h1
                                                        className="inter text-[16px] whitespace-nowrap font-semibold 
                                                        tracking-tight 
                                                    text-gray-800 d:text-gray-100">
                                                        {event.title}
                                                    </h1>

                                                    {hoveredIndex === index && (
                                                        <p
                                                            className=" inter
                                                        text-[14px] font-medium leading-relaxed tracking-tight text-gray-500">
                                                            {/* // opacity-0 group-hover:opacity-100"> */}
                                                            {event.description}
                                                        </p>
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
    return (
        <section ref={reff} className="#projects  mt-40">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="about-title text-4xl font-bold text-gray-800">
                    Projects
                    {/* "<projects>" */}
                </h1>
            </div>

            <div className=" p-5 ">
                <div className="w-9/12 mx-auto">
                    <h1
                        className="text-3xl font-bold text-gray-800 tracking-tight
                    border-b border-gray-600">
                        <span className="text-red-700">&lt;</span>Web developer
                        Projects<span className="text-red-700"> /&gt;</span>
                    </h1>

                    <main className=" flex flex-col md:flex-row items-center justify-evenly mt-5">
                        <section
                            className="relative border-2 border-black/80
                        rounded-lg w-full md:w-96 mb-10 md:mb-0">
                            {/* bg-[linear-gradient(140deg,var(--tw-gradient-stops))] 
                        from-sky-700/80 to-black/20 shadow-indigo-800/20 */}
                            {/* //bg-gray-300 bg-opacity-80 border-gray-600/30OUborder-white/40 
                            [linear-gradient(140deg,var(--tw-gradient-stops))] from-sky-500/60 to-sky-800/60 shadow-indigo-800/20*/}
                            <img
                                src={image}
                                alt=""
                                className="w-full h-[250px] rounded-t-lg object-cover p-0" // h-[250px] w-[450px] min-w-[340px]
                            />

                            <div className="relative px-4 ">
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight py-2">
                                    Nome do projeto
                                    {/* text-2xl font-boldtracking-tighter text-gray-800 d:text-white */}
                                </h1>
                                <div className="relative py-1">
                                    {/* add tecnologies */}
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            React
                                        </a>
                                    </button>
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            Tailwind
                                        </a>
                                    </button>
                                </div>
                                <p className="line-clamp-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="flex flex-row justify-end py-3">
                                    <button
                                        className="rounded border-0 
                                    border-blue-950 hover:shadow-sm hover:bg-sky-600/80 bg-blue-500/80
                                     text-black py-0 px-3 mr-3 text-sm font-semibold">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                        Live Demo
                                        {/* <icon className="fas fa-arrow-right"></icon> */}
                                    </button>
                                    <button
                                        className="py-1 px-2 rounded border-2 
                                    border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-900/60 ">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            <img
                                                src={github}
                                                alt="Logoo"
                                                className="w-6 h-6 bg-transparent rounded-lg mr-1"
                                                href="#home"
                                            />
                                            View Source
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section
                            className="relative border-2 border-black/80
                        rounded-lg w-96">
                            {/* bg-[linear-gradient(140deg,var(--tw-gradient-stops))] 
                        from-sky-700/80 to-black/20 shadow-indigo-800/20 */}
                            {/* //bg-gray-300 bg-opacity-80 border-gray-600/30OUborder-white/40 
                            [linear-gradient(140deg,var(--tw-gradient-stops))] from-sky-500/60 to-sky-800/60 shadow-indigo-800/20*/}
                            <img
                                src={image}
                                alt=""
                                className="w-full h-[250px] rounded-t-lg object-cover p-0" // h-[250px] w-[450px] min-w-[340px]
                            />

                            <div className="relative px-4 ">
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight py-2">
                                    Nome do projeto
                                    {/* text-2xl font-boldtracking-tighter text-gray-800 d:text-white */}
                                </h1>
                                <div className="relative py-1">
                                    {/* add tecnologies */}
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            React
                                        </a>
                                    </button>
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            Tailwind
                                        </a>
                                    </button>
                                </div>
                                <p className="line-clamp-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="flex flex-row justify-end py-3">
                                    <button
                                        className="rounded border-0 
                                    border-blue-950 hover:shadow-sm hover:bg-sky-600/80 bg-blue-500/80
                                     text-black py-0 px-3 mr-3 text-sm font-semibold">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                        Live Demo
                                        {/* <icon className="fas fa-arrow-right"></icon> */}
                                    </button>
                                    <button
                                        className="py-1 px-2 rounded border-2 
                                    border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-900/60 ">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            <img
                                                src={github}
                                                alt="Logoo"
                                                className="w-6 h-6 bg-transparent rounded-lg mr-1"
                                                href="#home"
                                            />
                                            View Source
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section
                            className="relative border-2 border-black/80
                        rounded-lg w-96">
                            {/* bg-[linear-gradient(140deg,var(--tw-gradient-stops))] 
                        from-sky-700/80 to-black/20 shadow-indigo-800/20 */}
                            {/* //bg-gray-300 bg-opacity-80 border-gray-600/30OUborder-white/40 
                            [linear-gradient(140deg,var(--tw-gradient-stops))] from-sky-500/60 to-sky-800/60 shadow-indigo-800/20*/}
                            <img
                                src={image}
                                alt=""
                                className="w-full h-[250px] rounded-t-lg object-cover p-0" // h-[250px] w-[450px] min-w-[340px]
                            />

                            <div className="relative px-4 ">
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight py-2">
                                    Nome do projeto
                                    {/* text-2xl font-boldtracking-tighter text-gray-800 d:text-white */}
                                </h1>
                                <div className="relative py-1">
                                    {/* add tecnologies */}
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            React
                                        </a>
                                    </button>
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            Tailwind
                                        </a>
                                    </button>
                                </div>
                                <p className="line-clamp-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="flex flex-row justify-end py-3">
                                    <button
                                        className="rounded border-0 
                                    border-blue-950 hover:shadow-sm hover:bg-sky-600/80 bg-blue-500/80
                                     text-black py-0 px-3 mr-3 text-sm font-semibold">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                        Live Demo
                                        {/* <icon className="fas fa-arrow-right"></icon> */}
                                    </button>
                                    <button
                                        className="py-1 px-2 rounded border-2 
                                    border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-900/60 ">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            <img
                                                src={github}
                                                alt="Logoo"
                                                className="w-6 h-6 bg-transparent rounded-lg mr-1"
                                                href="#home"
                                            />
                                            View Source
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>

                <div className="w-9/12 mx-auto  mt-16">
                    <h1
                        className="text-3xl font-bold text-gray-800 tracking-tight
                    border-b border-gray-600">
                        <span className="text-red-700">&lt;</span>Data Scientist
                        Projects<span className="text-red-700"> /&gt;</span>
                    </h1>

                    <main className=" flex flex-row items-center  justify-evenly  mt-10">
                        <section
                            className="relative border-2 border-black/80
                        rounded-lg w-96">
                            {/* bg-[linear-gradient(140deg,var(--tw-gradient-stops))] 
                        from-sky-700/80 to-black/20 shadow-indigo-800/20 */}
                            {/* //bg-gray-300 bg-opacity-80 border-gray-600/30OUborder-white/40 
                            [linear-gradient(140deg,var(--tw-gradient-stops))] from-sky-500/60 to-sky-800/60 shadow-indigo-800/20*/}
                            <img
                                src={image}
                                alt=""
                                className="w-full h-[250px] rounded-t-lg object-cover p-0" // h-[250px] w-[450px] min-w-[340px]
                            />

                            <div className="relative px-4 ">
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight py-2">
                                    Nome do projeto
                                    {/* text-2xl font-boldtracking-tighter text-gray-800 d:text-white */}
                                </h1>
                                <div className="relative py-1">
                                    {/* add tecnologies */}
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            React
                                        </a>
                                    </button>
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            Tailwind
                                        </a>
                                    </button>
                                </div>
                                <p className="line-clamp-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="flex flex-row justify-end py-3">
                                    <button
                                        className="rounded border-0 
                                    border-blue-950 hover:shadow-sm hover:bg-sky-600/80 bg-blue-500/80
                                     text-black py-0 px-3 mr-3 text-sm font-semibold">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                        Live Demo
                                        {/* <icon className="fas fa-arrow-right"></icon> */}
                                    </button>
                                    <button
                                        className="py-1 px-2 rounded border-2 
                                    border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-900/60 ">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            <img
                                                src={github}
                                                alt="Logoo"
                                                className="w-6 h-6 bg-transparent rounded-lg mr-1"
                                                href="#home"
                                            />
                                            View Source
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section
                            className="relative border-2 border-black/80
                        rounded-lg w-96">
                            {/* bg-[linear-gradient(140deg,var(--tw-gradient-stops))] 
                        from-sky-700/80 to-black/20 shadow-indigo-800/20 */}
                            {/* //bg-gray-300 bg-opacity-80 border-gray-600/30OUborder-white/40 
                            [linear-gradient(140deg,var(--tw-gradient-stops))] from-sky-500/60 to-sky-800/60 shadow-indigo-800/20*/}
                            <img
                                src={image}
                                alt=""
                                className="w-full h-[250px] rounded-t-lg object-cover p-0" // h-[250px] w-[450px] min-w-[340px]
                            />

                            <div className="relative px-4 ">
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight py-2">
                                    Nome do projeto
                                    {/* text-2xl font-boldtracking-tighter text-gray-800 d:text-white */}
                                </h1>
                                <div className="relative py-1">
                                    {/* add tecnologies */}
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            React
                                        </a>
                                    </button>
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            Tailwind
                                        </a>
                                    </button>
                                </div>
                                <p className="line-clamp-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="flex flex-row justify-end py-3">
                                    <button
                                        className="rounded border-0 
                                    border-blue-950 hover:shadow-sm hover:bg-sky-600/80 bg-blue-500/80
                                     text-black py-0 px-3 mr-3 text-sm font-semibold">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                        Live Demo
                                        {/* <icon className="fas fa-arrow-right"></icon> */}
                                    </button>
                                    <button
                                        className="py-1 px-2 rounded border-2 
                                    border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-900/60 ">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            <img
                                                src={github}
                                                alt="Logoo"
                                                className="w-6 h-6 bg-transparent rounded-lg mr-1"
                                                href="#home"
                                            />
                                            View Source
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section
                            className="relative border-2 border-black/80
                        rounded-lg w-96">
                            {/* bg-[linear-gradient(140deg,var(--tw-gradient-stops))] 
                        from-sky-700/80 to-black/20 shadow-indigo-800/20 */}
                            {/* //bg-gray-300 bg-opacity-80 border-gray-600/30OUborder-white/40 
                            [linear-gradient(140deg,var(--tw-gradient-stops))] from-sky-500/60 to-sky-800/60 shadow-indigo-800/20*/}
                            <img
                                src={image}
                                alt=""
                                className="w-full h-[250px] rounded-t-lg object-cover p-0" // h-[250px] w-[450px] min-w-[340px]
                            />

                            <div className="relative px-4 ">
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight py-2">
                                    Nome do projeto
                                    {/* text-2xl font-boldtracking-tighter text-gray-800 d:text-white */}
                                </h1>
                                <div className="relative py-1">
                                    {/* add tecnologies */}
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            React
                                        </a>
                                    </button>
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            Tailwind
                                        </a>
                                    </button>
                                </div>
                                <p className="line-clamp-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="flex flex-row justify-end py-3">
                                    <button
                                        className="rounded border-0 
                                    border-blue-950 hover:shadow-sm hover:bg-sky-600/80 bg-blue-500/80
                                     text-black py-0 px-3 mr-3 text-sm font-semibold">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                        Live Demo
                                        {/* <icon className="fas fa-arrow-right"></icon> */}
                                    </button>
                                    <button
                                        className="py-1 px-2 rounded border-2 
                                    border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-900/60 ">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            <img
                                                src={github}
                                                alt="Logoo"
                                                className="w-6 h-6 bg-transparent rounded-lg mr-1"
                                                href="#home"
                                            />
                                            View Source
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
                <div className="w-9/12 mx-auto  mt-16">
                    <h1
                        className="text-3xl font-bold text-gray-800 tracking-tight
                    border-b border-gray-600">
                        <span className="text-red-700">&lt;</span>Fun Projects
                        <span className="text-red-700"> /&gt;</span>
                    </h1>

                    <main className=" flex flex-row items-center  justify-evenly  mt-10">
                        <section
                            className="relative border-2 border-black/80
                        rounded-lg w-96">
                            {/* bg-[linear-gradient(140deg,var(--tw-gradient-stops))] 
                        from-sky-700/80 to-black/20 shadow-indigo-800/20 */}
                            {/* //bg-gray-300 bg-opacity-80 border-gray-600/30OUborder-white/40 
                            [linear-gradient(140deg,var(--tw-gradient-stops))] from-sky-500/60 to-sky-800/60 shadow-indigo-800/20*/}
                            <img
                                src={image}
                                alt=""
                                className="w-full h-[250px] rounded-t-lg object-cover p-0" // h-[250px] w-[450px] min-w-[340px]
                            />

                            <div className="relative px-4 ">
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight py-2">
                                    Nome do projeto
                                    {/* text-2xl font-boldtracking-tighter text-gray-800 d:text-white */}
                                </h1>
                                <div className="relative py-1">
                                    {/* add tecnologies */}
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            React
                                        </a>
                                    </button>
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            Tailwind
                                        </a>
                                    </button>
                                </div>
                                <p className="line-clamp-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="flex flex-row justify-end py-3">
                                    <button
                                        className="rounded border-0 
                                    border-blue-950 hover:shadow-sm hover:bg-sky-600/80 bg-blue-500/80
                                     text-black py-0 px-3 mr-3 text-sm font-semibold">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                        Live Demo
                                        {/* <icon className="fas fa-arrow-right"></icon> */}
                                    </button>
                                    <button
                                        className="py-1 px-2 rounded border-2 
                                    border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-900/60 ">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            <img
                                                src={github}
                                                alt="Logoo"
                                                className="w-6 h-6 bg-transparent rounded-lg mr-1"
                                                href="#home"
                                            />
                                            View Source
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section
                            className="relative border-2 border-black/80
                        rounded-lg w-96">
                            {/* bg-[linear-gradient(140deg,var(--tw-gradient-stops))] 
                        from-sky-700/80 to-black/20 shadow-indigo-800/20 */}
                            {/* //bg-gray-300 bg-opacity-80 border-gray-600/30OUborder-white/40 
                            [linear-gradient(140deg,var(--tw-gradient-stops))] from-sky-500/60 to-sky-800/60 shadow-indigo-800/20*/}
                            <img
                                src={image}
                                alt=""
                                className="w-full h-[250px] rounded-t-lg object-cover p-0" // h-[250px] w-[450px] min-w-[340px]
                            />

                            <div className="relative px-4 ">
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight py-2">
                                    Nome do projeto
                                    {/* text-2xl font-boldtracking-tighter text-gray-800 d:text-white */}
                                </h1>
                                <div className="relative py-1">
                                    {/* add tecnologies */}
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            React
                                        </a>
                                    </button>
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            Tailwind
                                        </a>
                                    </button>
                                </div>
                                <p className="line-clamp-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="flex flex-row justify-end py-3">
                                    <button
                                        className="rounded border-0 
                                    border-blue-950 hover:shadow-sm hover:bg-sky-600/80 bg-blue-500/80
                                     text-black py-0 px-3 mr-3 text-sm font-semibold">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                        Live Demo
                                        {/* <icon className="fas fa-arrow-right"></icon> */}
                                    </button>
                                    <button
                                        className="py-1 px-2 rounded border-2 
                                    border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-900/60 ">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            <img
                                                src={github}
                                                alt="Logoo"
                                                className="w-6 h-6 bg-transparent rounded-lg mr-1"
                                                href="#home"
                                            />
                                            View Source
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section
                            className="relative border-2 border-black/80
                        rounded-lg w-96">
                            {/* bg-[linear-gradient(140deg,var(--tw-gradient-stops))] 
                        from-sky-700/80 to-black/20 shadow-indigo-800/20 */}
                            {/* //bg-gray-300 bg-opacity-80 border-gray-600/30OUborder-white/40 
                            [linear-gradient(140deg,var(--tw-gradient-stops))] from-sky-500/60 to-sky-800/60 shadow-indigo-800/20*/}
                            <img
                                src={image}
                                alt=""
                                className="w-full h-[250px] rounded-t-lg object-cover p-0" // h-[250px] w-[450px] min-w-[340px]
                            />

                            <div className="relative px-4 ">
                                <h1 className="text-2xl font-bold text-gray-800 tracking-tight py-2">
                                    Nome do projeto
                                    {/* text-2xl font-boldtracking-tighter text-gray-800 d:text-white */}
                                </h1>
                                <div className="relative py-1">
                                    {/* add tecnologies */}
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            React
                                        </a>
                                    </button>
                                    <button
                                        className="py-1 px-3 rounded border-2 
                                    border-blue-950 mr-1 font-semibold">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            Tailwind
                                        </a>
                                    </button>
                                </div>
                                <p className="line-clamp-5">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="flex flex-row justify-end py-3">
                                    <button
                                        className="rounded border-0 
                                    border-blue-950 hover:shadow-sm hover:bg-sky-600/80 bg-blue-500/80
                                     text-black py-0 px-3 mr-3 text-sm font-semibold">
                                        <FontAwesomeIcon
                                            className="mr-2"
                                            icon={faArrowUpRightFromSquare}
                                        />
                                        Live Demo
                                        {/* <icon className="fas fa-arrow-right"></icon> */}
                                    </button>
                                    <button
                                        className="py-1 px-2 rounded border-2 
                                    border-blue-950 hover:shadow-sm font-semibold hover:bg-sky-900/60 ">
                                        <a
                                            href="https://github.com/rubenAlbuquerque"
                                            target="_blank"
                                            className="flex flex-row justify-center items-center text-sm"
                                            rel="noreferrer">
                                            <img
                                                src={github}
                                                alt="Logoo"
                                                className="w-6 h-6 bg-transparent rounded-lg mr-1"
                                                href="#home"
                                            />
                                            View Source
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </section>
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
                            <a href="#" class="text-gray-400 hover:text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-400 hover:text-white">
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
            {/* <Contact /> */}
            <Footer />
        </div>
    );
}

export default App;
