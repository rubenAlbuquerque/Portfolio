import { useState, useEffect, useRef } from "react";
import logo from "./logoBG.png";
import image from "./imagens/myPhoto.png";
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

function Navbar() {
    // data
    const links = [
        { name: "Home", href: "#home" },
        { name: "Portfolio", href: "#Portfolio" },
        { name: "About", href: "#About" },
        { name: "Contact", href: "#Contact" },
    ];
    return (
        <header className=" h-20 background-red">
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
                        <li className="links" key={index}>
                            <a href="#home" className="">
                                {link.name}
                            </a>
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
        <section className="Intro text-black py-6 flex items-center mx-auto ">
            <div className="flex items-center ml-[12%]  relative">
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

                    {/* <ul class="sm:scrollbar-none -mx-4 mb-2 flex items-center gap-6 overflow-x-auto px-4 pb-2 text-[15px] font-medium">
                        <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
                           <img align="left" alt="Python" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

                            Next.js
                        </li>
                        <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                role="img"
                                viewBox="0 0 24 24"
                                class="h-7 w-7 text-gray-400 d:text-gray-300/80"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <title></title>
                                <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"></path>
                            </svg>
                            Node.js
                        </li>
                        <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                role="img"
                                viewBox="0 0 24 24"
                                class="h-7 w-7 text-gray-400 d:text-gray-300/80"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <title></title>
                                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                            </svg>
                            Tailwind
                        </li>
                        <li class="flex items-center gap-2 text-gray-500 d:text-gray-400">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                role="img"
                                viewBox="0 0 24 24"
                                class="h-7 w-7 text-gray-400 d:text-gray-300/80"
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
                            I love writing code that takes things to the next
                            level, creating highly performant websites,
                            automated API integrations, building my own
                            dev-tools, and creating stunning user experiences
                            that make you feel WOW!
                        </p>
                        <p className="text-lg mb-8">
                            I am always keen to learn and explore new
                            technologies, frameworks, and programming languages.
                            Currently, I'm learning about Astro and Replicache.
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
                        border-gray-500 hover:border-gray-900 ml-6 rounded-lg hover:bg-white
                         hover:text-gray-900 transition-colors">
                        Resume
                    </a>
                </div>
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
                            <label className="red">&nbsp;&nbsp;return</label>
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
                            <label className="white">&nbsp;&nbsp;{");"}</label>
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

                <div
                    className="terminal max-w-lg rounded-lg absolute right-[-65%] top-[10%]
                    bg-gray-900 bg-opacity-90 w-96 h-60 overflow-hidden">
                    <div
                        className=" terminal-header flex flex-row items-center bg-gray-800 p-2 
                    rounded-t-lg">
                        <div className="flex flex-row justify-between items-center">
                            <div className="bg-red-600 hover:bg-red-700 w-3 h-3 rounded-full mr-2"></div>
                            <div className="bg-yellow-500 hover:bg-yellow-600 w-3 h-3 rounded-full mr-2"></div>
                            <div className="bg-green-500 hover:bg-green-600 w-3 h-3 rounded-full mr-2"></div>
                        </div>
                        <div className="flex items-center justify-center flex-grow pr-16">
                            <h1 className="text-base text-center text-gray-500">
                                Terminal
                            </h1>
                        </div>
                    </div>
                    <div className="terminal-body px-2 py-1">
                        <div className="">
                            <label className="blueStrong ">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="w-4 green"
                                />{" "}
                                Welcome@Portfolio:$&nbsp;
                            </label>
                            <label className="white">More informations</label>
                            <br />
                            <label className="red">
                                bash: More: command not found &nbsp;
                            </label>
                            <br />
                            <label className="blueStrong ">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="w-4 green"
                                />{" "}
                                Welcome@Portfolio:$&nbsp;
                            </label>
                            <label className="white">python more_info.py</label>
                            <br />
                            <label className="white ">
                                Contacts found - Connections:
                            </label>
                            <br />
                            <label className="text-blue-200 flex items-center">
                                &nbsp;&nbsp;
                                <button className="flex items-center w-full hover:bg-blue-700 text-white font-bold rounded">
                                    <img
                                        src={linkedin}
                                        alt="Logoo"
                                        className="w-10 h-10 mr-3 "
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
                            <label className="text-blue-200 flex items-center">
                                &nbsp;&nbsp;
                                <button className="flex items-center w-full text-white hover:bg-slate-100 hover:text-black font-bold  rounded p-1">
                                    <img
                                        src={github}
                                        alt="Logoo"
                                        className="w-8 h-8 bg-white rounded-lg mr-5"
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
        </section>
    );
}

function About() {
    return (
        <div className="about h-screen mt-20">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="about-title text-4xl font-bold text-gray-800">
                    About me
                </h1>
            </div>
            <div className="container mx-auto flex justify-center items-center">
                <div className="container flex flex-row justify-center items-center p-10 ">
                    <div className="w-5/12  flex items-center justify-center">
                        <img
                            src={image}
                            alt="Logoo"
                            className="w-7/12 h-100 bg-slate-100 "
                        />
                    </div>
                    <div className="w-1/2 bg-slate-100 ">
                        <p className="about-text text-justify text-gray-800 p-5 w-9/12">
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
                            {/* I'm a very sociable person and
                            I'm always looking to meet new people and make new
                            friends. I'm a very positive person and I always
                            try to see the good side of things. I'm a very
                            organized person and I always try to plan
                            everything. I'm a very responsible person and I
                            always try to do everything on time. I'm a very
                            creative person and I always try to think outside
                            the box. I'm a very hardworking person and I always
                            try to give my best in everything I do. I'm a very */}
                        </p>
                        <p className="about-text text-justify text-gray-800  p-5 w-9/12">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div className="about h-screen mt-20">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="about-title text-4xl font-bold text-gray-800">
                    Projects
                </h1>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <About />
            <Projects />
        </div>
    );
}

export default App;
