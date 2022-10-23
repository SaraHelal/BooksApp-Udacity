import React from 'react'

const Options = ({status , handleChange, action}) => {

  return (
    <div className="book-shelf-changer">
        <select name="select" defaultValue={status} onChange={handleChange}>
          { action === "updateShelf" ? 
            (<option disabled>
            Move to...
            </option>
            )
            :
            (
            <option value="none" disabled>
            Add to...
            </option>
            ) }
            <option value="currentlyReading" >
            Currently Reading
            </option>
            <option value="wantToRead" >Want to Read</option>
            <option value="read" >Read</option>
            {action === "updateShelf" && <option value="none">None</option> }
        </select>
    </div>
  )
}

export default Options