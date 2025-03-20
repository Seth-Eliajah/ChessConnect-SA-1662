import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Chess Blog</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((id) => (
          <motion.article
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                Mastering the Sicilian Defense
              </h2>
              <p className="text-gray-600 mb-4">
                Learn the key principles and strategies behind one of chess's most popular openings.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>March 15, 2024</span>
                <button className="text-primary hover:text-primary-dark">
                  Read More →
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}