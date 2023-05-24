import { useState } from "react";
import logo from "./logoBG.png";
import image from "./imagens/myPhoto.png";
import codephoto from "./imagens/index_code.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    // faMoon,
    faSun,
    faPlus,
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
                    {links.map((link) => (
                        <li className="links">
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
    //     const [code, setCode] = useState(`import { FC } from "react";

    // type WelcomeProps = {
    //   uses:
    //     | "explore new tech"
    //     | "display my skills"
    //     | "find freelancing opportunities"
    //     | "find a fulltime job";
    // };

    // export const Welcome: FC<WelcomeProps> = ({ uses }) => {
    //   return (
    //     <>
    //       <h1>This is my little slice of the internet.</h1>
    //       <p>
    //         I use this site to <em className= "highlight">{uses}</em>.
    //       </p>
    //     </>
    //   );
    // };
    // `);

    // container with image and info
    return (
        <section className="Intro text-black py-12 flex items-center relative">
            <div className="flex items-center mx-auto ml-[15%] ">
                <div className="Intro-Info max-w-2xl p-6">
                    <p className="text-lg font-bold">Welcome to my site.</p>
                    <h1 className="title text-5xl py-7">
                        I'm Rúben Albuquerque, a Data Scientist and Web
                        developer enthusiast.
                    </h1>
                    <p className="text-lg mb-8">
                        I love writing code that takes things to the next level,
                        creating highly performant websites, automated API
                        integrations, building my own dev-tools, and creating
                        stunning user experiences that make you feel WOW!
                    </p>
                    <p className="text-lg mb-8">
                        I am always keen to learn and explore new technologies,
                        frameworks, and programming languages. Currently, I'm
                        learning about Astro and Replicache.
                    </p>
                    <a
                        href="/resume"
                        className="text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition-colors">
                        Let's Work
                    </a>
                    <a
                        href="/resume"
                        className="bg-transparent border border-white text-black font-semibold ml-4 px-4 py-2 rounded hover:bg-white hover:text-blue-500 transition-colors">
                        Resume
                    </a>
                </div>
            </div>
            <div
                className="Intro-Code  absolute right-28 
                top-40 max-w-lg  rounded-lg">
                <div className="bg-header bg-gray-800 flex items-center border-b-0 border-gray-800 px-4 rounded-t-lg ">
                    <button className=" flex gap-2 pr-4 py-3">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </button>

                    <h2 className="text-sm text-gray-500 px-5 py-3 bg-gray-900 rounded-t-xl mr-0 ">
                        ./index.tsx
                    </h2>

                    {/* add a button PLUS */}
                    <div className="flex items-center justify-center">
                        <button className=" rounded-full w-8 h-8 hover:bg-slate-900 transition-colors">
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
                {/* <div className="Intro-Image absolute right-10 top-40  ">
                    <img src={codephoto} alt="Logoo" className="w-full" />
                </div> */}
            </div>
        </section>
    );
}

function About() {
    return (
        <div className="bg-gray-200 h-screen">
            <div className="flex flex-col justify-center items-center bg-slate-300 p-10">
                <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
            </div>
            <div className="container mx-auto flex justify-center items-center">
                <div className="flex flex-row justify-center items-center bg-slate-600 p-10">
                    <div className="flex flex-col justify-center basis-1/2 items-center bg-slate-50">
                        <p className="text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla vitae elit libero, a pharetra augue.
                            Nullam id dolor id nibh ultricies vehicula ut id
                            elit. Nullam id dolor id nibh ultricies vehicula ut
                            id elit. Nullam id dolor id nibh ultricies vehicula
                            ut id elit. Nullam id dolor id nibh ultricies
                            vehicula ut id elit. Nullam id dolor id nibh
                            ultricies vehicula ut id elit. Nullam id dolor id
                            nibh ultricies vehicula ut id elit.
                        </p>
                    </div>
                    <div className="basis-1/2 ">
                        <img src={image} alt="Logoo" className="w-80 h-100" />
                    </div>
                </div>
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
        </div>
    );
}

export default App;
