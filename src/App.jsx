import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Luiz Bernardelli</h1>
        <p className="headline">
          Transformo operações complexas em estruturas previsíveis, governadas e escaláveis.
        </p>
        <p className="sub">
          Executivo de operações com atuação em logística de alta complexidade, gestão multiunidades e ambientes regulatórios críticos.
        </p>
      </section>

      {/* KPIs */}
      <section className="kpis">
        {[
          { value: "+7", label: "Filiais" },
          { value: "+65", label: "Colaboradores" },
          { value: "+35", label: "Veículos" },
          { value: "24/7", label: "Operação" },
          { value: "7.8M L/mês", label: "Volume" }
        ].map((kpi, i) => (
          <div key={i} className="kpi">
            <h3>{kpi.value}</h3>
            <p>{kpi.label}</p>
          </div>
        ))}
      </section>

      {/* RESULTADOS */}
      <section className="section">
        <h2>Resultados</h2>

        <div className="job">
          <p>
            Reestruturação de operação logística com baixa previsibilidade, implementando indicadores e rotinas de gestão executiva.
          </p>
        </div>

        <div className="job">
          <p>
            Recuperação de performance contratual com grandes clientes em ambiente de alta complexidade operacional.
          </p>
        </div>

        <div className="job">
          <p>
            Consolidação de operação 24h com estabilidade operacional e alinhamento entre áreas críticas.
          </p>
        </div>
      </section>

      {/* O QUE EU FAÇO */}
      <section className="section">
        <h2>O que eu faço</h2>
        <ul>
          <li>Estruturação de governança operacional e indicadores</li>
          <li>Recuperação de performance logística</li>
          <li>Gestão de operações críticas 24h</li>
          <li>Interface com diretoria e conselho</li>
        </ul>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="section">
        <h2>Experiência</h2>

        <div className="job">
          <h3>Coordenador Logístico Sênior</h3>
          <span>Rio Branco Energias</span>
          <p>
            Estruturei governança operacional em 7 filiais, criando previsibilidade e indicadores executivos para tomada de decisão estratégica.
          </p>
        </div>
