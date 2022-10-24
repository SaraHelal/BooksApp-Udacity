import React from 'react';
import Options from './Options';
import PropTypes from 'prop-types';

const Book = ({book, handleChange}) => {
  return (
    <div className="book">
        <div className="book-top">
            <div
            className="book-cover"
            style={{
                width: 128,
                height: 193,
                backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})`,
            }}
            ></div>
            <Options status={book.shelf} handleChange={(e)=>handleChange(e,book)}/>
            
        </div>
        <div className="book-title">{book && book.title}</div>
        <div className="book-authors">{book.authors && book.authors.map((author, i)=>{ return (i+1<book.authors.length ?  author + ', ' : author)})}</div>
    </div>
  )
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Book