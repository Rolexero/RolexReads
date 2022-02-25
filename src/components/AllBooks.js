import React from 'react'
import Appbar from './UI/Appbar'
import Shelves from './Shelves';
import SearchButton from './SearchButton';

const AllBooks = ({ allBooks, updateShelf }) => {
  return (
    <div>
      <Appbar />
      <Shelves allBooks={allBooks} updateShelf={updateShelf}/>
      <SearchButton />
    </div>
  );
}

export default AllBooks