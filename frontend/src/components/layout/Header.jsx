import React from "react";
import "./Header.css"; // Import your CSS file for styling

const Header = () => {
    return (
        <div className="text-4xl">
            <header className="header">
                <h1>whatsOn</h1>
                <nav className="nav-links">
                    <a href="/home" className="link">
                        Home
                    </a>
                    <a href="/about" className="link">
                        About
                    </a>
                    <a href="/services" className="link">
                        Services
                    </a>
                    <a href="/contact" className="link">
                        Contact
                    </a>
                    <a href="/blog" className="link">
                        Blog
                    </a>
                </nav>
            </header>
        </div>
    );
};

export default Header;