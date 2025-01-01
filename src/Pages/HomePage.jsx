import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

export default function HomePage() {
  const { books } = useSelector(state => state.books);
  const categories = [...new Set(books.map(book => book.category))];
  const popularBooks = books.slice(0, 6);

  return (
    <div className="page-container">
      <section className="text-center mb-16 bg-primary-50 rounded-2xl p-12">
        <h1 className="text-5xl font-serif font-bold mb-4 text-primary-900">
          Welcome to Bibliotheca
        </h1>
        <p className="text-xl text-primary-700">Discover your next literary adventure</p>
      </section>

      <section className="mb-16">
        <h2 className="section-title">Browse Categories</h2>
        <div className="grid grid-cols-3 gap-4">
          {categories.map(category => (
            <Link
              key={category}
              to={`/browse/${category.toLowerCase()}`}
              className="w-full bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:transform hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center">
                <span className="text-lg font-bold text-primary-900">{category}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>



      <section>
        <h2 className="section-title">Popular Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}