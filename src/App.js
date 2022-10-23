import "./App.css";
import { useEffect, useState } from "react";
import SearchLayout from './components/SearchLayout'
import * as BooksAPI from './BooksAPI'
import {  Route, Routes } from "react-router-dom";
import ReadShelves from "./components/ReadShelves";
function App() {
  const [booksInfo, setBooksInfo] = useState([])
  
  const BooksFromApi = async ()=>{
    const res = await BooksAPI.getAll()
    setBooksInfo(res)
  } 
 
  
  useEffect(()=>{
    
    BooksFromApi()
  },[])

 

 const handleChange =(e, data)=>{
  changeReadStatus(e,data)
}

const changeReadStatus = async (e,book)=>{
  const newShelf = e.target.value
  await BooksAPI.update(book,newShelf)

  
  BooksFromApi();

}

  return (


    <div className="app">
      <Routes>
        <Route path="/add" element={
           <SearchLayout  handleChange={handleChange} booksInfo={booksInfo} />
        }>

        </Route>
        <Route exact path="/" element={
          <ReadShelves booksInfo={booksInfo}  handleChange={handleChange} />
        }>
        </Route>
      </Routes>
    </div>
    
  );
 
      
}
export default App;
