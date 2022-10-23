import React from 'react'
import Book from './Book'

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

export default ReadShelf