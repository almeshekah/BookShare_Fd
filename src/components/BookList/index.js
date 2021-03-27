// Components
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import Loading from '../Loading';
import SearchBar from '../SearchBar';
// Styling
import { ListWrapper } from './styles';
const BookList = () => {
	const [query, setQuery] = useState('');
	const books = useSelector((state) => state.bookReducer.books);
	const loading = useSelector((state) => state.bookReducer.loading);
	if (loading) return <Loading />;

	const bookList = books
		.filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
		.map((book) => <BookItem book={book} key={book.id} />);

	return (
		<div>
			<SearchBar setQuery={setQuery} />
			<ListWrapper>{bookList}</ListWrapper>
		</div>
	);
};

export default BookList;
