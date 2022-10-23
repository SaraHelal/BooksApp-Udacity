import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'


const SearchLayout = ({handleChange, books}) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [query, setQuery] = useState("")
  
  //Search for books in API
  const getSearchBooksFromApi= async (searchWord)=>{
    const res = await BooksAPI.search(searchWord);
    if (res.error){
      setSearchBooks(null);
    }
    else{    
      const syncBox = res.map(book=>{
        //Check if search books in my shelves or not
        const bookIsFound = books.find(b => b.id === book.id);
        if (bookIsFound){
          book.shelf = bookIsFound.shelf;
        }
        else{
          book.shelf = "none";
        }
        return book;
      })
      setSearchBooks(syncBox);
    }
  }

  useEffect(()=>{
    if(query){
      getSearchBooksFromApi(query);
    } 
    else{
      setSearchBooks(null);
    }
  },[query])
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/"
          className="close-search"  
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e)=>setQuery((e.target.value).trim())}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {
          searchBooks &&
          searchBooks.map((book)=>{
            return <li key={book.id}><Book book={book} status={book.shelf} action="addBook" handleChange={handleChange}/></li>
          })
        }
        </ol>
      </div>
    </div>
  )
}

SearchLayout.propTypes = {
  handleChange: PropTypes.func.isRequired,
  books:PropTypes.array.isRequired
}
export default SearchLayout