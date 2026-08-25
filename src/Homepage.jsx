import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import './Homepage.css';
import Navbar from './Navbar';

import profileImage from '/src/assets/images/picture.png';
import linkedinIcon from '/src/assets/images/linkedin.svg';
import githubIcon from '/src/assets/images/github.svg';


function Homepage() {

    const navigate = useNavigate();

    const projectsRef = useRef(null);
    const contactRef = useRef(null);


    const handleHomeClick = () => {
        navigate('/');
    };


    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };


    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };


    const projects = [

        {
            number: '01',

            title: 'User Journey Intelligence System',

            category:
                'Causal Inference · Simulation · Analytics',

            status:
                'Research Prototype · In Progress',

            description:
                'A privacy-aware research prototype that reconstructs digital user journeys, estimates which factors actually influence outcomes, and tests hypothetical interventions through causal inference and discrete-event simulation.',

            technologies: [
                'Python',
                'PostgreSQL',
                'DoWhy',
                'SimPy',
                'Streamlit'
            ],

            metric:
                'Synthetic privacy-safe data',

            github:
                'https://github.com/lisaghimire12/User-Journey-Intelligence-System'
        },


        {
            number: '02',

            title:
                'Self-Healing Network with Reinforcement Learning',

            category:
                'Reinforcement Learning · Network Security · Systems',

            status:
                'Completed',

            description:
                'A reinforcement learning system that observes network traffic, injects simulated attack scenarios, and learns defensive actions through a PPO agent with a real-time monitoring dashboard.',

            technologies: [
                'Python',
                'PPO',
                'Gymnasium',
                'PyTorch',
                'FastAPI',
                'WebSocket'
            ],

            metric:
                '12 traffic features · 6 defensive actions',

            github:
                'https://github.com/lisaghimire12/Reinforcement-Learning-Based-Self-Healing-Network-Simulator'
        },


        {
            number: '03',

            title:
                'Real-Time Job Market Sentiment Analyzer',

            category:
                'Big Data · NLP · Real-Time Analytics',

            status:
                'Completed',

            description:
                'A streaming analytics pipeline that ingests job postings through Kafka, analyzes sentiment, extracts technical skills, tracks salary trends, and turns the results into an interactive market dashboard.',

            technologies: [
                'Apache Kafka',
                'Python',
                'NLP',
                'MySQL',
                'Streamlit',
                'Plotly'
            ],

            metric:
                '500 jobs/min · <5s end-to-end latency',

            github:
                'https://github.com/lisaghimire12/Real-Time-Job-Market-Sentiment-Analyzer'
        },


        {
            number: '04',

            title:
                'Context-Aware Harassment Detection System',

            category:
                'NLP · Cybersecurity · Digital Forensics',

            status:
                'Published Patent Application · Under Examination',

            description:
                'A real-time NLP system for detecting abusive, cyberbullying, and hate-speech content in social media streams, combining machine learning, contextual risk analysis, explainability, and tamper-evident evidence preservation.',

            technologies: [
                'NLP',
                'TF-IDF',
                'Logistic Regression',
                'SHA-256',
                'Python'
            ],

            metric:
                '~91% reported accuracy · ~300 comments / 6s',

            github:
                'https://github.com/lisaghimire12/cyberbullying-detection-system',

            featured: true
        }

    ];


    return (
        <>
            <Navbar
                onProjectsClick={scrollToProjects}
                handleHomeClick={handleHomeClick}
            />


            <main>

                {/* =================================================
                    HERO
                ================================================= */}

                <section
                    className="hero"
                    id="home"
                >

                    <div className="hero-content">

                        <p className="eyebrow">
                            SOFTWARE · AI/ML · FRONTEND
                        </p>


                        <h1>
                            Hey, I'm Lisa.
                            <span>
                                I build things with code,
                                data & curiosity.
                            </span>
                        </h1>


                        <p className="hero-description">
                            I'm a fourth-year Information Technology student
                            at VIT Vellore interested in software development,
                            machine learning, and building useful things from
                            ideas that start out as "what if?"
                        </p>


                        <div className="hero-buttons">

                            <button
                                className="primary-button"
                                onClick={scrollToProjects}
                            >
                                See My Work
                            </button>


                            <button
                                className="secondary-button"
                                onClick={scrollToContact}
                            >
                                Get In Touch
                            </button>

                        </div>

                    </div>


                    <div className="hero-image-wrapper">

                        <img
                            src={profileImage}
                            alt="Illustration representing Lisa"
                            className="hero-image"
                        />

                    </div>

                </section>


                {/* =================================================
                    QUICK INTRO
                ================================================= */}

                <section className="intro-strip">

                    <p>
                        Currently exploring
                        <strong>
                            {' '}AI/ML, intelligent systems,
                            data engineering, and full-stack development.
                        </strong>
                    </p>

                </section>


                {/* =================================================
                    SELECTED WORK
                ================================================= */}

                <section
                    className="projects-section"
                    ref={projectsRef}
                    id="projects"
                >

                    <div className="section-heading">

                        <p className="eyebrow">
                            SELECTED WORK
                        </p>

                        <h2>
                            Things I've built.
                        </h2>

                        <p>
                            A few projects I'm particularly proud of,
                            ranging from machine learning and data systems
                            to networking, cybersecurity, and software
                            development.
                        </p>

                    </div>


                    <div className="projects-grid">

                        {projects.map((project) => (

                            <article
                                className={`project-card ${
                                    project.featured
                                        ? 'featured-project'
                                        : ''
                                }`}
                                key={project.number}
                            >

                                <div className="project-top">

                                    <span className="project-number">
                                        {project.number}
                                    </span>

                                    <span className="project-status">
                                        {project.status}
                                    </span>

                                </div>


                                <div className="project-content">

                                    <p className="project-category">
                                        {project.category}
                                    </p>


                                    <h3>
                                        {project.title}
                                    </h3>


                                    <p className="project-description">
                                        {project.description}
                                    </p>


                                    <div className="project-technologies">

                                        {project.technologies.map(
                                            (technology) => (

                                                <span
                                                    key={technology}
                                                    className="project-tech"
                                                >
                                                    {technology}
                                                </span>

                                            )
                                        )}

                                    </div>


                                    <div className="project-bottom">

                                        <span className="project-metric">
                                            {project.metric}
                                        </span>


                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link"
                                        >
                                            View Project ↗
                                        </a>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </section>


                {/* =================================================
                    EXPERIENCE
                ================================================= */}

                <section
                    className="experience-section"
                    id="experience"
                >

                    <div className="section-heading">

                        <p className="eyebrow">
                            EXPERIENCE
                        </p>

                        <h2>
                            Places I've worked.
                        </h2>

                    </div>


                    <div className="experience-list">


                        {/* RARA LABS */}

                        <article className="experience-card">

                            <div className="experience-meta">

                                <p className="experience-date">
                                    MAY — JUNE 2025
                                </p>

                                <p className="experience-type">
                                    Internship
                                </p>

                            </div>


                            <div className="experience-main">

                                <h3>
                                    Front-End Development Intern
                                </h3>

                                <p className="experience-company">
                                    Rara Labs
                                </p>

                                <ul>

                                    <li>
                                        Developed responsive user
                                        interfaces using React,
                                        HTML, CSS, and JavaScript.
                                    </li>

                                    <li>
                                        Integrated APIs to support
                                        dynamic content within the
                                        application.
                                    </li>

                                    <li>
                                        Worked with design teams to
                                        improve usability and frontend
                                        performance.
                                    </li>

                                </ul>

                            </div>

                        </article>


                        {/* EWAN */}

                        <article className="experience-card">

                            <div className="experience-meta">

                                <p className="experience-date">
                                    MAY — JUNE 2026
                                </p>

                                <p className="experience-type">
                                    Internship
                                </p>

                            </div>


                            <div className="experience-main">

                                <h3>
                                    App Development Intern
                                </h3>

                                <p className="experience-company">
                                    Ewan Engineering
                                </p>

                                <ul>

                                    <li>
                                        Developed cross-platform
                                        mobile application features
                                        using React Native and
                                        JavaScript.
                                    </li>

                                    <li>
                                        Built reusable and responsive
                                        UI components for mobile
                                        applications.
                                    </li>

                                    <li>
                                        Integrated REST APIs to fetch
                                        and display dynamic data.
                                    </li>

                                </ul>

                            </div>

                        </article>

                    </div>

                </section>


                {/* =================================================
                    SKILLS
                ================================================= */}

                <section
                    className="skills-section"
                    id="skills"
                >

                    <div className="section-heading">

                        <p className="eyebrow">
                            TOOLKIT
                        </p>

                        <h2>
                            What I work with.
                        </h2>

                    </div>


                    <div className="skills-grid">

                        <div className="skill-group">

                            <h3>
                                Languages
                            </h3>

                            <p>
                                Python · C++ · JavaScript · SQL
                            </p>

                        </div>


                        <div className="skill-group">

                            <h3>
                                AI & Data
                            </h3>

                            <p>
                                NLP · Scikit-learn · Causal Inference ·
                                Reinforcement Learning · Big Data
                            </p>

                        </div>


                        <div className="skill-group">

                            <h3>
                                Web & Mobile
                            </h3>

                            <p>
                                React · React Native · Django · Flask ·
                                HTML · CSS · Figma · REST APIs
                            </p>

                        </div>


                        <div className="skill-group">

                            <h3>
                                Tools & Systems
                            </h3>

                            <p>
                                Git · GitHub · Apache Kafka · PostgreSQL ·
                                MySQL · FastAPI · Streamlit
                            </p>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    ACHIEVEMENT
                ================================================= */}

                <section className="achievement-section">

                    <div className="achievement-card">

                        <p className="eyebrow">
                            RESEARCH & INNOVATION
                        </p>


                        <div className="achievement-content">

                            <div>

                                <p className="achievement-label">
                                    PUBLISHED PATENT APPLICATION
                                </p>

                                <h2>
                                    Context-Aware NLP System
                                    for Harassment Filtering
                                </h2>

                            </div>


                            <div>

                                <p>
                                    A cyberbullying detection system
                                    developed for social media streams,
                                    combining classification, severity
                                    analysis, explainability, escalation
                                    scoring, and forensic evidence.
                                    <br></br>
                                    <b>Application No. 202641086439 · Published July 2026</b>
                                    <br></br>
                                </p>

                                <span className="patent-status">
                                    Published · Under Examination
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    ABOUT
                ================================================= */}

                <section
                    className="about-section"
                    id="about"
                >

                    <div className="section-heading">

                        <p className="eyebrow">
                            ABOUT
                        </p>

                        <h2>
                            A little about me.
                        </h2>

                    </div>


                    <div className="about-content">

                        <p>
                            I'm a fourth-year Information Technology
                            student at VIT Vellore. I started out mostly
                            building interfaces and gradually found myself
                            getting more curious about what happens behind
                            them mostly data, systems, models, and the problems
                            they can solve.
                        </p>


                        <p>
                            These days, my projects sit somewhere between
                            software development and AI/ML and UI/UX.
                            I've worked on
                            real-time data pipelines, NLP systems,
                            reinforcement learning, networking, and causal
                            analysis, while still enjoying the frontend
                            side of building things.
                        </p>


                        <p>
                            I like projects where I can learn something
                            new while making something that actually works.
                            And yes, I still care way too much about how
                            the final interface looks.
                        </p>

                    </div>

                </section>


                {/* =================================================
                    CURRENTLY EXPLORING
                ================================================= */}

                <section className="building-section">

                    <p className="eyebrow">
                        CURRENTLY EXPLORING
                    </p>

                    <h2>
                        AI/ML systems, better software, frontend
                        and whatever interesting problem
                        comes next.
                    </h2>

                </section>


                {/* =================================================
                    CONTACT
                ================================================= */}

                <section
                    className="contact-section"
                    id="contact"
                    ref={contactRef}
                >

                    <p className="eyebrow">
                        LET'S CONNECT
                    </p>

                    <h2>
                        Want to build
                        <span> something?</span>
                    </h2>

                    <p className="contact-description">
                        I'm always happy to talk about interesting projects,
                        internships, ideas, or opportunities.
                    </p>


                    <div className="social-links">

                        <button
                            onClick={() =>
                                window.open(
                                    'https://www.linkedin.com/in/lisa-ghimire-85bab028a/',
                                    '_blank'
                                )
                            }
                        >

                            <img
                                src={linkedinIcon}
                                alt=""
                            />

                            LinkedIn

                        </button>


                        <button
                            onClick={() =>
                                window.open(
                                    'https://github.com/lisaghimire12',
                                    '_blank'
                                )
                            }
                        >

                            <img
                                src={githubIcon}
                                alt=""
                            />

                            GitHub

                        </button>

                    </div>

                </section>

            </main>
        </>
    );
}


export default Homepage;