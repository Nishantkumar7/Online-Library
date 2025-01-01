import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterByCategory, searchBooks } from '../Store/bookSlice';
import BookCard from '../components/BookCard';
import { Search } from 'lucide-react';

export default function BrowseBooksPage() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const { filteredBooks } = useSelector(state => state.books);

  useEffect(() => {
    if (category) {
      dispatch(filterByCategory(category));
    }
  }, [category, dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchBooks(e.target.value));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search books by title or author..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
          <Search className="absolute left-4 top-4 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}