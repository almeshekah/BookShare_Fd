import React, { useState } from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  //   const books = useSelector((state) => state.bookReducer.books);

  const bookList = books.map((book) => <BookItem key={book.id} book={book} />);

  return <div>{bookList}</div>;
};

export default BookList;
