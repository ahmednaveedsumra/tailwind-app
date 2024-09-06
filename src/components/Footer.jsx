import React from 'react' 
import './CSS/Footer.css'
import spi from "../assets/img/spi.png";
import instagram_icon from '../assets/img/instagram_icon.png'
import pintester_icon from '../assets/img/pintester_icon.png'
import whatsapp_icon from '../assets/img/whatsapp_icon.png'



const Footer =()=>{

    return(

        <div className='footer'>
            <div className="footer-logo">
                <img src={spi} alt=""/>
                <p>Ahmad</p>


            </div>
            <ul className="footer-links">

                <li>Home</li>
                <li>About</li>
                <li>Resources</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt=""/> 
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt=""/> 
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt=""/> 
                </div>
            </div>

            <div className="footer-copyright">
                <hr/>
                <p> Copy @ 2099 - All Rights Reserved</p>
            </div>

        </div>
    )
}
export default Footer