import { motion } from 'framer-motion';
import { FaTrophy, FaChessKnight, FaNewspaper } from 'react-icons/fa';
import PlayerOfMonth from '../components/PlayerOfMonth';
import TournamentList from '../components/TournamentList';
import LatestResults from '../components/LatestResults';

export default function Home() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-primary rounded-lg p-8 text-white"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Chess South Africa</h1>
        <p className="text-lg">Your premier destination for chess tournaments, rankings, and community.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <PlayerOfMonth />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <TournamentList />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <LatestResults />
        </motion.div>
      </div>
    </div>
  );
}