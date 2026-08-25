import './Navbar.css';

function Navbar({ onProjectsClick }) {

    const scrollToSection = (className) => {
        const section = document.querySelector(`.${className}`);

        if (section) {
            const navbarHeight = 82;

            const sectionPosition =
                section.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;

            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }
    };

    const goHome = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="navbar">

            {/* LOGO */}
            <div className="navbar-left">
                <button
                    className="navbar-logo"
                    onClick={goHome}
                    aria-label="Go to homepage"
                >
                    Lisa<span>.</span>
                </button>
            </div>


            {/* NAVIGATION */}
            <div className="navbar-links">

                <button onClick={goHome}>
                    Home
                </button>

                <button
                    onClick={() => scrollToSection('projects-section')}
                >
                    Work
                </button>

                <button
                    onClick={() => scrollToSection('experience-section')}
                >
                    Experience
                </button>

                <button
                    onClick={() => scrollToSection('skills-section')}
                >
                    Skills
                </button>

                <button
                    onClick={() => scrollToSection('about-section')}
                >
                    About
                </button>

                <button
                    onClick={() => scrollToSection('contact-section')}
                >
                    Contact
                </button>

                <a
                    className="github-link"
                    href="https://github.com/lisaghimire12"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>

            </div>

        </nav>
    );
}

export default Navbar;