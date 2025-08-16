import { motion } from "framer-motion";

const FeaturedInterviews = () => {
  const interviews = [
    {
      id: 1,
      name: "John Doe",
      title: "Exclusive with Tech CEO",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Interview: Climate Activist Insights",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Michael Brown",
      title: "Inside Story: Political Analyst",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Emily Johnson",
      title: "Exclusive: Startup Founder Interview",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
       🎤 Featured Interviews
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {interviews.map((interview) => (
          <motion.div
            key={interview.id}
            className=" rounded-xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={interview.image}
              alt={interview.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl">{interview.title}</h3>
              <p className="text-gray-600 mt-1">{interview.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedInterviews;
