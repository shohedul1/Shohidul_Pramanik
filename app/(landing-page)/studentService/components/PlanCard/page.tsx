import React from "react";
import { motion } from "framer-motion";

const PlanCard = ({
  duration,
  price,
  languages,
  onApply,
}: {
  duration: string;
  price: string;
  languages: string[];
  onApply: (duration: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-all text-center"
    >
      <h3 className="text-xl font-semibold">{duration}</h3>
      <p className="text-gray-600 text-lg font-bold mt-2">{price}</p>

      {/* Programming Languages List */}
      <div className="mt-4">
        <h4 className="text-md font-semibold text-gray-700">Languages Covered:</h4>
        <ul className="mt-2 text-gray-600">
          {languages.map((lang, index) => (
            <li key={index} className="text-sm">
              ✅ {lang}
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Now Button */}
      <button
        onClick={() => onApply(duration)}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Apply Now
      </button>
    </motion.div>
  );
};

export default PlanCard;
