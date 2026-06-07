import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "./logoBG.png";
import aboutImage1 from "./imagens/Capturar1.JPG";
import aboutImage2 from "./imagens/myphoto2.jpg";
import aboutImage3 from "./imagens/myphoto3.jpg";
import aboutImage4 from "./imagens/myphoto4.jpg";
import githubIcon from "./imagens/icons/github.png";
import linkedinIcon from "./imagens/icons/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faPlus,
    faDesktop,
    faBars,
    faBarsStaggered,
    faTimes,
    faArrowRight,
    faDatabase,
    faCloud,
    faCode,
    faGraduationCap,
    faCertificate,
    faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import {
    PERSONAL,
    LANGUAGES,
    SKILLS,
    EXPERIENCE,
    EDUCATION,
    CERTIFICATIONS,
    PROJECTS,
    ABOUT_STATS,
    NAV_LINKS,
} from "./data/portfolioData";
import "./App.css";

function scrollToSection(href) {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (href) => {
        if (href.startsWith("/")) {
            navigate(href);
            setIsDropdownOpen(false);
            return;
        }

        if (location.pathname !== "/Portfolio") {
            navigate("/Portfolio");
            setTimeout(() => scrollToSection(href), 100);
        } else {
            scrollToSection(href);
        }
        setIsDropdownOpen(false);
    };

    const handleLogoClick = () => {
        if (location.pathname !== "/Portfolio") {
            navigate("/Portfolio");
        } else {
            scrollToSection("#home");
        }
        setIsDropdownOpen(false);
    };

    return (
        <header className="h-20 fixed top-0 left-0 w-full z-10 bg-white/60 backdrop-filter backdrop-blur-md">
            <nav className="nav flex justify-between items-center border-b border-gray-800/10">
                <button
                    type="button"
                    className="flex nav-logo justify-between items-center py-5 cursor-pointer"
                    onClick={handleLogoClick}
                    aria-label="Go to home">
                    <img src={logo} alt="Logo" className="w-10 h-10" />
                </button>

                <ul className="list-lisks list-none xl:space-x-5 hidden md:flex md:space-x-0">
                    {NAV_LINKS.map((link) => (
                        <li key={link.name}>
                            <button
                                type="button"
                                className="links"
                                onClick={() => handleNavClick(link.href)}>
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex">
                    <button type="button" className="items-center px-3 rounded-lg" aria-label="Theme toggle">
                        <FontAwesomeIcon
                            icon={faSun}
                            className="text-gray-500 hover:text-gray-800"
                        />
                    </button>
                    <div className="hidden md:flex">
                        <button
                            type="button"
                            className="button-contactme"
                            onClick={() => handleNavClick("#contact")}>
                            Contact Me
                        </button>
                    </div>
                    <div className="relative flex items-center px-1 md:hidden">
                        <button
                            type="button"
                            className="button-dropdown"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            aria-label="Toggle menu">
                            <FontAwesomeIcon
                                icon={isDropdownOpen ? faTimes : faBars}
                                className="text-gray-400 hover:text-gray-800 text-[18px]"
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {isDropdownOpen && (
                <div className="mobile-menu-overlay">
                    <nav className="nav bg-white flex justify-between items-center border-b border-gray-800/10">
                        <button
                            type="button"
                            className="flex nav-logo justify-between items-center py-5 cursor-pointer"
                            onClick={handleLogoClick}>
                            <img src={logo} alt="Logo" className="w-10 h-10" />
                        </button>
                        <button
                            type="button"
                            className="button-dropdown"
                            onClick={() => setIsDropdownOpen(false)}
                            aria-label="Close menu">
                            <FontAwesomeIcon
                                icon={faTimes}
                                className="text-gray-400 hover:text-gray-800 text-[18px]"
                            />
                        </button>
                    </nav>
                    <div className="mx-5 h-full border-x border-dashed border-white/30">
                        <ul className="pt-28 list-lisks list-none space-y-16 mx-5">
                            {NAV_LINKS.map((link) => (
                                <li
                                    key={link.name}
                                    className="flex items-center justify-between">
                                    <button
                                        type="button"
                                        className="inter text-gray-400 text-[17px]"
                                        onClick={() => handleNavClick(link.href)}>
                                        {link.name}
                                    </button>
                                    <div className="mx-2 pt-3 flex-1 border-b-2 border-dotted border-white/20" />
                                    <p className="text-gray-500 text-[13px]">{link.note}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center mt-20 items-center">
                            <button
                                type="button"
                                className="button-rainbow whitespace-nowrap border-2 bg-white border-opacity-40 px-10 py-3 shadow-2xl font-medium tracking-tight text-gray-900 rounded-lg"
                                onClick={() => handleNavClick("#contact")}>
                                Let's work
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

function Hero() {
    return (
        <section id="home" className="container mx-auto mt-28 mb-32">
            <div className="Intro text-black container mx-auto flex items-center justify-center">
                <div className="relative xl:flex xl:items-center xl:justify-center">
                    <div className="Intro-Info max-w-5xl p-6">
                        <p className="intro-welcome blueStrong">
                        👋 Hey there!
                        </p>
                        <h1 className="title mb-5">
                            I'm&nbsp;
                            <strong className="title-name blueStrong">
                                {PERSONAL.name}
                            </strong>
                            ,
                            <div className="title-body">
                                a {PERSONAL.title}
                            </div>
                        </h1>
                        <div className="intro-description max-w-xl">
                            <p className="mb-6">
                                I build production-ready data pipelines and cloud
                                data platforms across telecom, banking, aviation,
                                and healthcare. Working with Databricks, AWS, and
                                Azure, I deliver scalable ETL workflows,
                                metadata-driven data quality, and event-driven
                                architectures that teams can trust in production.
                            </p>
                        </div>
                        <button
                            type="button"
                            className="intro-letswork text-white bg-gray-800 rounded-lg hover:bg-gray-900 border-2 border-gray-500"
                            onClick={() => scrollToSection("#contact")}>
                            Let's Work
                        </button>
                        <button
                            type="button"
                            className="intro-resume bg-transparent text-gray-500 border-2 border-gray-500 ml-6 rounded-lg hover:text-gray-900 transition-colors"
                            onClick={() => scrollToSection("#experience")}>
                            View Experience
                        </button>
                    </div>

                    <div className="relative widthDiv xl:mt-0">
                        <div className="Intro-Code hero-code-editor w-full rounded-lg mt-12">
                            <div className="bg-header bg-gray-800 flex items-center border-b-0 border-gray-800 px-4 rounded-t-lg">
                                <button type="button" className="flex gap-2 pr-4 py-3 defaultButton">
                                    <span className="bg-red-600 hover:bg-red-700 w-3 h-3 rounded-full" />
                                    <span className="bg-yellow-500 hover:bg-yellow-600 w-3 h-3 rounded-full" />
                                    <span className="bg-green-500 hover:bg-green-600 w-3 h-3 rounded-full" />
                                </button>
                                <h2 className="text-sm text-gray-500 px-5 py-3 bg-gray-900 rounded-t-xl mr-0">
                                    ./etl_reality.py
                                </h2>
                                <div className="flex items-center justify-center">
                                    <button type="button" className="rounded-full w-8 h-8 hover:bg-slate-700 transition-colors">
                                        <FontAwesomeIcon icon={faPlus} className="text-xs text-white" />
                                    </button>
                                </div>
                            </div>

                            <pre className="py-3 px-4 bg-gray-900 rounded-b-lg">
                                <code className="whitespace-pre-wrap">
                                    <span className="orange"># ETL: Extract. Transform. Panic.</span>
                                    <br />
                                    <span className="orange"># Load later. Ship now.</span>
                                    <br />
                                    <br />
                                    <span className="red">def</span>
                                    <span className="white"> run_daily_pipeline</span>
                                    <span className="white">():</span>
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;df = spark.read(</span>
                                    <span className="green">"s3://lake/1tb-before-coffee"</span>
                                    <span className="white">)</span>
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;rows = df.count()</span>
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;nulls = df.filter(</span>
                                    <span className="green">"x IS NULL"</span>
                                    <span className="white">).count()</span>
                                    <br />
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="red">if</span>
                                    <span className="white"> nulls &gt; rows * 0.5:</span>
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="orange"># feature, not bug</span>
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rename_column(</span>
                                    <span className="green">"NULL"</span>
                                    <span className="white">, </span>
                                    <span className="green">"future_metric"</span>
                                    <span className="white">)</span>
                                    <br />
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="red">if</span>
                                    <span className="white"> stakeholder.wants_excel():</span>
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="red">return</span>
                                    <span className="green"> "here is a dashboard link"</span>
                                    <br />
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="red">return</span>
                                    <span className="white"> df.write.mode(</span>
                                    <span className="green">"overwrite"</span>
                                    <span className="white">)</span>
                                    <br />
                                    <span className="white">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="orange"># what could go wrong?</span>
                                </code>
                            </pre>
                        </div>

                        <div className="terminal hero-terminal">
                            <div className="terminal-header">
                                <div className="terminal-controls">
                                    <span className="terminal-dot terminal-dot-red" />
                                    <span className="terminal-dot terminal-dot-yellow" />
                                    <span className="terminal-dot terminal-dot-green" />
                                </div>
                                <h2 className="terminal-title">Terminal</h2>
                            </div>
                            <div className="terminal-body">
                                <p className="terminal-line">
                                    <span className="terminal-prompt">
                                        <FontAwesomeIcon icon={faArrowRight} className="terminal-prompt-icon" />
                                        ruben@data-lake:$
                                    </span>
                                    <span className="white"> python --version</span>
                                </p>
                                <p className="terminal-line terminal-output green">
                                    Python 3.x — ETL ready
                                </p>
                                <p className="terminal-line">
                                    <span className="terminal-prompt">
                                        <FontAwesomeIcon icon={faArrowRight} className="terminal-prompt-icon" />
                                        ruben@data-lake:$
                                    </span>
                                    <span className="white"> cat contacts.txt</span>
                                </p>
                                <p className="terminal-line terminal-output white">
                                    Contacts found — Connections:
                                </p>
                                <div className="terminal-links">
                                    <a
                                        href={PERSONAL.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="terminal-link-btn terminal-link-linkedin">
                                        <img src={linkedinIcon} alt="LinkedIn" className="terminal-link-icon" />
                                        <span>LinkedIn</span>
                                    </a>
                                    <Link
                                        to="/Portfolio/resume"
                                        className="terminal-link-btn terminal-link-resume">
                                        <FontAwesomeIcon icon={faFileLines} className="terminal-link-fa-icon" />
                                        <span>Resume</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ABOUT_IMAGES = [
    { key: 1, src: aboutImage1, alt: "Rúben Albuquerque", degres: 0 },
    { key: 2, src: aboutImage4, alt: "Rúben Albuquerque", degres: 5 },
    { key: 3, src: aboutImage2, alt: "Rúben Albuquerque", degres: 5 },
    { key: 4, src: aboutImage3, alt: "Rúben Albuquerque", degres: -5 },
];

function About() {
    const [images, setImages] = useState(ABOUT_IMAGES);

    const handleCardClick = (selectedImage) => {
        setImages((prevImages) => {
            const filteredImages = prevImages.filter(
                (image) => image.key !== selectedImage.key
            );
            return [...filteredImages, selectedImage];
        });
    };

    return (
        <section className="about pt-10 container mx-auto px-6 md:px-20" id="about">
            <div className="flex flex-col justify-center items-center p-5">
                <h2 className="about-title text-4xl font-bold font-inter text-gray-800">
                    About Me
                </h2>
            </div>

            <div className="xl:flex xl:items-start xl:justify-center gap-10">
                <div className="xl:w-5/12 mx-10 my-20 flex items-center justify-center">
                    <div className="swiper">
                        {images.map((image, index) => (
                            <div
                                className="card bg-gray-200"
                                style={{
                                    "--i": index,
                                    "--deg": image.degres,
                                    transform: `translateZ(calc(-10px * var(--i)))
                                                translateY(calc(0px * var(--i)))
                                                rotate(calc(var(--deg) * 1deg * var(--i)))`,
                                }}
                                key={image.key}
                                onClick={() => handleCardClick(image)}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-top"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="xl:w-6/12 py-5 pr-5 pl-5">
                    <div className="flex flex-row flex-wrap items-center justify-center gap-6 mb-8">
                        {ABOUT_STATS.map((stat) => (
                            <div key={stat.label} className="col m-auto">
                                <h3 className="primary text-4xl font-extrabold tracking-tighter text-center">
                                    {stat.value}
                                </h3>
                                <p className="text-[15px] font-semibold tracking-tight text-center text-gray-400">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    <main className="about-text px-5 text-justify pt-2 secondary sm:text-[16px] 2xl:text-[18px]">
                        <p className="mb-4">
                            I am a Data Engineer with hands-on experience delivering
                            data platforms across telecommunications, banking, aviation,
                            and healthcare. I specialize in building scalable ETL
                            pipelines, automating data workflows, and implementing
                            data quality frameworks that improve reliability and trust
                            in analytics.
                        </p>
                        <p className="mb-4">
                            My toolkit includes Databricks, AWS, and Azure, with
                            strong foundations in Python, PySpark, SQL, and
                            orchestration tools such as Apache Airflow and Argo
                            Workflows. I am passionate about cloud data platforms,
                            metadata-driven architectures, and designing systems that
                            scale with business needs.
                        </p>
                        <p className="mb-6">
                            Based in Gland, Switzerland, I am open to opportunities in
                            Data Engineering, Data Platforms, Cloud Architecture,
                            and Analytics.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Languages</h3>
                            <div className="flex flex-wrap gap-3">
                                {LANGUAGES.map((lang) => (
                                    <span
                                        key={lang.name}
                                        className="language-badge">
                                        {lang.name} - {lang.level}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* <div className="flex items-center justify-start flex-wrap gap-4">
                            <a
                                href={PERSONAL.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="social-link">
                                LinkedIn
                            </a>
                            <a
                                href={PERSONAL.github}
                                target="_blank"
                                rel="noreferrer"
                                className="social-link">
                                GitHub
                            </a>
                        </div> */}
                    </main>
                </div>
            </div>

            <Skills />

            {/* Professional Timeline — moved to Experience section
            <section className="bg-gray-100/40 py-6 rounded-lg mt-16">...</section>
            */}
        </section>
    );
}

function Skills() {
    const categories = [
        { title: "Programming", icon: faCode, items: SKILLS.programming },
        { title: "Data Engineering", icon: faDatabase, items: SKILLS.dataEngineering },
        { title: "Cloud & Platforms", icon: faCloud, items: SKILLS.cloudPlatforms },
        { title: "Orchestration", icon: faBarsStaggered, items: SKILLS.orchestration },
        { title: "DevOps", icon: faDesktop, items: SKILLS.devops },
    ];

    return (
        <section className="skills-section mt-16 px-4" id="skills">
            <h2 className="about-title text-3xl font-bold text-gray-800 text-center mb-8">
                Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div key={category.title} className="skill-card">
                        <div className="flex items-center gap-3 mb-4">
                            <FontAwesomeIcon icon={category.icon} className="primary text-lg" />
                            <h3 className="text-lg font-semibold text-gray-800">
                                {category.title}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill) => (
                                <span key={skill} className="skill-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section className="experience-section container mx-auto px-6 md:px-20 py-16" id="experience">
            <h2 className="about-title text-4xl font-bold text-gray-800 text-center mb-10">
                Professional Experience
            </h2>
            <div className="experience-timeline">
                {EXPERIENCE.map((job, index) => (
                    <article
                        key={`${job.company}-${job.role}`}
                        className="experience-timeline-item">
                        <div className="experience-timeline-marker">
                            <span className="experience-timeline-dot" />
                            {index < EXPERIENCE.length - 1 && (
                                <span className="experience-timeline-line" />
                            )}
                        </div>
                        <div className="experience-card experience-timeline-card">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{job.role}</h3>
                                    <p className="primary font-semibold">{job.company}</p>
                                </div>
                                {job.period && (
                                    <span className="experience-period">{job.period}</span>
                                )}
                            </div>
                            <ul className="experience-list">
                                {job.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {job.technologies.map((tech) => (
                                    <span key={tech} className="skill-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function Projects() {
    return (
        <section className="projects-section container mx-auto px-6 md:px-20 py-16" id="projects">
            <div className="flex flex-col justify-center items-center pb-5">
                <h2 className="about-title text-4xl font-bold text-gray-800">Projects</h2>
                <p className="secondary text-center max-w-2xl mt-4">
                    Personal projects across data mining, big data, machine learning,
                    and deep learning.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                {PROJECTS.map((project) => (
                    <article key={project.title} className="project-card">
                        <div className={`project-visual bg-gradient-to-br ${project.accent}`}>
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-visual-title">{project.title}</h3>
                        </div>
                        <div className="project-content">
                            <p className="secondary text-sm mb-4">{project.description}</p>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                    Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="skill-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                    Key Challenges
                                </h4>
                                <ul className="project-sublist">
                                    {project.challenges.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-800 mb-2">
                                    Results
                                </h4>
                                <ul className="project-sublist">
                                    {project.results.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function EducationAndCertifications() {
    return (
        <section className="education-section container mx-auto px-6 md:px-20 py-16" id="education">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <FontAwesomeIcon icon={faGraduationCap} className="primary text-2xl" />
                        <h2 className="about-title text-3xl font-bold text-gray-800">Education</h2>
                    </div>
                    <div className="space-y-6">
                        {EDUCATION.map((item) => (
                            <article key={item.degree} className="education-card">
                                <h3 className="text-lg font-bold text-gray-800">{item.degree}</h3>
                                <p className="primary font-medium">{item.institution}</p>
                                <p className="secondary text-sm mt-1">{item.period}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <FontAwesomeIcon icon={faCertificate} className="primary text-2xl" />
                        <h2 className="about-title text-3xl font-bold text-gray-800">
                            Certifications
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {CERTIFICATIONS.map((cert) => (
                            <article key={cert.name} className="certification-card">
                                <h3 className="text-base font-semibold text-gray-800">
                                    {cert.name}
                                </h3>
                                <p className="secondary text-sm">
                                    {cert.issuer} — {cert.year}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <div className="site-footer-bar">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-8 lg:px-32">
                <p className="text-gray-400 mb-4 lg:mb-0">
                    &copy; {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
                </p>
                <ul className="flex flex-wrap justify-center gap-4">
                    {NAV_LINKS.map((link) => (
                        <li key={link.name}>
                            <button
                                type="button"
                                className="text-gray-400 hover:text-white"
                                onClick={() => scrollToSection(link.href)}>
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <section className="contact-section container mx-auto px-6 md:px-20 py-16" id="contact">
            <div className="contact-unified">
                <h2 className="contact-unified-title">Get In Touch</h2>
                <p className="contact-unified-text">
                    Open to Data Engineering opportunities — hybrid and remote.
                    Let's build scalable data platforms together.
                </p>
                <div className="contact-unified-actions">
                    <a
                        href={PERSONAL.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-btn contact-btn-primary">
                        <img src={linkedinIcon} alt="" className="contact-btn-icon" />
                        LinkedIn
                    </a>
                    <a
                        href={PERSONAL.github}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-btn contact-btn-secondary">
                        <img src={githubIcon} alt="" className="contact-btn-icon contact-btn-icon-github" />
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}

function ContactFooter() {
    return (
        <footer>
            <Contact />
            <Footer />
        </footer>
    );
}

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <EducationAndCertifications />
            <ContactFooter />
        </div>
    );
}

export default App;
export { Navbar, Hero as Intro, About, Projects, Contact, Footer };
