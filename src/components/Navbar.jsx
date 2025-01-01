import { PlusCircle, LibraryBig } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-primary-900 to-primary-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <LibraryBig className="w-8 h-8 text-accent transition-transform group-hover:scale-110" />
            <span className="text-2xl font-serif">Bibliotheca</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="nav-link">
              <span>Home</span>
            </Link>
            <Link to="/browse" className="nav-link">
              <span>Browse Books</span>
            </Link>
            <Link to="/add" className="nav-link">
              <PlusCircle className="w-5 h-5" />
              <span>Add Book</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}