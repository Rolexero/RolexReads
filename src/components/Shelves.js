import React from 'react'
import Shelf from './Shelf';

const Shelves = ({allBooks, updateShelf}) => {
            const currentlyReading = allBooks.filter(
              (book) => book.shelf === "currentlyReading"
            );
            const wantToRead = allBooks.filter(
              (book) => book.shelf === "wantToRead"
            );
            const read = allBooks.filter((book) => book.shelf === "read");

  return (
    <div className="list-books-content">
      <Shelf
        books={currentlyReading}
        title="Currently Reading"
        updateShelf={updateShelf}
      />
      <Shelf
        books={wantToRead}
        title="Want To Read"
        updateShelf={updateShelf}
      />
      <Shelf books={read} title="Read" updateShelf={updateShelf} />
    </div>
  );
}

export default Shelves