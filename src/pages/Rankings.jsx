import { motion } from 'framer-motion';

export default function Rankings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Player Rankings</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b-2">
              <th className="py-2 text-left">Rank</th>
              <th className="py-2 text-left">Player</th>
              <th className="py-2 text-left">Rating</th>
              <th className="py-2 text-left">Region</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">1</td>
              <td className="py-2">Sarah Mokoena</td>
              <td className="py-2">2150</td>
              <td className="py-2">Gauteng</td>
            </tr>
            {/* Add more players */}
          </tbody>
        </table>
      </div>
    </div>
  );
}