function ResultCard({ result }) {
  return (
    <div className="mt-8 bg-white/5 border border-blue-500/20 p-6 rounded-2xl backdrop-blur-lg">
      <h2 className="text-xl font-semibold text-white mb-3">
        Assessment Result
      </h2>

      <p className="text-3xl font-bold text-blue-400 mb-3">
        {result}
      </p>

      <p className="text-gray-400 text-sm leading-relaxed">
        AI analysis based on academic performance and behavioral indicators.
      </p>
    </div>
  );
}

export default ResultCard;