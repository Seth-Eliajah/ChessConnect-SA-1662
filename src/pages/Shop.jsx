import { motion } from 'framer-motion';

export default function Shop() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Chess Shop</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h2 className="font-semibold">Professional Chess Set</h2>
              <p className="text-gray-600">Tournament-grade wooden chess set</p>
              <div className="mt-2">
                <span className="text-lg font-bold">R899.99</span>
              </div>
              <button className="mt-2 w-full bg-primary text-white py-2 rounded hover:bg-primary-dark transition">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}