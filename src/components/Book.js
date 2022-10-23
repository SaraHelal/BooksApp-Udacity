import React from 'react'
import Options from './Options'

const Book = ({data, handleChange, action}) => {
    const bookThumbnail = data.imageLinks ? `url(${data.imageLinks.thumbnail})` : 'gray'
  return (
    <div className="book">
        <div className="book-top">
            <div
            className="book-cover"
            style={{
                width: 128,
                height: 193,
                background: bookThumbnail
            }}
            ></div>
            <Options status={data.shelf} action={action}  handleChange={(e)=>handleChange(e,data)}/>
            
        </div>
        <div className="book-title">{data && data.title}</div>
        <div className="book-authors">{data.authors && data.authors.map((author, i)=>{ return (i+1<data.authors.length ?  author + ', ' : author)})}</div>
    </div>
  )
}

export default Book