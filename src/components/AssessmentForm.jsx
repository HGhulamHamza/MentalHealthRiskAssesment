import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

import ResultCard from "./ResultCard";
import heroImg from "../assets/img.jpg";

function AssessmentForm() {
const [formData, setFormData] = useState({
  gender: "",
  age: "",
  academic_pressure: 3,
  cgpa: "",
  study_satisfaction: 3,
  sleep_duration: "",
  dietary_habits: "",
  suicidal_thoughts: "",
  work_study_hours: "",
  financial_stress: 3,
  family_history: "",
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

    const payload = {

      ...formData,

      cgpa:
        (parseFloat(formData.cgpa) * 10) / 4

    };

    const response = await axios.post(
      "http://127.0.0.1:5000/predict",
      payload
    );

    setResult(response.data.prediction);

  } catch (error) {

    console.log(error);

  }
};

  const inputStyle =
    "w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 backdrop-blur-xl";

  const selectStyle =
    "w-full px-5 py-4 rounded-2xl bg-[#0d1529] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none transition-all duration-300";

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6 py-12 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-0 left-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-7xl grid md:grid-cols-2 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(59,130,246,0.15)]"
      >

        {/* LEFT SECTION */}
        <div className="relative p-10 lg:p-14 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 overflow-hidden">

          {/* Decorative circles */}
          <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] rounded-full bg-white/10"></div>

          {/* IMAGE TOP RIGHT */}
          <div className="absolute top-0 right-0">
            <img
              src={heroImg}
              alt="Mental Health"
              className="w-64 object-contain opacity-95"
            />
          </div>

          <div className="relative z-10 mt-28">

            <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-blue-100 backdrop-blur-lg">
              AI Powered Student Wellness
            </span>

            <h1 className="text-5xl font-bold text-white leading-tight mt-6">
              Mental Health
              <br />
              <span className="text-blue-200">
                Risk Assessment
              </span>
            </h1>

            <p className="text-blue-100/80 mt-6 text-lg leading-relaxed max-w-md">
              Advanced AI system designed to analyze emotional
              and academic indicators for early mental health
              risk detection in students.
            </p>

            {/* FEATURES */}
            <div className="space-y-5 mt-12">

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 bg-white/10 border border-white/10 p-5 rounded-2xl backdrop-blur-lg"
              >
                <div className="p-3 rounded-xl bg-white/10">
                  <Brain className="text-white" size={24} />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    AI Analysis
                  </h3>

                  <p className="text-blue-100/70 text-sm">
                    Intelligent prediction system
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 bg-white/10 border border-white/10 p-5 rounded-2xl backdrop-blur-lg"
              >
                <div className="p-3 rounded-xl bg-white/10">
                  <ShieldCheck className="text-white" size={24} />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Secure & Private
                  </h3>

                  <p className="text-blue-100/70 text-sm">
                    Your data remains confidential
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 bg-white/10 border border-white/10 p-5 rounded-2xl backdrop-blur-lg"
              >
                <div className="p-3 rounded-xl bg-white/10">
                  <Zap className="text-white" size={24} />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    Instant Results
                  </h3>

                  <p className="text-blue-100/70 text-sm">
                    Fast mental health insights
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="p-10 lg:p-14 bg-[#09111f]/80 backdrop-blur-xl">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">
              Student Assessment
            </h2>

            <p className="text-gray-400 mt-2">
              Complete the form for AI-powered analysis
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              onChange={handleChange}
              className={inputStyle}
            />

            <select
              name="gender"
              onChange={handleChange}
              className={selectStyle}
            >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>

            

           <input
  type="number"
  step="0.01"
  min="0"
  max="4"
  name="cgpa"
  placeholder="CGPA (Out of 4.0)"
  onChange={handleChange}
  className={inputStyle}
/>

           <div>
  <label className="block text-gray-300 mb-2">
    Academic Pressure ({formData.academic_pressure})
  </label>

  <input
    type="range"
    min="1"
    max="5"
    name="academic_pressure"
    value={formData.academic_pressure}
    onChange={handleChange}
    className="w-full accent-blue-500"
  />
</div>

<div>
  <label className="block text-gray-300 mb-2">
    Study Satisfaction ({formData.study_satisfaction})
  </label>

  <input
    type="range"
    min="1"
    max="5"
    name="study_satisfaction"
    value={formData.study_satisfaction}
    onChange={handleChange}
    className="w-full accent-blue-500"
  />
</div>

<select
  name="sleep_duration"
  onChange={handleChange}
  className={selectStyle}
>
  <option value="">Sleep Duration</option>
  <option value="0">5-6 Hours</option>
  <option value="1">7-8 Hours</option>
  <option value="2">Less Than 5 Hours</option>
  <option value="3">More Than 8 Hours</option>
  <option value="4">Others</option>
</select>

<select
  name="dietary_habits"
  onChange={handleChange}
  className={selectStyle}
>
  <option value="">Dietary Habits</option>
  <option value="0">Healthy</option>
  <option value="1">Moderate</option>
  <option value="2">Others</option>
  <option value="3">Unhealthy</option>
</select>

<select
  name="suicidal_thoughts"
  onChange={handleChange}
  className={selectStyle}
>
  <option value="">Suicidal Thoughts</option>
  <option value="1">Yes</option>
  <option value="0">No</option>
</select>


<input
  type="number"
  min="0"
  max="24"
  name="work_study_hours"
  placeholder="Work / Study Hours"
  onChange={handleChange}
  className={inputStyle}
/>

<div>
  <label className="block text-gray-300 mb-2">
    Financial Stress ({formData.financial_stress})
  </label>

  <input
    type="range"
    min="1"
    max="5"
    name="financial_stress"
    value={formData.financial_stress}
    onChange={handleChange}
    className="w-full accent-blue-500"
  />
</div>

<select
  name="family_history"
  onChange={handleChange}
  className={selectStyle}
>
  <option value="">Family History of Mental Illness</option>
  <option value="1">Yes</option>
  <option value="0">No</option>
</select>

            {/* BUTTON */}
            <div className="flex justify-center pt-4">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.4)] hover:shadow-blue-500/50 transition-all duration-300"
              >
                Analyze Now
                <ArrowRight size={20} />
              </motion.button>

            </div>
          </form>

          {result && <ResultCard result={<span
  className={
    result.includes("High")
      ? "text-red-400"
      : "text-green-400"
  }
>
  {result}
</span>} />}
        </div>
      </motion.div>
    </div>
  );
}

export default AssessmentForm;