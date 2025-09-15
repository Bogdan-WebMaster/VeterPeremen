import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Main from './layout/Main'
import Article from './Pages/article.jsx'

function App() {


  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/article" element={<Article />} />

        </Routes>
      </Router>


    </>

  )
}

export default App
