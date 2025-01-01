import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft } from 'lucide-react';

export default function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useSelector(state => state.books);
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    navigate('/404');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/browse" className="flex items-center text-indigo-600 mb-6 hover:underline">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Browse
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-96">
          <img 
            src={book.imageUrl} 
            alt={book.title} 
            className="absolute inset-0 w-full h-full object-cover rounded-t-lg" 
          />
        </div>

        <div className="p-6 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-xl text-gray-600">by <span className="text-gray-800 font-medium">{book.author}</span></p>

          <div className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-yellow-400 fill-current" />
            <span className="text-lg font-medium text-gray-800">{book.rating.toFixed(1)}</span>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>

          <div className="inline-block bg-indigo-100 px-4 py-2 rounded-full text-indigo-800 text-sm font-semibold">
            {book.category}
          </div>
        </div>
      </div>
    </div>
  );
}