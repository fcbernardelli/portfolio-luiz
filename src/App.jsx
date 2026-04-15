import React, { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [lang, setLang] = useState("pt");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`container ${loaded ? "fade-in" : ""}`}>

      {/* LANGUAGE SWITCH */}
      <div className="lang-switch">
        <button onClick={() => setLang("pt")}>PT</button>
        <button onClick={() => setLang("en")}>EN</button>
      </div>

      {/* HERO */}
      <section className="hero hero-flex premium-bg">

        <img 
          src="/foto.jpg" 
          alt="Luiz Fernando Bernardelli"
          className="profile-pic premium-photo"
        />

        <div>
          <h1>Luiz Fernando Bernardelli</h1>
          <p className="headline">
            {lang === "pt"
              ? "Estruturo operações complexas e sustento performance em ambientes críticos"
              : "I structure complex operations and sustain performance in critical environments"}
          </p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>{lang === "pt" ? "Sobre" : "About"}</h2>
        <p>
          {lang === "pt"
            ? "Atuo na estruturação, recuperação e estabilização de operações logísticas complexas."
            : "I specialize in structuring, recovering and stabilizing complex logistics operations."}
        </p>
      </section>

      {/* CONTACT */}
      <section className="section center">
        <h2>{lang === "pt" ? "Contato" : "Contact"}</h2>
        <p>fernandocfreitas@gmail.com</p>
        <p>luizfernando@bernardelli.log.br</p>
        <p>+55 34 99130-2121</p>
      </section>

    </div>
  );
}
