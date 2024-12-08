import { useEffect, useState }  from "react";
import BookList from "./components/BookList"
import BookCreate from "./components/BookCreate"
import axios from "axios";
import Button from "./Button";

function App(){
  const [books, setBooks] = useState([]);

  const fetchBooks = async () =>{
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }

  // Call it one time
  useEffect(()=>{
    fetchBooks()    
  },[])

  const editBookById = async (id, newTitle) =>{
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })
    console.log(response);
    const updateBooks = books.map((book)=>{
      if (book.id === id){
        return { ...book, ...response.data};
      }
      return book;
    })
    setBooks(updateBooks)
  }

  const deleteBookById = async (id) =>{

    const response = await axios.delete(`http://localhost:3001/books/${id}`)

    console.log(response);
    const updateBooks = books.filter((book)=>{
      return book.id !== id;
    })
    setBooks(updateBooks);
  }

  const createBook = async (title) =>{
    const response  = await axios.post('http://localhost:3001/books', {
      title
    })
    // console.log(response);
    const updateBooks = [...books, response.data];
    setBooks(updateBooks);
  }


  return(
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
      <BookCreate onCreate={createBook} />
      <Button>Click Me!</Button>
      <Button>Baby</Button>
      <Button>Click Me!</Button>

    </div>
  )
}

export default App;