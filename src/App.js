import logo from './logo.svg';
import './App.css';
import AllBooks from './components/AllBooks';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useEffect, useState } from 'react'
import * as BooksApi from "./BooksApi";
import { Routes, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage'


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  }
});


function App() {
  const [allBooks, setAllBooks] = useState([])

  useEffect(()=>{
    const getBooks = async () => {
      const getBooksFromDb = await fetchAllBooks();
      setAllBooks(getBooksFromDb)
    }
    getBooks();
  }, [])

  const fetchAllBooks = async () =>{
    const response = await BooksApi.getAll();
    return response;
  }

  const updateShelf = async (book, shelf)=>{
    setAllBooks(allBooks.map((eachBook)=> eachBook.id === book.id ? {...eachBook, shelf: shelf} : eachBook))
    const response = await BooksApi.update(book, shelf);
        console.log( response);
    return response;
  }

  const searchQuery = async(query) =>{
    const searchItem = await BooksApi.search(query);
    return searchItem;
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes>
          <Route
            path="/"
            exact
            element={<AllBooks allBooks={allBooks} updateShelf={updateShelf} />}
          />
          <Route
            path="/search"
            element={
              <SearchPage
                searchQuery={searchQuery}
                allBooks={allBooks}
                updateShelf={updateShelf}
              />
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
