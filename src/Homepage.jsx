import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './Homepage.css';
import Navbar from './Navbar';

import profileImage from '/src/assets/images/picture.png';
import linkedinIcon from '/src/assets/images/linkedin.svg';
import githubIcon from '/src/assets/images/github.svg';


function Homepage() {

    const navigate = useNavigate();

    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const [scrollY, setScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0
    });


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


/* SCROLL*/

    useEffect(() => {

        const handleScroll = () => {

            const currentScroll =
                window.scrollY;

            setScrollY(currentScroll);


            const totalHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;


            if (totalHeight > 0) {

                setScrollProgress(
                    (currentScroll / totalHeight) * 100
                );

            }

        };


        window.addEventListener(
            'scroll',
            handleScroll,
            { passive: true }
        );


        handleScroll();


        return () => {

            window.removeEventListener(
                'scroll',
                handleScroll
            );

        };

    }, []);


/*Mouse movement*/

    useEffect(() => {

        const handleMouseMove = (event) => {

            const x =
                (event.clientX / window.innerWidth - 0.5) * 18;

            const y =
                (event.clientY / window.innerHeight - 0.5) * 18;


            setMouse({
                x,
                y
            });

        };


        window.addEventListener(
            'mousemove',
            handleMouseMove
        );


        return () => {

            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );

        };

    }, []);


/*reveal*/

    useEffect(() => {

        const elements =
            document.querySelectorAll('.reveal');


        if (!elements.length) {
            return;
        }


        const observer =
            new IntersectionObserver(

                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    'is-visible'
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12
                }

            );


        elements.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );


        return () => {
            observer.disconnect();
        };

    }, []);

