import React, { useState } from "react";
import { useSelector } from "react-redux";

// Components
import BookItem from "./BookItem";
import Loading from "../Loading";
import SearchBar from "../SearchBar";
// Styles

const BookList = ({ books }) => {
  const [query, setQuery] = useState("");

  const loading = useSelector((state) => state.bookReducer.loading);
  if (loading) return <Loading />;

  const bookList = books
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem book={book} key={book.id} />);

  return (
    <>
      <div>
        <SearchBar setQuery={setQuery} />
      </div>
      <div>{bookList}</div>
    </>
  );
};

export default BookList;
