import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
// import Home from './Pages'
import Article from './Pages/article.jsx'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="/article" element={<Article />} />

        </Routes>
      </Router>
      <Main />
      <Footer />
    </>

  )
}

export default App
