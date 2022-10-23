import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'


const SearchLayout = ({handleChange, booksInfo}) => {
    const [searchBooks, setSearchBooks] = useState([])

    const getSearchBooksFromApi= async (searchWord)=>{
      return await BooksAPI.search(searchWord);
    }
    const searchApi = async (e)=>{
        const searchWord= e.target.value;
        if (searchWord){
            const res = await getSearchBooksFromApi(searchWord);
            if (res.error){
              setSearchBooks(null)
            }
            else{
              const updateSearchWithMyBooks = res.map(book=>{
                const sameBook = booksInfo.find(b => b.id === book.id);
                if (sameBook){
                  book.shelf = sameBook.shelf;
                }
                else{
                  book.shelf = "none";
                }
                return book
              })
              setSearchBooks(updateSearchWithMyBooks)
            }
        }
        else{
            setSearchBooks(null)
        }
    }
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
                onChange={searchApi}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {
                searchBooks &&
                searchBooks.map((book)=>{
                  return <li key={book.id}><Book data={book} status={book.shelf} action="addBook" handleChange={handleChange}/></li>
                })
                }
            </ol>
          </div>
        </div>
  )
}

SearchLayout.propTypes = {
  handleChange: PropTypes.func.isRequired,
  booksInfo:PropTypes.array.isRequired
}
export default SearchLayout