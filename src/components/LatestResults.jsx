import { FaMedal } from 'react-icons/fa';

export default function LatestResults() {
  const results = [
    {
      tournament: "Pretoria Championships",
      date: "2024-03-10",
      winners: [
        { name: "John Smith", position: 1, rating: 2200 },
        { name: "Mary Jones", position: 2, rating: 2150 },
        { name: "Peter Zulu", position: 3, rating: 2100 }
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Weekend Results</h2>
      {results.map((result, idx) => (
        <div key={idx} className="space-y-3">
          <h3 className="font-semibold">{result.tournament}</h3>
          <div className="space-y-2">
            {result.winners.map((winner, pos) => (
              <div key={pos} className="flex items-center gap-2">
                <FaMedal className={pos === 0 ? "text-secondary" : "text-gray-400"} />
                <span>{winner.name}</span>
                <span className="text-sm text-gray-600">({winner.rating})</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}