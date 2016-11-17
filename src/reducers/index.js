import { combineReducers } from 'redux';
import BooksReducer from './reducer-books.js';
import ActiveBookReducer from './reducer-active-book.js';

const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBookReducer
});

export default rootReducer;
