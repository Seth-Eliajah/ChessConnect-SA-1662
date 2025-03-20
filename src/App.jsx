import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Rankings from './pages/Rankings';
import Arbiters from './pages/Arbiters';
import Results from './pages/Results';
import PlayerProfile from './pages/PlayerProfile';
import Registration from './pages/Registration';
import Coaches from './pages/Coaches';
import ContentCreators from './pages/ContentCreators';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/arbiters" element={<Arbiters />} />
            <Route path="/results" element={<Results />} />
            <Route path="/player/:id" element={<PlayerProfile />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/content-creators" element={<ContentCreators />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}