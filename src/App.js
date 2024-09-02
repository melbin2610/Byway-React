import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainPage from './components/screens/MainPage';
import SinglePage from './components/screens/SinglePage';

function App() {
  return (
    <>
      
    <Router>
      <Routes>
        <Route>
        <Route path="/" element={<MainPage/>} />
        <Route path="/single/:courseId" element={<SinglePage />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
} 

export default App