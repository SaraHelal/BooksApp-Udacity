import React from 'react'
import { Link } from 'react-router-dom'
import ReadShelf from './ReadShelf'
import PropTypes from 'prop-types'


const ReadShelves = ({books, handleChange}) => {
  return (
    <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <ReadShelf type="currentlyReading" books = {books} handleChange={handleChange}/>
              <ReadShelf type="wantToRead" books={books} handleChange={handleChange}/>
              <ReadShelf type="read" books={books} handleChange={handleChange}/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/add">Add a book</Link>
          </div>
    </div>
  )
}

ReadShelves.propTypes = {
    books: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
}
export default ReadShelves