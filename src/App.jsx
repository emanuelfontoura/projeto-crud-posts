import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Feed from './Components/Feed/Feed.jsx'
import Login from './Components/Login/Login.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Register from './Components/Register/Register.jsx'
import './App.css'

// Color Palet = https://color.adobe.com/pt/search?q=Neutral%20palette&t=term

function App() {
  return <>
    <BrowserRouter>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Feed />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </>
}

export default App
