import React from 'react'
import { Link } from 'react-router-dom'
import ReadShelf from './ReadShelf'

const ReadShelves = ({booksInfo, handleChange}) => {
  return (
    <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <ReadShelf type="currentlyReading" books = {booksInfo} handleChange={handleChange}/>
              <ReadShelf type="wantToRead" books={booksInfo} handleChange={handleChange}/>
              <ReadShelf type="read" books={booksInfo} handleChange={handleChange}/>
            </div>
          </div>
          <div className="open-search">
            <Link to="/add">Add a book</Link>
          </div>
    </div>
  )
}

export default ReadShelves