import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import SearchBook from './SearchBook';


const SearchPage = ({searchQuery, updateShelf, allBooks}) => {
const [inputValue, setinputValue] = useState('')
const [searchBooks, setsearchBooks] = useState('')
const navigate = useNavigate();


    const updateQuery = async (query) =>{
        setinputValue(query);
        await updateResults(query);
    }

    const updateResults = async (query)=>{
        if (query) {
            const data = await searchQuery(query);
            const dbValue = await data;
            return dbValue.error ? setsearchBooks('No Book Found For This Query') : setsearchBooks(dbValue) 
        }else{
            return setsearchBooks('')
        }
    }

    const updateBookShelf = async  (book, shelf)=>{
       const val = await updateShelf(book, shelf);
       await val;
        navigate('/')
    }



  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" type="button">
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => updateQuery(e.target.value)}
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.isArray(searchBooks)  ? (
            searchBooks.map((book) => (
                <SearchBook key={book.id} book={book} allBooks={allBooks} updateBookShelf={updateBookShelf}/>
            ))
          ) : (
            <p>{searchBooks}</p>
          )}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage