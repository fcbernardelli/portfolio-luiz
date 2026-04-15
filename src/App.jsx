import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Luiz Fernando Bernardelli</h1>
        <p className="headline">
          Transformo operações complexas em estruturas previsíveis, governadas e escaláveis.
        </p>
        <p className="sub">
          Executivo de operações com experiência em logística de alta complexidade, gestão multiunidades e ambientes regulatórios críticos.
        </p>
      </section>

      {/* KPIs */}
      <section className="KPI">
        {[
          { value: "+7", label: "Filiais" },
          { value: "+65", label: "Colaboradores" },
          { value: "+35", label: "Veículos" },
          { value: "24/7", label: "Operação" },
          { value: "14 L/mês", label: "Volume Movimentado" }
        ].map((kpi, i) => (
          <div key={i} className="kpi">
            <h3>{kpi.value}</h3>
            <p>{kpi.label}</p>
          </div>
        ))}
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
            Estruturei governança operacional em 7 filiais, criando previsibilidade e indicadores executivos.
          </p>
        </div>

        <div className="job">
          <h3>Coordenador de Transporte</h3>
          <span>Grupo Petrópolis</span>
          <p>
            Liderei operação 24h com 56 motoristas em ambiente industrial de alta pressão.
          </p>
        </div>

        <div className="job">
          <h3>Gerente de Operações</h3>
          <span>Transportadora Veronese</span>
          <p>
            Conduzi expansão de frota e consolidação operacional em ambiente regulado.
          </p>
        </div>
      </section>

      {/* ENGLISH */}
      <section className="section center">
        <h2>English Version</h2>
        <p>
          Operations Executive specialized in structuring complex logistics environments, driving governance, efficiency and scalable performance.
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>fernandocfreitas@gmail.com</p>
      </footer>

    </div>
  );
}
