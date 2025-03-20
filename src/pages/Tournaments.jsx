import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendar, FaTrophy } from 'react-icons/fa';

export default function Tournaments() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tournaments</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-2">Johannesburg Open {id}</h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>March 25, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Sandton, Gauteng</span>
              </div>
              <div className="flex items-center gap-2">
                <FaTrophy />
                <span>Prize Pool: R10,000</span>
              </div>
            </div>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
              Register Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}