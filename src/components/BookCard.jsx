import { Star, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  return (
    <div className="card hover:shadow-xl hover:scale-105">
      <div className="relative">
        <img 
          src={book.imageUrl} 
          alt={book.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 right-0 m-4 category-badge">
          {book.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2 text-primary-900">{book.title}</h3>
        <p className="text-gray-600 mb-3">by {book.author}</p>
        <div className="flex items-center mb-4">
          <Star className="text-accent fill-current" size={18} />
          <span className="ml-2 text-primary-700">{book.rating}</span>
        </div>
        <Link to={`/book/${book.id}`} className="btn-primary">
          <span>Read More</span>
          <MoveRight />
        </Link>
      </div>
    </div>
  );
}