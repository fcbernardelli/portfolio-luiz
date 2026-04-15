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

<section className="section">
  <h2>Casos Reais</h2>

  <div className="job">
    <h3>Reestruturação Operacional</h3>
    <p><strong>Contexto:</strong> Operação com baixa previsibilidade e ausência de indicadores</p>
    <p><strong>Ação:</strong> Implantação de governança, KPIs e rotinas de gestão</p>
    <p><strong>Resultado:</strong> Maior previsibilidade operacional e suporte à tomada de decisão executiva</p>
  </div>

  <div className="job">
    <h3>Recuperação de Performance</h3>
    <p><strong>Contexto:</strong> Desgaste com cliente estratégico</p>
    <p><strong>Ação:</strong> Reorganização operacional e alinhamento entre áreas</p>
    <p><strong>Resultado:</strong> Restabelecimento da performance contratual</p>
  </div>

</section>
        
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

        <div className="job">
          <h3>Coordenador de Transporte</h3>
          <span>Grupo Petrópolis</span>
          <p>
            Liderei operação industrial 24h com 56 motoristas, garantindo continuidade operacional em ambiente de alta pressão.
            </p>
        </div>
      </section>

      {/* ENGLISH VERSION */}
      <section className="section center">
        <h2>English Version</h2>
        <p className="headline">
          I transform complex operations into predictable, structured and scalable systems.
        </p>
        <p className="sub">
          Operations Executive with experience in high-complexity logistics, multi-site management and critical regulatory environments.
        </p>
      </section>

      {/* CONTACT */}
      <section className="section center">
        <h2>Contato</h2>
        <p>fernandocfreitas@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/luizbernardelli/" target="_blank">LinkedIn</a>
        </p>
      </section>

      <footer>
        <p>© Luiz Fernando Bernardelli</p>
      </footer>

    </div>
  );
}
