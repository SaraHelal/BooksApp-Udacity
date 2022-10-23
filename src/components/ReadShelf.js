import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const ReadShelf = ({type, books, handleChange}) => {
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{type === 'read' ? 'Read' : type=== 'currentlyReading' ? 'Currently Read' : 'Want to Read'}</h2>
    <div className="bookshelf-books">
        <ol className="books-grid">
        {
                books.filter(book=>book.shelf=== type).map((data)=>{
                    return <li key={data.id}><Book data={data} handleChange={handleChange} action="updateShelf"/></li>
                })
            }
        </ol>
    </div>
</div>
  )
}

ReadShelf.propTypes = {
  type: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default ReadShelf