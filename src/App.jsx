import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Luiz Bernardelli</h1>
        <p className="headline">
          Estruturo operações complexas, restabeleço previsibilidade e sustento performance em ambientes críticos.
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
          { value: "7.8M+", label: "Litros/mês" }
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

      {/* CASOS REAIS */}
      <section className="section">
        <h2>Casos Reais</h2>

        <div className="job">
          <h3>Reestruturação Operacional</h3>
          <p><strong>Contexto:</strong> Operação com baixa previsibilidade e ausência de indicadores</p>
          <p><strong>Ação:</strong> Implantação de governança, KPIs e rotinas de gestão</p>
          <p className="impact"><strong>Resultado:</strong> Previsibilidade operacional e suporte executivo à decisão</p>
        </div>

        <div className="job">
          <h3>Recuperação de Performance</h3>
          <p><strong>Contexto:</strong> Desgaste com cliente estratégico</p>
          <p><strong>Ação:</strong> Reorganização operacional e alinhamento entre áreas</p>
          <p className="impact"><strong>Resultado:</strong> Restabelecimento da performance contratual</p>
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
            Estruturei governança operacional em 7 filiais, criando previsibilidade e indicadores executivos.
          </p>
          <p className="impact">Impacto: transformação de operação reativa em modelo orientado por dados.</p>
        </div>

        <div className="job">
          <h3>Coordenador de Transporte</h3>
          <span>Grupo Petrópolis</span>
          <p>
            Liderei operação industrial 24h com 56 motoristas em ambiente de alta pressão.
          </p>
          <p className="impact">Impacto: garantia de continuidade operacional em cenário crítico.</p>
        </div>

        <div className="job">
          <h3>Gerente de Operações</h3>
          <span>Transportadora Veronese</span>
          <p>
            Conduzi expansão de frota e consolidação operacional com foco em segurança e performance.
          </p>
          <p className="impact">Impacto: aumento de capacidade e estabilidade operacional.</p>
        </div>
      </section>

      {/* ENGLISH VERSION */}
      <section className="section center">
        <h2>English Version</h2>

        <p className="headline">
          I structure complex operations, restore predictability and sustain performance in critical environments.
        </p>

        <p className="sub">
          Operations Executive with strong experience in fuel logistics, multi-site management and high-pressure industrial environments. Proven track record in governance implementation, performance recovery and operational stabilization.
        </p>
      </section>

      {/* CONTACT */}
      <section className="section center">
        <h2>Contact</h2>
        <p>fernandocfreitas@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/luizbernardelli" target="_blank">LinkedIn</a>
        </p>
      </section>

      <footer>
        <p>© Luiz Bernardelli</p>
      </footer>

    </div>
  );
}
