import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './components/screens/MainPage';

function App() {
  return (
    <>
      
    <Router>
      <Routes>
        <Route>
        <Route path="/" element={<MainPage/>} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App