import { FaTrophy } from 'react-icons/fa';

export default function PlayerOfMonth() {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center mb-4">
        <FaTrophy className="text-4xl text-secondary" />
      </div>
      <h2 className="text-xl font-bold mb-2">Player of the Month</h2>
      <div className="rounded-full w-32 h-32 mx-auto mb-4 bg-gray-200">
        {/* Player Image would go here */}
      </div>
      <h3 className="text-lg font-semibold">Sarah Mokoena</h3>
      <p className="text-gray-600">3 Tournament Wins</p>
      <p className="text-gray-600">Rating: 2150</p>
      <div className="mt-4 text-sm text-gray-500">
        <p>Gauteng Region</p>
        <p>15 matches played</p>
      </div>
    </div>
  );
}