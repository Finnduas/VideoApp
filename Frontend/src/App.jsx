import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from './HomePage.jsx';
import VideoDetailPage from './VideoDetailPage.jsx';
import Header from './components/Header.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <Header/>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/video/:videoID" element={<VideoDetailPage/>} />
    </Routes>
    </>
  )
}

export default App
