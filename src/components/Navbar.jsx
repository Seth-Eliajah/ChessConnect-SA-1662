import { Link } from 'react-router-dom';
import { FaChess, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaChess className="text-2xl text-secondary" />
            <span className="font-chess text-xl">Chess SA Portal</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/tournaments" className="hover:text-secondary transition">Tournaments</Link>
            <Link to="/coaches" className="hover:text-secondary transition">Coaches</Link>
            <Link to="/content-creators" className="hover:text-secondary transition">Content</Link>
            <Link to="/shop" className="hover:text-secondary transition">Shop</Link>
            <Link to="/blog" className="hover:text-secondary transition">Blog</Link>
            <Link to="/rankings" className="hover:text-secondary transition">Rankings</Link>
            <Link to="/arbiters" className="hover:text-secondary transition">Arbiters</Link>
            <Link to="/results" className="hover:text-secondary transition">Results</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/registration" className="bg-secondary hover:bg-secondary-dark px-4 py-2 rounded-md transition">
              Register Player
            </Link>
            <FaUser className="text-xl cursor-pointer hover:text-secondary transition" />
          </div>
        </div>
      </div>
    </nav>
  );
}