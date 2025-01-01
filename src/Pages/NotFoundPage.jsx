import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          <Home size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}