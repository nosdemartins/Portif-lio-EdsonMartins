import React from "react";
import './About.css';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { BiBrain } from 'react-icons/bi';

function About() {
    return (

        <section id="sobre" className="sobre-section">
            <div className="sobre-container">
                <div className="sobre-topo">
                    <h2 className="secao-titulo-centralizado">Sobre Mim</h2>
                </div>
                <div className="sobre-grid">
                    <div className="coluna-perfil">
                        <div className="perfil-foto-box">
                            <img src="/perfil.png" alt="Edson" className="perfil-foto" />
                        </div>
                        <h3 className="perfil-nome">
                            Edson Martins dos Santos Junior <span className="perfil-divisor"></span>
                        </h3>
                        <div className="perfil-stack-box">
                            <h4 className="perfil-stack-titulo">Technology</h4>
                            <p className="perfil-stack-lista">
                                <FaReact /> React, <FaPython /> Python, <BiBrain /> IA, <FaNodeJs /> Node
                            </p>
                        </div>
                    </div>
                    <div className="coluna-texto">
                        <p>
                            Olá! Sou <strong>Desenvolvedor Full Stack Pleno</strong> especializado no ecossistema <strong>React, Python, Node.js e IA</strong>. Atuo de ponta a ponta no desenvolvimento de aplicações modernas, focando na construção de interfaces fluidas e interativas no front-end, combinadas com APIs robustas e eficientes no back-end.
                        </p>
                        <p>
                            Minha abordagem técnica é pautada em boas práticas: escrevo código limpo, modular e de fácil manutenção. Tenho experiência prática integrando modelos de Inteligência Artificial para automatizar processos e criar funcionalidades inteligentes que agregam valor real ao produto.
                        </p>
                        <p>
                            Sou movido por desafios técnicos e gosto de resolver problemas complexos de forma independente e ágil. Estou sempre focado em otimizar a performance das aplicações, garantir a segurança dos dados e colaborar ativamente com o time para entregar software de alta qualidade dentro dos prazos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;