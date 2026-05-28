import { BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="w-full py-20 px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center"
      >

        <div className="flex justify-center mb-6">
          <div className="bg-blue-500/20 p-5 rounded-3xl border border-blue-500/30">
            <BrainCircuit size={50} className="text-blue-400" />
          </div>
        </div>

        <h1 className="text-6xl font-bold leading-tight mb-6">
          AI Powered <span className="text-blue-400">Mental Health</span>
          <br />
          Risk Assessment
        </h1>

        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
          A smart student wellness platform that uses machine learning
          to analyze behavioral and academic patterns and identify
          potential mental health risks.
        </p>

      </motion.div>

    </div>
  );
}

export default Hero;