/*Projects*/

    const projects = [

        {
            number: '01',

            title:
                'User Journey Intelligence System',

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
            <div
                className="scroll-progress"
                style={{
                    width: `${scrollProgress}%`
                }}
            />


            <Navbar
                onProjectsClick={scrollToProjects}
                handleHomeClick={handleHomeClick}
            />


            <main>
                <section
                    className="hero"
                    id="home"
                >


                    <div
                        className="hero-content"

                        style={{
                            transform: `
                                translateY(${scrollY * -0.10}px)
                                scale(${1 - Math.min(scrollY / 7000, 0.045)})
                            `,

                            opacity:
                                Math.max(
                                    0,
                                    1 - scrollY / 850
                                )
                        }}
                    >

                        <p className="eyebrow hero-eyebrow">

                            SOFTWARE · AI/ML · FRONTEND

                        </p>


                        <h1 className="hero-title">

                            <span
                                className="
                                    hero-line
                                    hero-white
                                "
                            >
                                Hey, I'm Lisa.
                            </span>


                            <span
                                className="
                                    hero-line
                                    hero-pink
                                "
                            >
                                I build things with code,
                            </span>


                            <span
                                className="
                                    hero-line
                                    hero-white
                                "
                            >
                                data & curiosity.
                            </span>

                        </h1>


                        <p className="hero-description">

                            I'm a fourth-year Information
                            Technology student at VIT Vellore
                            interested in software development,
                            machine learning, and building useful
                            things from ideas that start out as
                            "what if?"

                        </p>


                        <div className="hero-buttons">

                            <button
                                className="primary-button"
                                onClick={
                                    scrollToProjects
                                }
                            >
                                See My Work
                                <span>↓</span>
                            </button>


                            <button
                                className="secondary-button"
                                onClick={
                                    scrollToContact
                                }
                            >
                                Get In Touch
                                <span>↗</span>
                            </button>

                        </div>

                    </div>


                   

                    <div
                        className="hero-image-wrapper"

                        style={{
                            transform: `
                                translate(
                                    ${mouse.x}px,
                                    ${mouse.y - scrollY * 0.12}px
                                )
                            `
                        }}
                    >

                        <div
                            className="
                                hero-orbit
                                orbit-one
                            "
                        >
                            <span />
                        </div>


                        <div
                            className="
                                hero-orbit
                                orbit-two
                            "
                        >
                            <span />
                        </div>


                        <div
                            className="
                                hero-orbit
                                orbit-three
                            "
                        >
                            <span />
                        </div>


                        <img
                            src={profileImage}
                            alt="Illustration representing Lisa"
                            className="hero-image"
                        />

                    </div>


                 

                    <div
                        className="scroll-indicator"

                        style={{
                            opacity:
                                Math.max(
                                    0,
                                    1 - scrollY / 300
                                )
                        }}
                    >

                        <span className="scroll-line" />

                        <span>
                            SCROLL TO EXPLORE
                        </span>

                    </div>

                </section>


{/* marquee */}

                <section
                    className="
                        marquee-section
                        reveal
                    "
                >

                    <div className="marquee-track">

                        <span>
                            SOFTWARE · AI/ML · FRONTEND ·
                            SYSTEMS · DATA · SOFTWARE ·
                            AI/ML · FRONTEND · SYSTEMS · DATA ·
                        </span>

                        <span>
                            SOFTWARE · AI/ML · FRONTEND ·
                            SYSTEMS · DATA · SOFTWARE ·
                            AI/ML · FRONTEND · SYSTEMS · DATA ·
                        </span>

                        <span>
                            SOFTWARE · AI/ML · FRONTEND ·
                            SYSTEMS · DATA · SOFTWARE ·
                            AI/ML · FRONTEND · SYSTEMS · DATA ·
                        </span>

                    </div>

                </section>


                

                <section
                    className="
                        intro-strip
                        reveal
                    "
                >

                    <p>

                        Currently exploring

                        <strong>
                            {' '}AI/ML, intelligent systems,
                            data engineering, and full-stack
                            development.
                        </strong>

                    </p>

                </section>

{/* projects */}
                <section
                    className="projects-section"
                    ref={projectsRef}
                    id="projects"
                >

                    <div
                        className="
                            section-heading
                            reveal
                        "
                    >

                        <p className="eyebrow">
                            SELECTED WORK
                        </p>


                        <h2>
                            Things I've built.
                        </h2>


                        <p>
                            A few projects I'm particularly proud
                            of, ranging from machine learning and
                            data systems to networking,
                            cybersecurity, and software
                            development.
                        </p>

                    </div>


                    <div className="projects-grid">

                        {projects.map(
                            (project, index) => (

                                <article
                                    className={`
                                        project-card
                                        reveal
                                        reveal-delay-${index + 1}
                                        ${project.featured
                                            ? 'featured-project'
                                            : ''
                                        }
                                    `}
                                    key={project.number}
                                >

                                    <div
                                        className="project-top"
                                    >

                                        <span
                                            className="
                                                project-number
                                            "
                                        >
                                            {project.number}
                                        </span>


                                        <span
                                            className="
                                                project-status
                                            "
                                        >
                                            {project.status}
                                        </span>

                                    </div>


                                    <div
                                        className="
                                            project-content
                                        "
                                    >

                                        <p
                                            className="
                                                project-category
                                            "
                                        >
                                            {project.category}
                                        </p>


                                        <h3>
                                            {project.title}
                                        </h3>


                                        <p
                                            className="
                                                project-description
                                            "
                                        >
                                            {project.description}
                                        </p>


                                        <div
                                            className="
                                                project-technologies
                                            "
                                        >

                                            {project.technologies.map(
                                                (technology) => (

                                                    <span
                                                        key={
                                                            technology
                                                        }
                                                        className="
                                                            project-tech
                                                        "
                                                    >
                                                        {technology}
                                                    </span>

                                                )
                                            )}

                                        </div>


                                        <div
                                            className="
                                                project-bottom
                                            "
                                        >

                                            <span
                                                className="
                                                    project-metric
                                                "
                                            >
                                                {project.metric}
                                            </span>


                                            <a
                                                href={
                                                    project.github
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className="
                                                    project-link
                                                "
                                            >
                                                View Project ↗
                                            </a>

                                        </div>

                                    </div>

                                </article>

                            )
                        )}

                    </div>

                </section>


{/* experience */}

                <section
                    className="experience-section"
                    id="experience"
                >

                    <div
                        className="
                            section-heading
                            reveal
                        "
                    >

                        <p className="eyebrow">
                            EXPERIENCE
                        </p>


                        <h2>
                            Places I've worked.
                        </h2>

                    </div>


                    <div className="experience-list">


                       

                        <article
                            className="
                                experience-card
                                reveal
                            "
                        >

                            <div
                                className="
                                    experience-meta
                                "
                            >

                                <p
                                    className="
                                        experience-date
                                    "
                                >
                                    MAY — JUNE 2025
                                </p>


                                <p
                                    className="
                                        experience-type
                                    "
                                >
                                    Internship
                                </p>

                            </div>


                            <div
                                className="
                                    experience-main
                                "
                            >

                                <h3>
                                    Front-End Development
                                    Intern
                                </h3>


                                <p
                                    className="
                                        experience-company
                                    "
                                >
                                    Rara Labs
                                </p>


                                <ul>

                                    <li>
                                        Developed responsive
                                        user interfaces using
                                        React, HTML, CSS, and
                                        JavaScript.
                                    </li>


                                    <li>
                                        Integrated APIs to support
                                        dynamic content within
                                        the application.
                                    </li>


                                    <li>
                                        Worked with design teams
                                        to improve usability and
                                        frontend performance.
                                    </li>

                                </ul>

                            </div>

                        </article>


                       

                        <article
                            className="
                                experience-card
                                reveal
                                reveal-delay-2
                            "
                        >

                            <div
                                className="
                                    experience-meta
                                "
                            >

                                <p
                                    className="
                                        experience-date
                                    "
                                >
                                    MAY — JUNE 2026
                                </p>


                                <p
                                    className="
                                        experience-type
                                    "
                                >
                                    Internship
                                </p>

                            </div>


                            <div
                                className="
                                    experience-main
                                "
                            >

                                <h3>
                                    App Development Intern
                                </h3>


                                <p
                                    className="
                                        experience-company
                                    "
                                >
                                    Ewan Engineering
                                </p>


                                <ul>

                                    <li>
                                        Developed cross-platform
                                        mobile application
                                        features using React
                                        Native and JavaScript.
                                    </li>


                                    <li>
                                        Built reusable and
                                        responsive UI components
                                        for mobile applications.
                                    </li>


                                    <li>
                                        Integrated REST APIs to
                                        fetch and display dynamic
                                        data.
                                    </li>

                                </ul>

                            </div>

                        </article>

                    </div>

                </section>


{/* skills */}

                <section
                    className="skills-section"
                    id="skills"
                >

                    <div
                        className="
                            section-heading
                            reveal
                        "
                    >

                        <p className="eyebrow">
                            TOOLKIT
                        </p>


                        <h2>
                            What I work with.
                        </h2>

                    </div>


                    <div className="skills-grid">


                        <div
                            className="
                                skill-group
                                reveal
                            "
                        >

                            <h3>
                                Languages
                            </h3>

                            <p>
                                Python · C++ · JavaScript · SQL
                            </p>

                        </div>


                        <div
                            className="
                                skill-group
                                reveal
                                reveal-delay-2
                            "
                        >

                            <h3>
                                AI & Data
                            </h3>

                            <p>
                                NLP · Scikit-learn · Causal
                                Inference · Reinforcement
                                Learning · Big Data
                            </p>

                        </div>


                        <div
                            className="
                                skill-group
                                reveal
                                reveal-delay-3
                            "
                        >

                            <h3>
                                Web & Mobile
                            </h3>

                            <p>
                                React · React Native · Django ·
                                Flask · HTML · CSS · Figma ·
                                REST APIs
                            </p>

                        </div>


                        <div
                            className="
                                skill-group
                                reveal
                                reveal-delay-4
                            "
                        >

                            <h3>
                                Tools & Systems
                            </h3>

                            <p>
                                Git · GitHub · Apache Kafka ·
                                PostgreSQL · MySQL · FastAPI ·
                                Streamlit
                            </p>

                        </div>

                    </div>

                </section>


{/* patent */}

                <section
                    className="
                        achievement-section
                        reveal
                    "
                    id="patent"
                >

                    <div className="achievement-card">

                        <p className="eyebrow">
                            RESEARCH & INNOVATION
                        </p>


                        <div
                            className="
                                achievement-content
                            "
                        >

                            <div>

                                <p
                                    className="
                                        achievement-label
                                    "
                                >
                                    PUBLISHED PATENT APPLICATION
                                </p>


                                <h2>
                                    Context-Aware NLP System
                                    for Harassment Filtering
                                </h2>

                            </div>


                            <div>

                                <p>

                                    A cyberbullying detection
                                    system developed for social
                                    media streams, combining
                                    classification, severity
                                    analysis, explainability,
                                    escalation scoring, and
                                    forensic evidence.

                                    <br />
                                    <br />

                                    <b>
                                        Application No.
                                        202641086439 · Published
                                        July 2026
                                    </b>

                                </p>


                                <span
                                    className="
                                        patent-status
                                    "
                                >
                                    Published · Under Examination
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


{/* about */}

                <section
                    className="about-section"
                    id="about"
                >

                    <div
                        className="
                            section-heading
                            reveal
                        "
                    >

                        <p className="eyebrow">
                            ABOUT
                        </p>


                        <h2>
                            A little about me.
                        </h2>

                    </div>


                    <div
                        className="
                            about-content
                            reveal
                        "
                    >

                        <p>

                            I'm a fourth-year Information
                            Technology student at VIT Vellore.
                            I started out mostly building
                            interfaces and gradually found
                            myself getting more curious about
                            what happens behind them mostly data,
                            systems, models, and the problems
                            they can solve.

                        </p>


                        <p>

                            These days, my projects sit
                            somewhere between software
                            development, AI/ML, and UI/UX.
                            I've worked on real-time data
                            pipelines, NLP systems,
                            reinforcement learning,
                            networking, and causal analysis,
                            while still enjoying the frontend
                            side of building things.

                        </p>


                        <p>

                            I like projects where I can learn
                            something new while making something
                            that actually works. And yes, I
                            still care way too much about how
                            the final interface looks.

                        </p>

                    </div>

                </section>


{/* currently exploring */}

                <section
                    className="
                        building-section
                        reveal
                    "
                >

                    <p className="eyebrow">
                        CURRENTLY EXPLORING
                    </p>


                    <h2>

                        AI/ML systems, better software,
                        frontend and whatever interesting
                        problem comes next.

                    </h2>

                </section>


{/* contact */}

                <section className="contact-section">

                    <p className="eyebrow">GET IN TOUCH</p>

                    <h2>
                        Let's build something
                        <span> together.</span>
                    </h2>

                    <p className="contact-description">
                        Have a project, opportunity, or just want to talk?
                        I'd love to hear from you.
                    </p>

                    <div className="contact-email">
                        <span>Email me at</span>

                        <a href="mailto:lisa.ghimire1@gmail.com">
                            lisa.ghimire1@gmail.com ↗
                        </a>
                    </div>

                    <div className="social-links">

                        <a
                            href="mailto:lisa.ghimire1@gmail.com"
                            className="contact-button primary-contact"
                        >
                            Send me an email ↗
                        </a>

                        <a
                            href="https://github.com/lisaghimire12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-button"
                        >
                            GitHub ↗
                        </a>

                    </div>

                </section>

            </main>

        </>
    );
}


export default Homepage;