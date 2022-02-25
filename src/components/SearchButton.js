import React from 'react'
import { Tooltip } from '@material-ui/core'
import { Link } from 'react-router-dom'

const SearchButton = () => {
  return (
    <div className="open-search">
      <Tooltip title="add a book">
        <Link to="/search">Add a book</Link>
      </Tooltip>
    </div>
  );
}

export default SearchButton