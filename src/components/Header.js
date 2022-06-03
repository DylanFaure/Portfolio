import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import "../styles/Header.css";

function Header() {

    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setShrunk(true);
            } else {
                setShrunk(false);
            }
        });
        return () => window.removeEventListener("Header", () => { });
    }, [isShrunk]);

    return (
        <>
            <div className={`${isShrunk ? 'Header' : ''}`}>
                <div className="Header-container">
                    <Navbar />
                    <div className="Header-description">
                        <h3 className="Header-description-title">
                            Dylan FAURE
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Header;