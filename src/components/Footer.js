// Footer of the web page. Displays the creators of the app.

import React from "react";
import "../styles/Footer.css";
import { SiGithub, SiItchdotio, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Footer() {

    function componentDidMount() {
        window.scrollTo(0, 0)
    }

    return (

        <>
            <footer className="Footer">
                <div className="Footer-container">
                    <h1>More Informations :</h1>
                    <div className="social-container">
                        <div className='social-links'>
                            <a rel="noopener noreferrer" href={"mailto:dylan1.faure@epitech.eu"} target={"_blank"}>
                                <div className='social-btn flex-center' id="email">
                                    <MdEmail size={40} /><span>dylan1.faure@epitech.eu</span>
                                </div>
                            </a>
                            <a rel="noopener noreferrer" href={"https://faure78.itch.io/"} target={"_blank"}>
                                <div className='social-btn flex-center' id="itchio">
                                    <SiItchdotio size={40} /><span>itch.io/faure78</span>
                                </div>
                            </a>
                            <a rel="noopener noreferrer" href={"https://github.com/DylanFaure"} target={"_blank"}>
                                <div className='social-btn flex-center' id="github">
                                    <SiGithub size={40} /><span>github/DylanFaure</span>
                                </div>
                            </a>
                            <a rel="noopener noreferrer" href={"https://www.linkedin.com/in/dylan-faure/"} target={"_blank"}>
                                <div className='social-btn flex-center' id="linkedin">
                                    <SiLinkedin size={40} /><span>in/dylan-faure</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={componentDidMount} variant="outline-light" className="Footer-buttonUp">
                        ⬆
                    </button>
                </div>
            </footer>
        </>
    );
}

export default Footer;