
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MessageSquare, Menu, X, MapPin, ChevronRight, Zap } from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import { BUSINESS_INFO } from './constants';

const Logo = ({ className = "h-12 w-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Sun */}
    <path 
      d="M50 35L52.5 28L55 35L62 33L58 39L65 41L58 43L62 49L55 47L52.5 54L50 47L45 49L49 43L42 41L49 39L45 33L50 35Z" 
      fill="#F99D1C" 
    />
    {/* Blue Roof */}
    <path d="M25 52L40 38H60L82 52H25Z" fill="#005696" />
    <path d="M25 52L18 52L40 38" stroke="#005696" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Grid */}
    <g stroke="white" strokeWidth="0.8" opacity="0.5">
      <path d="M40 38L32 52" /><path d="M47 38L45 52" /><path d="M54 38L58 52" /><path d="M61 38L71 52" /><path d="M33 45H68" />
    </g>
    {/* Green Leaf */}
    <path 
      d="M28 45C22 55 25 75 45 82C65 89 82 82 85 55C85 68 75 80 45 78C25 76 30 60 28 45Z" 
      fill="#39B54A" 
    />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <Logo className="h-12 w-12 group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-slate-900 tracking-tight leading-none uppercase">SHREENATH</span>
              <span className="text-[10px] font-bold text-green-600 tracking-[0.2em] uppercase">Enterprises</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold tracking-widest transition-colors duration-200 uppercase ${
                  location.pathname === link.path ? 'text-green-600' : 'text-slate-500 hover:text-green-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-green-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-green-700 transition-all shadow-sm uppercase"
            >
              FREE Site Visit
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
          <div className="px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-bold text-slate-800 hover:bg-green-50 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-bold text-center text-white bg-green-600 rounded-lg mt-4"
            >
              FREE Site Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Logo className="h-10 w-10 bg-white rounded-lg p-0.5" />
              <span className="text-xl font-extrabold uppercase tracking-tighter">SHREENATH</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {BUSINESS_INFO.tagline} in Alibag and across Maharashtra.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-green-400">Navigation</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-green-400">Contact</h4>
            <div className="space-y-3 text-slate-400 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-500 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <a href={`tel:${BUSINESS_INFO.phone1}`} className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-green-500" /> {BUSINESS_INFO.phone1}
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-green-500" /> {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Shreenath Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
    <a href={BUSINESS_INFO.whatsappLink} target="_blank" className="bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform">
      <MessageSquare className="h-6 w-6" />
    </a>
    <a href={`tel:${BUSINESS_INFO.phone1}`} className="bg-green-700 text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform">
      <Phone className="h-6 w-6" />
    </a>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-jakarta">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
