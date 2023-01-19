import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Register from './components/Register/Register';
// import SignIn from './components/SignIn';
import Home from './components/Home/Home';
import Jobdetails from './components/Jobdetails/Jobdetails';
import Editjob from './components/Editjob/Editjob';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/reg' element={<Register/>}/>
          {/* <Route path='/signin' element={<SignIn/>}/> */}
          <Route path='/jd/:id' element={<Jobdetails/>}/>
          <Route path='/ej/:id' element={<Editjob/>}/>
          <Route path='/abt' element={<About/>}/>
          <Route path='/cont' element={<Contact/>}/>
        </Routes>
    </BrowserRouter> 
    <footer>
      <h3>Created By Mohith | @ 2022 All Rights Reserved</h3>
    </footer>
    </div>
             
  )
}

export default App;
