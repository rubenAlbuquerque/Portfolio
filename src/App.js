import logo from "./logoBG.png";
import image from "./imagens/myPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    // faMoon,
    faSun,
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
    const code = `import { FC } from "react";

type WelcomeProps = {
  uses:
    | "explore new tech"
    | "display my skills"
    | "find freelancing opportunities"
    | "find a fulltime job";
};

export const Welcome: FC<WelcomeProps> = ({ uses }) => {
  return (
    <>
      <h1>This is my little slice of the internet.</h1>
      <p>
        I use this site to <em className= "highlight">{uses}</em>.
      </p>
    </>
  );
};
`;

    // container with image and info
    return (
        <section className="Intro text-black py-12 flex items-center relative">
            <div className="flex items-center mx-auto ml-[15%]">
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
                //     className="relative w-full flex-col overflow-hidden rounded-md border-2
                //     border-gray-200/40 bg-gray-900 p-2.5 shadow-2xl drop-shadow-lg d:border-gray-600/40
                // ">
                className="Intro-Code bg-gray-900 text-white text-sm absolute right-10 
                top-40 max-w-lg px-4 py-0 rounded-md ">
                <h2 className="text-center text-md py-2 border-b-2 border-gray-800 text-gray-500 ">
                    ./index.js
                </h2>
                <pre className="py-3">
                    <code className="whitespace-pre-wrap">
                        <label className="red">import</label>
                        <label className="white">{" {"}</label>
                        <label className="orange"> FC </label>
                        <label className="white">{"}"}</label>
                        <label className="red"> from </label>
                        <label className="yellow">"react"</label>
                        <label className="white">;</label>
                        <br />
                        <br />
                        <label className="red">type</label>
                        <label className="white"> WelcomeProps </label>
                        <label className="red"> = </label>
                        <label className="white">{" {"}</label>
                        <br />
                        {/* <label className="white">{"  "}</label> */}
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
                        <label className="green">&nbsp; "find a fulltime job"
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
        </section>
        // <section className="Intro text-black py-12 flex items-center">
        //     <div className=" flex items-center mx-auto ml-[15%]">
        //         <div className="Intro-Info max-w-2xl p-6">
        //             <p className="text-lg font-bold">Welcome to my site.</p>
        //             <h1 className="title text-5xl py-7">
        //                 I'm Rúben Albuquerque, a Data Scientist and Web
        //                 developer enthusiast.
        //             </h1>
        //             <p className="text-lg mb-8">
        //                 I love writing code that takes things to the next level,
        //                 creating highly performant websites, automated API
        //                 integrations, building my own dev-tools, and creating
        //                 stunning user experiences that make you feel WOW!
        //             </p>
        //             <p className="text-lg mb-8">
        //                 I am always keen to learn and explore new technologies,
        //                 frameworks, and programming languages. Currently, I'm
        //                 learning about Astro and Replicache.
        //             </p>
        //             <a
        //                 href="/resume"
        //                 className="text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition-colors">
        //                 Let's Work
        //             </a>
        //             <a
        //                 href="/resume"
        //                 className="bg-transparent border border-white text-black font-semibold ml-4 px-4 py-2 rounded hover:bg-white hover:text-blue-500 transition-colors">
        //                 Resume
        //             </a>
        //         </div>
        //     </div>
        //     <div className="Intro-Code absolute top-0 left-0 w-full h-full flex items-center justify-center">
        //         <h2 className="text-center text-md ">./index.js</h2>
        //         <pre>
        //             <code className="whitespace-pre-wrap">{code}</code>
        //         </pre>
        //     </div>
        // </section>

        // <section className="Intro text-black py-12 flex items-center">
        //     <div className="flex items-center  ">
        //         <div className="Intro-Info max-w-2xl p-6 ">
        //             <p className="text-lg font-bold">Welcome to my site.</p>
        //             {/* <p className="text-lg mb-6">
        //                 I'm Felix Tellmann, a Fullstack developer.
        //             </p> */}
        //             <h1 className="title text-5xl py-7">
        //                 I'm Rúben Albuquerque, a Data Scientist and Web
        //                 developer entusiast.
        //             </h1>

        //             {/* <div className="flex flex-wrap mb-8">
        //                 <span className="bg-gray-700 text-white px-2 py-1 rounded mr-2 mb-2">
        //                     Next.js
        //                 </span>
        //                 <span className="bg-gray-700 text-white px-2 py-1 rounded mr-2 mb-2">
        //                     Node.js
        //                 </span>
        //                 <span className="bg-gray-700 text-white px-2 py-1 rounded mr-2 mb-2">
        //                     Tailwind
        //                 </span>
        //                 <span className="bg-gray-700 text-white px-2 py-1 rounded mr-2 mb-2">
        //                     Shopify
        //                 </span>
        //             </div> */}
        //             <p className="text-lg mb-8">
        //                 I love writing code that takes things to the next level,
        //                 creating highly performant websites, automated API
        //                 integrations, building my own dev-tools, and creating
        //                 stunning user experiences that make you feel WOW!
        //             </p>
        //             <p className="text-lg mb-8">
        //                 I am always keen to learn and explore new technologies,
        //                 frameworks, and programming languages. Currently, I'm
        //                 learning about Astro and Replicache.
        //             </p>
        //             <a
        //                 href="/resume"
        //                 className=" text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition-colors">
        //                 Let's Work
        //             </a>
        //             <a
        //                 href="/resume"
        //                 className="bg-transparent border border-white text-black font-semibold ml-4 px-4 py-2 rounded hover:bg-white hover:text-blue-500 transition-colors">
        //                 Resume
        //             </a>
        //         </div>

        // <div className="Intro-code bg-gray-900 max-w-sm text-gray-300 px-6 py-2 rounded-lg shadow-lg relative">
        //     <h2 className="text-center text-lg font-semibold">
        //         ./index.js
        //     </h2>
        //     <pre>
        //         <code className="whitespace-pre-wrap">{code}</code>
        //     </pre>
        // </div>

        // <div className="bg-gray-900 text-gray-300 px-6 py-2 rounded-lg shadow-lg relative">
        //     <h2 className="text-center text-lg font-semibold">
        //         filename.js
        //     </h2>
        //     <pre>
        //         <code className="whitespace-pre-wrap">{code}</code>
        //     </pre>
        // </div>
        //     </div>
        // </section>

        // <div className="">
        //     <div className="flex flex-row justify-center items-center bg-red-300 p-10 mx-20 my-10">
        //         <div className="basis-1/2 ">
        //             <div className="flex flex-col justify-center items-center">
        //                 <h1 className="text-4xl font-bold text-gray-800">
        //                     I'm{" "}
        //                     <span className="text-blue-500">Ruben Santos</span>
        //                 </h1>
        //                 <p className="text-gray-800 font-size bg-gray-200 mx-10 p-5">
        //                     I'm a Front-End Stack Developer, I love to create
        //                     new web apps and learn new technologies. Also I'm a
        //                     student of Computer Science at the University of
        //                     Lisbon. Also I'm passionate about data science and
        //                     machine learning.
        //                 </p>
        //                 <div className="flex flex-row justify-center items-center">
        //                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        //                         Contact Me
        //                     </button>
        //                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        //                         My Resume
        //                     </button>
        //                 </div>
        //                 <div className="flex flex-row justify-center items-center">
        //                     <a
        //                         href="https://www.linkedin.com/in/ruben-santos-1b1b1b1b1/"
        //                         className="text-blue-500 hover:text-blue-800">
        //                         {/* <i className="fab fa-linkedin fa-2x"></i> */}
        //                         <h1>Linkedin</h1>
        //                     </a>
        //                     <a
        //                         href="#home"
        //                         className="text-blue-500 hover:text-blue-800">
        //                         {/* <i className="fab fa-github fa-2x"></i> */}
        //                         <h1>Github</h1>
        //                     </a>
        //                     <a
        //                         href="#home"
        //                         className="text-blue-500 hover:text-blue-800">
        //                         {/* <i className="fab fa-twitter fa-2x"></i> */}
        //                         <h1>Twitter</h1>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="basis-1/2 flex justify-center items-center bg-red-900">
        //             <img src={logo} alt="Logoo" className="w-80 h-100" />
        //         </div>
        //     </div>
        // </div>

        // <section className="bg-blue-500 text-white py-12">
        //     <div className="container mx-auto">
        //         <h1 className="text-4xl font-bold mb-4">Welcome to my site.</h1>
        //         <p className="text-lg mb-6">
        //             I'm Felix Tellmann, a Fullstack developer.
        //         </p>
        //         <div className="flex flex-wrap mb-8">
        //             <span className="bg-gray-700 text-white px-2 py-1 rounded mr-2 mb-2">
        //                 Next.js
        //             </span>
        //             <span className="bg-gray-700 text-white px-2 py-1 rounded mr-2 mb-2">
        //                 Node.js
        //             </span>
        //             <span className="bg-gray-700 text-white px-2 py-1 rounded mr-2 mb-2">
        //                 Tailwind
        //             </span>
        //             <span className="bg-gray-700 text-white px-2 py-1 rounded mr-2 mb-2">
        //                 Shopify
        //             </span>
        //         </div>
        //         <p className="text-lg mb-8">
        //             I love writing code that takes things to the next level,
        //             creating highly performant websites, automated API
        //             integrations, building my own dev-tools, and creating
        //             stunning user experiences that make you feel WOW!
        //         </p>
        //         <p className="text-lg mb-8">
        //             I am always keen to learn and explore new technologies,
        //             frameworks, and programming languages. Currently, I'm
        //             learning about Astro and Replicache.
        //         </p>
        //         <a
        //             href="/resume"
        //             className="bg-white text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-100 transition-colors">
        //             Let's Work
        //         </a>
        //         <a
        //             href="/resume"
        //             className="bg-transparent border border-white text-white font-semibold ml-4 px-4 py-2 rounded hover:bg-white hover:text-blue-500 transition-colors">
        //             Resume
        //         </a>
        //     </div>
        // </section>
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
                        <img src={logo} alt="Logoo" className="w-80 h-100" />
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
