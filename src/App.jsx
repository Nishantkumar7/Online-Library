import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import BrowseBooksPage from './Pages/BrowseBooksPage';
import BookDetailsPage from './Pages/BookDetailsPage';
import AddBookPage from './Pages/AddBookPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowseBooksPage />} />
            <Route path="/browse/:category" element={<BrowseBooksPage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/add" element={<AddBookPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;