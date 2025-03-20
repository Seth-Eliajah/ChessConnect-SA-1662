import { motion } from 'framer-motion';
import { FaStar, FaChessKnight, FaVideo, FaGlobe } from 'react-icons/fa';

export default function Coaches() {
  const coaches = [
    {
      id: 1,
      name: "GM Simon Andrews",
      title: "Grandmaster",
      chessRating: 2450,
      specialization: "Opening preparation, Endgame mastery",
      experience: "15 years",
      location: "Cape Town",
      languages: ["English", "Afrikaans"],
      hourlyRate: "R450",
      online: true,
      coachRating: 4.9,
      reviews: 124
    },
    {
      id: 2,
      name: "IM Sarah van der Merwe",
      title: "International Master",
      chessRating: 2350,
      specialization: "Junior training, Tournament preparation",
      experience: "8 years",
      location: "Johannesburg",
      languages: ["English", "Zulu"],
      hourlyRate: "R350",
      online: true,
      coachRating: 4.8,
      reviews: 89
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chess Coaches</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm bg-white rounded-full shadow hover:shadow-md transition">
            Online Only
          </button>
          <button className="px-4 py-2 text-sm bg-white rounded-full shadow hover:shadow-md transition">
            In Person
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {coaches.map((coach) => (
          <motion.div
            key={coach.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0" />
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{coach.name}</h2>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaChessKnight className="text-primary" />
                      <span>{coach.title} ({coach.chessRating})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{coach.hourlyRate}/hour</div>
                    {coach.online && (
                      <span className="text-sm text-green-600">Online lessons available</span>
                    )}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-gray-600">{coach.specialization}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <FaGlobe />
                    <span>{coach.languages.join(", ")}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-secondary" />
                    <span>{coach.coachRating}</span>
                    <span className="text-gray-500">({coach.reviews})</span>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
                    Book Lesson
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}