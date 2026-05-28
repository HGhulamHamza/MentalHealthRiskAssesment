import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import ResultCard from "./ResultCard";
import heroImg from "../assets/imgg.png";

function AssessmentForm() {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    study_year: "",
    cgpa: "",
    anxiety: "",
    panic_attack: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );

      setResult(response.data.prediction);
    } catch (error) {
      console.log(error);
    }
  };

  const inputStyle =
    "w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  const selectStyle =
    "w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none";

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-[#050816] via-[#0b1b3a] to-[#050816]">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
      >

        {/* LEFT SIDE */}
        <div className="p-10 flex flex-col justify-center relative">
          
          <div className="mb-6">
            <span className="px-4 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full">
              Student Mental Health AI
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight">
            Understand Your <span className="text-blue-400">Mental Health</span> Risk
          </h1>

          <p className="text-gray-300 mt-4">
            This AI-powered system analyzes academic and behavioral patterns
            to help identify early mental health risks in students.
          </p>

          <img
            src={heroImg}
            alt="Mental Health"
            className="mt-8 rounded-2xl shadow-lg opacity-90"
          />

          <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm text-gray-300">
            <div className="bg-white/5 p-3 rounded-xl">AI Analysis</div>
            <div className="bg-white/5 p-3 rounded-xl">Private</div>
            <div className="bg-white/5 p-3 rounded-xl">Fast Result</div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 bg-white/5">

          <h2 className="text-2xl font-semibold text-white mb-6">
            Student Assessment Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              className={inputStyle}
            />

            <select name="gender" onChange={handleChange} className={selectStyle}>
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>

            <select name="study_year" onChange={handleChange} className={selectStyle}>
              <option value="">Study Year</option>
              <option value="0">Year 1</option>
              <option value="1">Year 2</option>
              <option value="2">Year 3</option>
              <option value="3">Year 4</option>
            </select>

            <select name="cgpa" onChange={handleChange} className={selectStyle}>
              <option value="">CGPA Range</option>
              <option value="0">2.00 - 2.49</option>
              <option value="1">2.50 - 2.99</option>
              <option value="2">3.00 - 3.49</option>
              <option value="3">3.50 - 4.00</option>
            </select>

            <select name="anxiety" onChange={handleChange} className={selectStyle}>
              <option value="">Anxiety</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <select name="panic_attack" onChange={handleChange} className={selectStyle}>
              <option value="">Panic Attack</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition text-white p-4 rounded-xl font-semibold shadow-lg"
            >
              Analyze Mental Health Risk
            </button>
          </form>

          {result && <ResultCard result={result} />}
        </div>

      </motion.div>
    </div>
  );
}

export default AssessmentForm;