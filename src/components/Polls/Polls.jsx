import { useState } from "react";
import { motion } from "framer-motion";

const Polls = () => {
  const [selected, setSelected] = useState(null);

  const question = "Which news category do you follow the most?";
  const options = ["Tech", "Sports", "Politics", "Entertainment"];

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">🏆 Reader Poll</h2>
      <p className="mb-4">{question}</p>
      <div className="grid md:grid-cols-2 gap-4">
        {options.map((option, idx) => (
          <motion.button
            key={idx}
            className={`px-6 py-3 rounded-lg shadow-md transition hover:cursor-pointer ${
              selected === option ? "bg-primary text-white" : ""
            }`}
            onClick={() => setSelected(option)}
            whileHover={{ scale: 1.05 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
      {selected && <p className="mt-4">You selected: {selected}</p>}
    </div>
  );
};

export default Polls;
