import './Navbar.css';

function Navbar({ onProjectsClick, handleHomeClick }) {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button
                    onClick={handleHomeClick}
                    className="navbar-logo"
                >
                    Lisa<span>.</span>
                </button>
            </div>

            <div className="navbar-links">
                <button onClick={handleHomeClick}>
                    Home
                </button>

                <button onClick={onProjectsClick}>
                    Work
                </button>

                <button onClick={() =>
                    document.getElementById('experience')?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }>
                    Experience
                </button>

                <button onClick={() =>
                    document.getElementById('skills')?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }>
                    Skills
                </button>

                <button onClick={() =>
                    document.getElementById('story')?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }>
                    About
                </button>

                <button onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }>
                    Contact
                </button>

                <a
                    href="https://github.com/lisaghimire12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                >
                    GitHub ↗
                </a>
            </div>
        </nav>
    );
}

export default Navbar;