import { motion } from "framer-motion";
import { Link } from "react-router";

const PromoBanner = () => {
  return (
    <motion.div
      className=" p-10 rounded-xl mx-4 my-8 text-center "
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-2">Special Promotion!</h2>
      <p className="mb-4">Subscribe now and get exclusive premium content!</p>
      <Link to="/subscription">
      <button className="px-6 py-2  text-purple-700 font-semibold rounded-full shadow-xl  hover:scale-105 transition hover:cursor-pointer">
        Subscribe Now
      </button></Link>
    </motion.div>
  );
};

export default PromoBanner;
