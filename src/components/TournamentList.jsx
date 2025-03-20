import { FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

export default function TournamentList() {
  const tournaments = [
    {
      id: 1,
      name: "Johannesburg Open",
      date: "2024-03-25",
      location: "Sandton",
      region: "Gauteng",
      entries: 45
    },
    {
      id: 2,
      name: "Cape Town Classic",
      date: "2024-04-02",
      location: "Green Point",
      region: "Western Cape",
      entries: 32
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Upcoming Tournaments</h2>
      <div className="space-y-4">
        {tournaments.map(tournament => (
          <div key={tournament.id} className="border rounded-lg p-4 hover:shadow-md transition">
            <h3 className="font-semibold">{tournament.name}</h3>
            <div className="text-sm text-gray-600 mt-2">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{tournament.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>{tournament.location}, {tournament.region}</span>
              </div>
            </div>
            <div className="mt-2 text-sm">
              <span className="text-primary-light">{tournament.entries} entries</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}