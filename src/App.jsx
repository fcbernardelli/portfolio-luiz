import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Luiz Bernardelli
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-slate-300 max-w-2xl"
        >
          Transformo operações complexas em estruturas previsíveis, governadas e escaláveis.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-500 mt-4"
        >
          Executivo de operações com experiência em logística de alta complexidade, gestão multiunidades e ambientes regulatórios críticos.
        </motion.p>
      </section>

      {/* KPIs */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-center">
        {[
          { value: "+7", label: "Filiais" },
          { value: "+65", label: "Colaboradores" },
          { value: "+35", label: "Veículos" },
          { value: "24/7", label: "Operação" },
          { value: "MM L/mês", label: "Volume" }
        ].map((kpi, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }}>
            <h3 className="text-3xl font-bold text-cyan-400">{kpi.value}</h3>
            <p className="text-slate-400">{kpi.label}</p>
          </motion.div>
        ))}
      </section>

      {/* O QUE EU FAÇO */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">O que eu faço</h2>
        <ul className="space-y-4 text-slate-300">
          <li>• Estruturação de governança operacional e indicadores</li>
          <li>• Recuperação de performance logística</li>
          <li>• Gestão de operações críticas 24h</li>
          <li>• Interface com diretoria e conselho</li>
        </ul>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Experiência</h2>

        {[
          {
            role: "Coordenador Logístico Sênior",
            company: "Rio Branco Energias",
            desc: "Estruturei governança operacional em 7 filiais, criando previsibilidade e indicadores executivos."
          },
          {
            role: "Coordenador de Transporte",
            company: "Grupo Petrópolis",
            desc: "Liderei operação 24h com 56 motoristas em ambiente industrial de alta pressão."
          },
          {
            role: "Gerente de Operações",
            company: "Transportadora Veronese",
            desc: "Conduzi expansão de frota e consolidação operacional em ambiente regulado."
          }
        ].map((job, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} className="mb-6 border-l-2 border-cyan-400 pl-6">
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <span className="text-slate-400">{job.company}</span>
            <p className="text-slate-300 mt-2">{job.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* INGLÊS */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">English Version</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Operations Executive specialized in structuring complex logistics environments, driving governance, efficiency and scalable performance.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-slate-500">
        <p>fernandocfreitas@gmail.com</p>
      </footer>

    </div>
  );
}
