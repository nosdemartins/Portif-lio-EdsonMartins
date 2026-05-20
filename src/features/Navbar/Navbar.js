import React from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

function Navbar() {
    return (
        <>
            <header className="navbar">

                <h3 className="logo">
                    .dev
                </h3>


                <nav className="nav-container">
                    <div className="nav-links">
                        <a href="#portfolio-edson-martins" className="menu-link">início</a>
                        <a href="#sobre" className="menu-link">Sobre</a>
                        <a href="#projetos" className="menu-link">Projetos</a>
                        <a href="#contato" className="menu-link">Contato</a>
                    </div>
                </nav>


                <div className="navbar-actions">
                    <ThemeToggle />
                </div>
            </header>


            <section id="portfolio-edson-martins" className="hero">
                <h1>
                    Full Stack Developer
                </h1>
                <p>
                    Transformando problemas complexos em produtos digitais escaláveis com React, Python e IA.
                </p>
            </section>
        </>
    );
}

export default Navbar;