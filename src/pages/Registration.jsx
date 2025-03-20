import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Registration() {
  const [savedPlayers, setSavedPlayers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    chessId: '',
    region: '',
    parentName: '',
    parentEmail: '',
    parentPhone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedPlayers([...savedPlayers, formData]);
    // Here you would typically make an API call to save the data
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Player Registration</h1>
      
      {savedPlayers.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Saved Players</h2>
          <div className="grid gap-4">
            {savedPlayers.map((player, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-4 rounded-lg shadow"
              >
                <p className="font-semibold">{player.name}</p>
                <p className="text-sm text-gray-600">Chess ID: {player.chessId}</p>
                <button 
                  className="mt-2 text-primary-light hover:text-primary"
                  onClick={() => setFormData(player)}
                >
                  Use Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Player Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              value={formData.dob}
              onChange={(e) => setFormData({...formData, dob: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Chess ID</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.chessId}
              onChange={(e) => setFormData({...formData, chessId: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition"
          >
            Save Player Details
          </button>
        </div>
      </form>
    </div>
  );
}