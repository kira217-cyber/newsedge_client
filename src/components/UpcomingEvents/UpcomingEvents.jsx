import { motion } from "framer-motion";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      name: "Tech Webinar 2025",
      date: "Aug 25, 2025",
      image:
        "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Climate Summit Live",
      date: "Sep 10, 2025",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Tech Innovators Webinar",
      date: "Oct 5, 2025",
      image:
        "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Global Health Conference",
      date: "Nov 20, 2025",
      image:
        "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">📅 Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={event.image}
              alt={event.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl">{event.name}</h3>
              <p className="text-gray-600 mt-1">{event.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
