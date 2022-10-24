import React from 'react';
import PropTypes from 'prop-types';

const Options = ({status , handleChange}) => {
  return (
    <div className="book-shelf-changer">
        <select name="select" defaultValue={status} onChange={handleChange}>
          { status !== "none" ? 
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
            {status !== "none" && <option value="none">None</option> }
        </select>
    </div>
  )
}
Options.propTypes = {
  status: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Options