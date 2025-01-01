import { createSlice } from '@reduxjs/toolkit';
import { books as initialBooks } from '../Data/books';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialBooks,
    filteredBooks: initialBooks
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: state.books.length + 1
      };
      state.books.push(newBook);
      state.filteredBooks = state.books;
    },
    filterByCategory: (state, action) => {
      state.filteredBooks = action.payload === 'all' 
        ? state.books 
        : state.books.filter(book => book.category.toLowerCase() === action.payload.toLowerCase());
    },
    searchBooks: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredBooks = state.books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
      );
    }
  }
});

export const { addBook, filterByCategory, searchBooks } = bookSlice.actions;
export default bookSlice.reducer;