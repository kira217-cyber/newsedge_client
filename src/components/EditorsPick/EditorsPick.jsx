import { motion } from "framer-motion";

const EditorsPick = () => {
  const articles = [
    {
      id: 1,
      title: "Top 10 Tech Innovations of 2025",
      description:
        "Editor selected article highlighting the most important tech trends this year.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Climate Change and Global News",
      description:
        "Editor’s pick for environmental news shaping global policy.",
      image:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "AI Revolution in Modern Journalism",
      description:
        "Editor's pick highlighting how AI tools are transforming news reporting globally.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Global Economy Insights 2025",
      description:
        "Editor's selected article analyzing key economic trends and financial shifts around the world.",
      image:
        "https://images.pexels.com/photos/4386395/pexels-photo-4386395.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center"> ✍️ Editor's Pick</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className=" rounded-xl shadow-md overflow-hidden"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm">{article.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
