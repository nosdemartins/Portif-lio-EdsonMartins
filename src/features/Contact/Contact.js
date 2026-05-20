import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });


    const [status, setStatus] = useState("idle");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");


        const SERVICE_ID = "service_8ezxlj8";
        const TEMPLATE_ID = "template_7iane6l";
        const PUBLIC_KEY = "LeQIM2Q4_aZ0KKckO";

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });


                setTimeout(() => setStatus("idle"), 5000);
            })
            .catch((err) => {
                console.error("Erro ao enviar e-mail:", err);
                setStatus("error");
            });
    };

    return (
        <section id="contato" className="contato-section">
            <div className="contato-container">

                <div className="contato-topo-central">
                    <h2 className="contato-titulo">Contato</h2>

                    <div className="contato-dados-horizontal">

                        <a href="mailto:edsonmartins.one@gmail.com?subject=Olá Edson, vi seu portfólio!" className="contato-dado-item">
                            <span className="dado-icone" role="img" aria-label="email">✉️</span>
                            <span className="dado-texto">edsonmartins.one@gmail.com</span>
                        </a>

                        <a href="https://www.linkedin.com/in/edson-martins-aa6832131/" target="_blank" rel="noreferrer" className="contato-dado-item">
                            <span className="dado-icone" role="img" aria-label="linkedin">💼</span>
                            <span className="dado-texto">LinkedIn</span>
                        </a>

                        <a href="https://github.com/nosdemartins" target="_blank" rel="noreferrer" className="contato-dado-item">
                            <span className="dado-icone" role="img" aria-label="github">💻</span>
                            <span className="dado-texto">GitHub</span>
                        </a>

                        <a href="/curriculo.pdf" target="_blank" rel="noreferrer" className="contato-dado-item cv-highlight">
                            <span className="dado-icone" role="img" aria-label="cv">📄</span>
                            <span className="dado-texto">Currículo / CV</span>
                        </a>
                    </div>

                    <p className="contato-descricao-central">
                        São Paulo, Brasil • Resposta em menos de 24 horas.
                    </p>
                </div>

                <div className="contato-formulario-central-box">
                    <form onSubmit={handleSubmit} className="contato-form">
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === "sending"}
                                placeholder="Seu nome"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === "sending"}
                                placeholder="seu.email@exemplo.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === "sending"}
                                rows="5"
                                placeholder="Como posso ajudar no seu projeto?"
                            ></textarea>
                        </div>


                        <button
                            type="submit"
                            className="btn-enviar"
                            disabled={status === "sending"}
                        >
                            {status === "sending" ? "Enviando..." : "Enviar"}
                        </button>


                        {status === "success" && (
                            <p className="feedback-sucesso">✓ Mensagem enviada com sucesso! Obrigado.</p>
                        )}
                        {status === "error" && (
                            <p className="feedback-erro">✕ Ops, falha ao enviar. Pode me chamar no LinkedIn se preferir!</p>
                        )}
                    </form>
                </div>

            </div>
        </section>
    );
}

export default Contact;