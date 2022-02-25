import React from 'react'

const SearchBook = ({book, updateBookShelf, allBooks}) => {
    let selectVal = 'none';

    for (const bookVal of allBooks) {
        if (bookVal.id === book.id) {
            selectVal = bookVal.shelf
        }

    }

            const image =
              book.imageLinks && book.imageLinks.thumbnail
                ? book.imageLinks.thumbnail
                : "";


  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${image})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                value={selectVal}
                onChange={(e) => updateBookShelf(book, e.target.value)}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
          </div>
      )
}

export default SearchBook