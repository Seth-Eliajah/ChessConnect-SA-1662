import { motion } from 'framer-motion';
import { FaYoutube, FaTwitter, FaInstagram, FaExternalLinkAlt } from 'react-icons/fa';

export default function ContentCreators() {
  const creators = [
    {
      id: 1,
      name: "ChessWithThabo",
      realName: "Thabo Nkosi",
      platform: "YouTube",
      subscribers: "25K",
      description: "Daily chess lessons in English and Zulu",
      thumbnail: "path/to/thumbnail.jpg",
      links: {
        youtube: "https://youtube.com/chesswithThabo",
        twitter: "https://twitter.com/chesswithThabo",
        instagram: "https://instagram.com/chesswithThabo"
      },
      featured: true
    },
    {
      id: 2,
      name: "SAChessDaily",
      realName: "Amanda Peters",
      platform: "YouTube/Instagram",
      subscribers: "15K",
      description: "Tournament coverage and game analysis",
      thumbnail: "path/to/thumbnail.jpg",
      links: {
        youtube: "https://youtube.com/sachessdaily",
        instagram: "https://instagram.com/sachessdaily"
      }
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Local Content Creators</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creators.map((creator) => (
          <motion.div
            key={creator.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              creator.featured ? 'ring-2 ring-secondary' : ''
            }`}
          >
            <div className="h-48 bg-gray-200 relative">
              {creator.featured && (
                <div className="absolute top-2 right-2 bg-secondary text-white px-2 py-1 rounded-full text-sm">
                  Featured Creator
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{creator.name}</h2>
                  <p className="text-gray-600">{creator.realName}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {creator.subscribers} followers
                </div>
              </div>

              <p className="mt-2 text-gray-600">{creator.description}</p>

              <div className="mt-4 flex items-center gap-4">
                {creator.links.youtube && (
                  <a href={creator.links.youtube} target="_blank" rel="noopener noreferrer" 
                     className="text-2xl text-red-600 hover:text-red-700 transition">
                    <FaYoutube />
                  </a>
                )}
                {creator.links.twitter && (
                  <a href={creator.links.twitter} target="_blank" rel="noopener noreferrer"
                     className="text-2xl text-blue-400 hover:text-blue-500 transition">
                    <FaTwitter />
                  </a>
                )}
                {creator.links.instagram && (
                  <a href={creator.links.instagram} target="_blank" rel="noopener noreferrer"
                     className="text-2xl text-pink-600 hover:text-pink-700 transition">
                    <FaInstagram />
                  </a>
                )}
              </div>

              <button className="mt-4 w-full bg-primary text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-primary-dark transition">
                View Channel <FaExternalLinkAlt className="text-sm" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}