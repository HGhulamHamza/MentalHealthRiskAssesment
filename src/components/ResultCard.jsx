import { Activity, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

function ResultCard({ result }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#101827] to-[#0b1220] p-7 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
    >

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-400 text-sm mb-2">
            Assessment Result
          </p>

          <h2 className="text-3xl font-bold text-white">
            {result}
          </h2>
        </div>

        <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
          <Activity className="text-blue-400" size={32} />
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-5">

        <div className="flex items-start gap-3">
          <ShieldAlert
            className="text-blue-400 mt-1"
            size={20}
          />

          <p className="text-gray-400 leading-relaxed text-sm">
            This AI-generated result is based on emotional,
            behavioral, and academic indicators provided
            during the assessment process.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ResultCard;