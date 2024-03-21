import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from './HomePage.jsx';
import VideoDetailPage from './VideoDetailPage.jsx';
import Header from './components/Header.jsx';

function App() {


  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/videos/:videoID" element={<VideoDetailPage />} />
        </Route>
      </Routes>
    
  )
}
function Layout() {
  return (
    <>
    <Header/>
      <Outlet />
      </>
  );
}

export default App
