import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';

export default function Results() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tournament Results</h1>
      
      <div className="space-y-6">
        {[1, 2, 3].map((id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold mb-4">
              Pretoria Championships - March 10, 2024
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((position) => (
                <div key={position} className="flex items-center space-x-4">
                  <FaMedal className={position === 1 ? 'text-secondary' : 'text-gray-400'} />
                  <div>
                    <h3 className="font-semibold">John Smith</h3>
                    <p className="text-sm text-gray-600">Rating: 2200</p>
                  </div>
                  <div className="ml-auto">
                    <span className="font-semibold">5.5/6</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}