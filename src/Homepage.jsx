import { Navigate, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import './Homepage.css';
import Navbar from './Navbar';
import Image from '/src/assets/images/img1.png'
import Image2 from '/src/assets/images/img2.png'
import Image3 from '/src/assets/images/img3.png'
import Image4 from '/src/assets/images/img4.png'
import Image5 from '/src/assets/images/img5.png'
import Image6 from '/src/assets/images/img6.svg'
import Image7 from '/src/assets/images/img7.svg'
import Image10 from '/src/assets/images/img10.svg'


function Homepage() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
    navigate('/');
  };

    const projectsRef = useRef(null);
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };





    return (
        <>
            <Navbar onProjectsClick={scrollToProjects} handleHomeClick={handleHomeClick} />            
            <div id='intro'>
                <h3 className='text' >Hey,I'm Lisa👋🏻</h3>
                <h1>UG B.Tech <br></br>IT Student</h1>
                <h3 className='text1' >I'm a IT undergrad at VIT, Vellore <br></br>
                    creating clean, impactful digital experiences.</h3>
                <button id='intro-button1' onClick={() => navigate('/more')} >Get In Touch</button>
                <button id='intro-button2' onClick={scrollToProjects} >Browse Projects</button>
            </div>
            <div id='image' >
                <img id='inner' src={Image} alt='image'></img>
            </div>


            <h2 id='text2' >Projects<span style={{ color: "#67485A" }} >.</span></h2>
            <div id='projects' ref={projectsRef}>
                <button id='proj1'  
                onClick={() => window.open("https://e-commerse-opal.vercel.app/", "_blank")}>
                    <img id='proj-img' src={Image2} alt='project1'>
                    </img>
                </button>
                <h3 id='topic' >CLICON</h3>
                <p id='description'>E-commerce platform showcasing eco-friendly <br></br>
                    products using React and product API integration</p>

                <button id='proj2' 
                onClick={() => window.open("https://translator-ebon-eight.vercel.app/", "_blank")}>
                    <img id='proj-img' src={Image3} alt='project1'></img>
                </button>
                <h3 id='topic2'>TRANSLATOR.IO</h3>
                <p id='description2'> Translator app built with React(JSX), enabling seamless multilingual <br></br>text conversion using external APIs that features language,text-to-speech and clipboard support.</p>

                <button id='proj3' >
                    <img id='proj-img' src={Image10} alt='project3'
                        onClick={() => window.open("https://weatherwear-vlqg.onrender.com/?city=Reykjavik", "_blank")}
                    >
                    </img>
                </button>
                <h3 id='topic3' >WeatherWear</h3>
                <p id='description3'>WeatherWear is a Django web app that fetches real-time weather using the<br></br> OpenWeather API and suggests outfit ideas by providing curated Pinterest links,<br></br> helping users dress appropriately and explore style inspiration.</p>


                <button id='proj4' >
                    <img id='proj-img' src={Image5} alt='project4'
                        onClick={() => window.open("https://lisaghimire12.pythonanywhere.com/", "_blank")}
                    >
                    </img>
                </button>
                <h3 id='topic4' >Event Manager</h3>
                <p id='description4'>
                    Developed a full-stack event management web application using Django with integrated Bootstrap UI for responsive design. The platform enables users to create, view, update, and delete events, while administrators can manage all events via a customized Django admin panel.

                </p>

            </div>


            <div id='experience' > 
                <h2 id='text3' >Experience<span style={{ color: "#67485A" }} >.</span></h2>
                <h3 style={{ position: "absolute", color: "black", top: "303%", left: "3%" }} >
                    Front end Development Intern
                    <span style={{ color: "#67485A" }} >
                        @Rara Labs
                    </span>
                </h3>
                <p style={{ fontWeight: "20px", color: "gray", top: "308%", position: "absolute", left: "3%" }} >
                    May 19,2025-June 09,2025</p>
                <ul>
                    <li>Developed user interfaces using React.js</li>
                    <li>Implemented responsive and user-friendly designs using HTML, CSS and JavaScript</li>
                    <li>Integrated APIs to ensure dynamic and seamless content rendering</li>
                </ul>
            </div>

            <div>
                <h2 id='text4' >Skills<span style={{ color: "#67485A" }} >.</span></h2>
                <h3 style={{ position: "absolute", color: "black", top: "360%", left: "3%", fontWeight: "700", fontSize: "25px" }} >
                    Web Design </h3>
                <div id='web'>
                    <p>UI/UX Design</p>
                    <p>Responsive Design</p>
                    <p>Wireframing</p>
                    <p>User Research</p>
                </div>
            </div>
            <h3 id='fend'>
                Frontend </h3>
            <div id='frontend'>
                <p>Javascript</p>
                <p>ReactJS</p>
                <p>CSS3</p>
            </div>

            <h3 style={{ position: "absolute", color: "black", top: "360%", left: "50%", fontWeight: "700", fontSize: "25px" }} >
                Backend </h3>
            <div id='backend'>
                <p>Version control (Git/GitHub)</p>
                <p>MondoDB</p>
                <p>SQL</p>
            </div>

            <h3 style={{ position: "absolute", color: "black", top: "360%", left: "75%", fontWeight: "700", fontSize: "25px" }} >
                Soft Skills </h3>
            <div id='ss'>
                <p>Effective communication</p>
                <p>Collaboration</p>
                <p>Commitment</p>
                <p>Leadership</p>
            </div>


            
            <div id='story' >
                <h2 id='text4' >My Story<span style={{ color: "#67485A" }} >.</span></h2>

                <p id='p-story' >
                    I ’m currently pursuing my B.Tech at <span style={{ color: "#67485A", fontWeight: "700" }} >VIT Vellore </span>, and over time, I’ve found myself more inclined toward front-end development than any other area in tech.
                    <br></br><br></br>
                    I’ve completed an internship at<span style={{ color: "#67485A", fontWeight: "700" }}> Rara Labs</span> that gave me hands-on experience with real-world projects, and since then, I’ve been diving deeper into frameworks like React and tools like Vite and CSS.
                    <br></br><br></br>
                    While I’m still in the learning phase, I enjoy building clean, interactive user interfaces and continuously exploring new design ideas.
                    <br></br><br></br>
                    When I’m not coding, I love traveling and capturing moments through my lens. Photography gives me a creative outlet beyond the screen. I'm looking forward to what comes next, one step at a time. ✨
                </p>
            </div>
            <div id='icons'>
                <button id='linkedin' onClick={() => window.open("https://www.linkedin.com/in/lisa-ghimire-85bab028a/", "_blank")} >
                    <img id='icon' src={Image6} alt='linkedIn'></img>
                </button>

                <button id='github' onClick={() => window.open("https://github.com/lisaghimire12", "_blank")} >
                    <img id='icon' src={Image7} alt='github'></img>
                </button>
            </div>

        </>
    )
}
export default Homepage;