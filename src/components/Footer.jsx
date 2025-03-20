import { FaChess, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaChess className="text-2xl text-secondary" />
              <span className="font-chess text-xl">Chess SA Portal</span>
            </div>
            <p className="text-sm text-gray-300">
              Promoting chess excellence across South Africa
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/tournaments" className="hover:text-secondary">Tournaments</Link></li>
              <li><Link to="/rankings" className="hover:text-secondary">Rankings</Link></li>
              <li><Link to="/blog" className="hover:text-secondary">Blog</Link></li>
              <li><Link to="/shop" className="hover:text-secondary">Shop</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/arbiters" className="hover:text-secondary">Find an Arbiter</Link></li>
              <li><Link to="/registration" className="hover:text-secondary">Player Registration</Link></li>
              <li><Link to="/results" className="hover:text-secondary">Tournament Results</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <FaTwitter className="text-xl hover:text-secondary cursor-pointer" />
              <FaFacebook className="text-xl hover:text-secondary cursor-pointer" />
              <FaInstagram className="text-xl hover:text-secondary cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Chess South Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}