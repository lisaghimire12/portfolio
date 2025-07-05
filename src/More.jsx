import Navbar from "./Navbar";
import './More.css';
import Image from '/src/assets/images/img1.png'
import Image8 from '/src/assets/images/img8.svg'
import Image9 from '/src/assets/images/img9.svg'
import { useNavigate } from "react-router-dom";

function More() {

    const navigate= useNavigate();

      const handleHomeClick = () => {
    navigate('/');
  };

    return (
        <>
            <Navbar handleHomeClick={handleHomeClick} />
            <div id='more-intro'>
                <h3 className='more-text' >Get In Touch<span style={{ color: "#67485A" }} >.</span></h3>

                <h3 className='more-para' >Looking to partner or work together? Reach
                    <br></br> out through the form and I'll get back to you
                    <br></br> in the next 48 hours.</h3>
            </div>
            <div id="more-details" >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lisa.ghimire1@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button id="more-mail">
                        <img id="more-mail-img" src={Image8} alt="mail" />
                        <p id="more-p">lisa.ghimire1@gmail.com</p>
                    </button>
                </a>
               
                    <button id="more-phone" onClick={()=> window.open("https://www.whatsapp.com/, _blank")}>
                        <img id="more-phone-img" src={Image9} alt="phone" />
                        <p id="more-p">+91-8122603493</p>
                    </button>
                

                    <button id="more-ph" onClick={()=>window.open("https://www.whatsapp.com/, _blank")} >
                        <img id="more-phone-img" src={Image9} alt="phone" />
                        <p id="more-p">+977-9742557149</p>
                    </button>
                

            </div>
            <div id='more-image' >
                <img id='more-inner' src={Image} alt='image'></img>
            </div>
        </>
    )
}
export default More;