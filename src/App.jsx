import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{background:"#020617",color:"white",minHeight:"100vh",fontFamily:"Arial"}}>
      <section style={{textAlign:"center",padding:"100px 20px"}}>
        <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} style={{fontSize:"48px"}}>
          Luiz Bernardelli
        </motion.h1>
        <p style={{color:"#94a3b8"}}>
          Executivo de Operações | Logística | Governança
        </p>
      </section>
    </div>
  );
}
