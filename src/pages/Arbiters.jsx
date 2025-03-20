import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function Arbiters() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Find an Arbiter</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
              <div>
                <h2 className="text-xl font-semibold">John Arbiter</h2>
                <p className="text-gray-600">FIDE Arbiter</p>
                <div className="flex items-center space-x-1 text-secondary mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Available for tournaments in Gauteng region
                </p>
                <button className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}