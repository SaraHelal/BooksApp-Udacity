import "./App.css";
import { useEffect, useState } from "react";
import SearchLayout from './components/SearchLayout';
import * as BooksAPI from './BooksAPI';
import { Route, Routes } from "react-router-dom";
import ReadShelves from "./components/ReadShelves";
function App() {
  
  const [books, setBooks] = useState([]);
  
  //GetAll Books from API
  const BooksFromApi = async ()=>{
    const res = await BooksAPI.getAll();
    res ? setBooks(res) : setBooks(null)
  };

  useEffect(()=>{
    let mounted = true;
    mounted && BooksFromApi();

    return()=>{
      mounted = false;
    }
  },[]);

  //Handle changes in book movement between shelves and also for adding search books
  const handleChange =(e, data)=>{
    changeReadStatus(e,data);
  };

  const changeReadStatus = async (e,book)=>{
    const newShelf = e.target.value;
    await BooksAPI.update(book,newShelf);
    //Get Books Again from API after changes 
    BooksFromApi();
  };

  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={
           <SearchLayout books={books} handleChange={handleChange}  />
        }>

        </Route>
        <Route exact path="/" element={
          <ReadShelves books={books}  handleChange={handleChange} />
        }>
        </Route>
      </Routes>
      
    </div>    
  )
 
      
}
export default App;
