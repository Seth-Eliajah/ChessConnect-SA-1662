import { motion } from 'framer-motion';
import { FaTrophy, FaChessKnight, FaCalendar } from 'react-icons/fa';

export default function PlayerProfile() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start space-x-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
          <div>
            <h1 className="text-3xl font-bold">Sarah Mokoena</h1>
            <p className="text-gray-600">Rating: 2150</p>
            <p className="text-gray-600">Gauteng Region</p>
            <div className="flex space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <FaTrophy className="text-secondary" />
                <span>15 Tournament Wins</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaChessKnight className="text-primary" />
                <span>FIDE Master</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-xl font-bold mb-4">Recent Tournaments</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((id) => (
              <div key={id} className="flex items-center space-x-4">
                <FaCalendar className="text-gray-400" />
                <div>
                  <h3 className="font-semibold">Johannesburg Open</h3>
                  <p className="text-sm text-gray-600">March 1, 2024</p>
                </div>
                <span className="ml-auto font-semibold">1st Place</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h2 className="text-xl font-bold mb-4">Statistics</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-gray-600">Rating Progress</h3>
              <div className="h-4 bg-gray-200 rounded-full mt-2">
                <div className="h-full w-3/4 bg-primary rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="text-sm text-gray-600">Tournament Win Rate</h3>
              <div className="h-4 bg-gray-200 rounded-full mt-2">
                <div className="h-full w-2/3 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}