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
          alt="Luiz Bernardelli"
          className="profile-pic premium-photo"
        />

        <div>
          <h1>Luiz Bernardelli</h1>

          <p className="headline">
            {lang === "pt"
              ? "Estruturo operações complexas, restabeleço previsibilidade e sustento performance em ambientes críticos"
              : "I structure complex operations, restore predictability and sustain performance in critical environments"}
          </p>
        </div>

      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>{lang === "pt" ? "Sobre" : "About"}</h2>

        <p>
          {lang === "pt"
            ? "Atuo na estruturação, recuperação e estabilização de operações logísticas complexas, com foco em previsibilidade, governança e performance sustentável."
            : "I specialize in structuring, recovering and stabilizing complex logistics operations, focusing on predictability, governance and sustainable performance."}
        </p>

        <p>
          {lang === "pt"
            ? "Experiência em ambientes de alta criticidade — operações 24/7, logística industrial e contextos regulatórios."
            : "Experience in high-criticality environments — 24/7 operations, industrial logistics and regulated contexts."}
        </p>
      </section>

      {/* AREAS */}
      <section className="section">
        <h2>{lang === "pt" ? "Áreas de Atuação" : "Core Expertise"}</h2>

        <ul>
          {lang === "pt" ? (
            <>
              <li>Governança operacional e KPIs</li>
              <li>Recuperação de performance</li>
              <li>Operações críticas 24/7</li>
              <li>Gestão multiunidades</li>
            </>
          ) : (
            <>
              <li>Operational governance and KPIs</li>
              <li>Performance recovery</li>
              <li>24/7 critical operations</li>
              <li>Multi-site management</li>
            </>
          )}
        </ul>
      </section>

      {/* CASES */}
      <section className="section">
        <h2>{lang === "pt" ? "Casos Reais" : "Case Studies"}</h2>

        <div className="job">
          <h3>Reestruturação Operacional</h3>
          <p>
            {lang === "pt"
              ? "Implantação de governança, KPIs e rotinas estruturadas em operação com baixa previsibilidade."
              : "Governance, KPI and structured routines implementation in low predictability operation."}
          </p>
        </div>

        <div className="job">
          <h3>Performance Recovery</h3>
          <p>
            {lang === "pt"
              ? "Recuperação de performance em cliente estratégico através de reorganização operacional."
              : "Performance recovery in a strategic client through operational restructuring."}
          </p>
        </div>
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
