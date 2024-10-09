import { BrowserRouter as Router, Routes, Route, Navigate }  from "react-router-dom"
import { Home, NoPage } from "./pages"
import BookDetail from "./components/BookDetail"
import { useEffect, useState } from "react"
import { getBooks } from "./services/getBooks"

function App() {

  const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks().then(books => {
            setBooks(books)
        })
    },[])

  
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home books={books} />} />
            <Route path="/404" element={<NoPage />} />
            <Route path="/books/:id" element={<BookDetail books={books} />} />
            <Route path="*" element={<Navigate to="/404"  replace/>} />
        </Routes>
      </Router>
  )
}

export default App
