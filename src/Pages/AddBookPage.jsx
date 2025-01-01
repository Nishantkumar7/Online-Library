import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../Store/bookSlice';
import { BookOpen, Star, Image, User, BookType, FileText } from 'lucide-react';

export default function AddBookPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    imageUrl: ''
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.author) newErrors.author = 'Author is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.rating || formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }
    if (!formData.imageUrl) newErrors.imageUrl = 'Image URL is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook({
        ...formData,
        rating: parseFloat(formData.rating)
      }));
      navigate('/browse');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputClass = (error) => `
    w-full px-4 py-3 rounded-lg bg-slate-50 border
    ${error ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-emerald-500'}
    focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-200' : 'focus:ring-emerald-200'}
    transition-colors
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-serif text-slate-800 mb-8 flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-purple-600" />
            Add New Book
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label className="form-label">
                <BookType className="w-5 h-5" />
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={inputClass(errors.title)}
                placeholder="Enter book title"
              />
              {errors.title && <p className="error-message">{errors.title}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <User className="w-5 h-5" />
                Author
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className={inputClass(errors.author)}
                placeholder="Enter author name"
              />
              {errors.author && <p className="error-message">{errors.author}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <BookOpen className="w-5 h-5" />
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={inputClass(errors.category)}
              >
                <option value="">Select a category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Sci-Fi">Sci-Fi</option>
              </select>
              {errors.category && <p className="error-message">{errors.category}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <FileText className="w-5 h-5" />
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className={inputClass(errors.description)}
                placeholder="Enter book description"
              />
              {errors.description && <p className="error-message">{errors.description}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <Star className="w-5 h-5" />
                Rating (0-5)
              </label>
              <input
                type="number"
                name="rating"
                min="0"
                max="5"
                step="0.1"
                value={formData.rating}
                onChange={handleChange}
                className={inputClass(errors.rating)}
                placeholder="Enter rating"
              />
              {errors.rating && <p className="error-message">{errors.rating}</p>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <Image className="w-5 h-5" />
                Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className={inputClass(errors.imageUrl)}
                placeholder="Enter image URL"
              />
              {errors.imageUrl && <p className="error-message">{errors.imageUrl}</p>}
            </div>

            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="btn-primary"
              >
                <span>Add Book</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}