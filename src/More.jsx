import Navbar from "./Navbar";
import './More.css';
import Image from '/src/assets/images/picture.png';
import { useNavigate } from "react-router-dom";
import contact from '/src/assets/images/contact.svg';
import mail from '/src/assets/images/mail.svg';


function More() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <>
            <Navbar handleHomeClick={handleHomeClick} />


            <div id="more-wrapper">
                <div id="more-left">
                    <h3 className="more-text">
                        Get In Touch<span style={{ color: "#67485A" }}>.</span>
                    </h3>
                    <h3 className="more-para">
                        Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
                    </h3>

                    <div id="more-details">
                        <a
                            href="mailto:lisa.ghimire1@gmail.com"
                            target="_blank"
                        >
                            <div className="info">
                                <img className="contact" src={mail} alt="mail"></img>
                                <h2 className="more">lisa.ghimire1@gmail.com</h2>
                            </div>
                        </a>

                        <a
                            href="https://www.whatsapp.com/"
                            target="_blank"
                        >
                            <div className="info" >
                                <img className="contact" src={contact} alt="Contact"></img>
                                <h2 className="more">+91-8122603493</h2>
                            </div>
                        </a>


                        {/* <a
                            href="https://www.whatsapp.com/"
                            target="_blank"
                        >
                           <h2 className="more">+977-9742557149</h2>
                        </a> */}
                    </div>
                </div>

                <div id="more-image">
                    <img id="more-inner" src={Image} alt="profile" />
                </div>
            </div >
        </>
    );
}

export default More;
