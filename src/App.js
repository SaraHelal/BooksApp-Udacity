import "./App.css";
import { useEffect, useState } from "react";
import SearchLayout from './components/SearchLayout';
import * as BooksAPI from './BooksAPI';
import { Route, Routes } from "react-router-dom";
import ReadShelves from "./components/ReadShelves";
import NotFound from "./NotFound";
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
    //update the book shelf in API
    await BooksAPI.update(book,newShelf);

    //check if the book is new from shearch then add the book to our books 
    if(book.shelf === "none"){
      book.shelf = newShelf;
      setBooks(oldBooks=> [...oldBooks, book])
    }
    //check if the book is in my shelves to update with the new shelf
    else{
      setBooks(oldBooks=>{
        const newState = oldBooks.map(b => {    
          if (b.id === book.id) {
            return {...b, shelf: newShelf};
          }
          return b;
        });
        return newState;
        })
    }  
    
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>    
  )
 
      
}
export default App;
