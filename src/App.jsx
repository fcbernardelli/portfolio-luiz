import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [lang, setLang] = useState("pt");

  const t = {
    pt: {
      aboutTitle: "Sobre",
      aboutText1:
        "Atuo na estruturação, recuperação e estabilização de operações logísticas complexas, com foco em previsibilidade, governança e performance sustentável.",
      aboutText2:
        "Experiência em ambientes de alta criticidade — operações 24/7, logística industrial e contextos regulatórios.",
      areasTitle: "Áreas de Atuação",
      areas: [
        "Governança operacional e KPIs",
        "Recuperação de performance",
        "Operações críticas 24/7",
        "Gestão multiunidades",
      ],
      casesTitle: "Casos Reais",
      contact: "Contato",
    },
    en: {
      aboutTitle: "About",
      aboutText1:
        "I specialize in structuring, recovering and stabilizing complex logistics operations, focusing on predictability, governance and sustainable performance.",
      aboutText2:
        "Experience in high-criticality environments — 24/7 operations, industrial logistics and regulated contexts.",
      areasTitle: "Core Expertise",
      areas: [
        "Operational governance and KPIs",
        "Performance recovery",
        "24/7 critical operations",
        "Multi-site management",
      ],
      casesTitle: "Case Studies",
      contact: "Contact",
    },
  };

  return (
    <div className="container">
      {/* LANGUAGE SWITCH */}
      <div className="lang-switch">
        <button onClick={() => setLang("pt")}>PT</button>
        <button onClick={() => setLang("en")}>EN</button>
      </div>

      {/* HERO */}
<section className="hero hero-flex">

  <img 
    src="/src/assets/LFCFB-Foto3x4.jpg" 
    alt="Luiz Bernardelli"
    className="profile-pic"
  />

  <div>
    <h1>Luiz Bernardelli</h1>
    <p className="headline">
      {lang === "pt"
        ? "Estruturo operações complexas e sustento performance em ambientes críticos"
        : "I structure complex operations and sustain performance in critical environments"}
    </p>
  </div>

</section>
      {/* ABOUT */}
      <section className="section">
        <h2>{t[lang].aboutTitle}</h2>
        <p>{t[lang].aboutText1}</p>
        <p>{t[lang].aboutText2}</p>
      </section>

      {/* AREAS */}
      <section className="section">
        <h2>{t[lang].areasTitle}</h2>
        <ul>
          {t[lang].areas.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* CASES */}
      <section className="section">
        <h2>{t[lang].casesTitle}</h2>

        <div className="job">
          <h3>Reestruturação Operacional</h3>
          <p>
            {lang === "pt"
              ? "Implantação de governança e KPIs em operação sem previsibilidade"
              : "Governance and KPI implementation in low predictability operation"}
          </p>
        </div>

        <div className="job">
          <h3>Performance Recovery</h3>
          <p>
            {lang === "pt"
              ? "Recuperação de performance em cliente estratégico"
              : "Performance recovery in strategic client"}
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section center">
        <h2>{t[lang].contact}</h2>
        <p>fernandocfreitas@gmail.com</p>
        <p>luizfernando@bernardelli.log.br</p>
        <p>+55 34 99130-2121</p>
      </section>
    </div>
  );
}
