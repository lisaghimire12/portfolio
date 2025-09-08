import { Navigate, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import './Homepage.css';
import Navbar from './Navbar';
import Image from '/src/assets/images/picture.png'
import Image2 from '/src/assets/images/ecommerce.png'
import Image3 from '/src/assets/images/translate.png'
import Image4 from '/src/assets/images/ticket.png'
import Image5 from '/src/assets/images/event.png'
import Image6 from '/src/assets/images/linkedin.svg'
import Image7 from '/src/assets/images/github.svg'
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
            <Navbar 
            onProjectsClick={scrollToProjects} 
            handleHomeClick={handleHomeClick} 
           
            />
            <div id='first'>
                <div id='intro'>
                    <h3 className='text' >Hey,I'm Lisa👋🏻</h3>
                    <h1 className='ug' >UG B.Tech <br></br>IT Student</h1>
                    <h3 className='text1' >I'm a IT undergrad at VIT, Vellore <br></br>
                        creating clean, impactful digital experiences.</h3>
                    <button id='intro-button1' onClick={() => navigate('/more')} >Get In Touch</button>
                    <button id='intro-button2' onClick={scrollToProjects} >Browse Projects</button>
                </div>
                <div id='image' >
                    <img id='inner' src={Image} alt='image'></img>
                </div>
            </div>

            <h2 className='text2' >Projects<span style={{ color: "#67485A" }} >.</span></h2>
            <div id='projects' ref={projectsRef}>
                <div className='project'>
                    <a href="https://e-commerse-opal.vercel.app/" target="_blank" >
                        <img className='proj-img' src={Image2} alt='CLICON project screenshot' />
                    </a>
                    <h3 className='topic'>CLICON</h3>
                    <p className='description'>
                        A React-based e-commerce platform for eco-friendly products. Integrated with a product API to fetch and display product data dynamically.
                    </p>
                </div>

                <div className='project'>
                    <a href="https://weatherwear-vlqg.onrender.com/?city=Reykjavik" target="_blank">
                        <img className='proj-img' src={Image10} alt='Translator project screenshot' />
                    </a>
                    <h3 className='topic'>WeatherWear</h3>
                    <p className='description'> WeatherWear is a Django web app that fetches real-time weather using the
                        OpenWeather API and suggests outfit ideas by providing curated Pinterest links,
                        helping users dress appropriately and explore style inspiration.</p>
                </div>

                <div className='project'>
                    <a href="https://conference-ticket-generator-black.vercel.app/" target="_blank">
                        <img className='proj-img' src={Image4} alt='Conference project screenshot' />
                    </a>
                    <h3 className='topic' >CODING-CONF</h3>
                    <p className='description'>Conference ticket generator built with React(JSX), allowing users to fill and validate form details. Generates a personalized ticket on submission with responsive <br></br>
                        and accessible design products using React and product API integration</p>
                </div>

                <div className='project'>
                    <a href="https://lisaghimire12.pythonanywhere.com/" target="_blank">
                        <img className='proj-img' src={Image5} alt='EventManager project screenshot' />
                    </a>
                    <h3 className='topic' >Event Manager</h3>
                    <p className='description'>
                        Developed a full-stack event management web application using Django with integrated Bootstrap UI for responsive design. The platform enables users to create, view, update, and delete events, while administrators can manage all events via a customized Django admin panel.

                    </p>

                </div>
            </div>


            <div id='experience' >
                <h2 className='text2' >Experience<span style={{ color: "#67485A" }} >.</span></h2>
                <h3 className='ex-h3'>Front end Development Intern
                    <span style={{ color: "#67485A" }} > <t></t>
                        @Rara Labs
                    </span>
                </h3>
                <p className='ex-p' > May 19,2025-June 09,2025</p>
                <ul>
                    <li>Developed user interfaces using React.js</li>
                    <li>Implemented responsive and user-friendly designs using HTML, CSS and JavaScript</li>
                    <li>Integrated APIs to ensure dynamic and seamless content rendering</li>
                </ul>
            </div>

            <h2 className='text2' >Skills<span style={{ color: "#67485A" }} >.</span></h2>
            <div className='skills' >
                <div id='web'>
                    <h3 className='sk-text' >
                        Web Design </h3>
                    <div className='list'>
                        <p>UI/UX Design</p>
                        <p>Responsive Design</p>
                        <p>Wireframing</p>
                        <p>User Research</p>
                    </div>
                </div>

                <div id='frontend'>
                    <h3 className='sk-text'>
                        Frontend </h3>
                    <div className='list'>
                        <p>Javascript</p>
                        <p>ReactJS</p>
                        <p>CSS3</p>
                    </div>
                </div>

                <div id='backend'>
                    <h3 className='sk-text'>
                        Backend </h3>
                    <div className='list'>
                        <p>Version control (Git/GitHub)</p>
                        <p>MongoDB</p>
                        <p>SQL</p>
                    </div>
                </div>

                <div id='ss'>
                    <h3 className='sk-text'>
                        Soft Skills </h3>
                    <div className='list'>
                        <p>Effective communication</p>
                        <p>Collaboration</p>
                        <p>Commitment</p>
                        <p>Leadership</p>
                    </div>
                </div>
            </div>



            <div id='story' >
                <h2 className='text2' >My Story<span style={{ color: "#67485A" }} >.</span></h2>

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
                    <img id='icon' src={Image7} alt='linkedIn'></img>
                </button>

                <button id='github' onClick={() => window.open("https://github.com/lisaghimire12", "_blank")} >
                    <img id='icon' src={Image6} alt='github'></img>
                </button>
            </div>

        </>
    )
}
export default Homepage;