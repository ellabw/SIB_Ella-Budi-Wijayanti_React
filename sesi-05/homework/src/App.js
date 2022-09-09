import Layout from './kode/Layout'
import Meetup from './components/nav/Meetup'
import Explore from './components/nav/Explore'
import Login from './components/nav/Login'
import Navbar from './components/nav/Navbar'
import Footer from './kode/footer'
import {Routes, BrowserRouter, Redirect, Switch, Route} from "react-router-dom"
import React from 'react'

function App() {
    const navTitle = "QTemu"
    const navText = "Create Meetup"
    const navText2 = "Explore"
    const navLogin = "Login"

    const footerText = 'Copyright Hacktiv8 2018'

  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <Navbar navTitle={navTitle} navText={navText} navText2={navText2} navLogin={navLogin}/>

      <Routes>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/meetup" element={<Meetup/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
      <Footer footerText={footerText}/>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;

