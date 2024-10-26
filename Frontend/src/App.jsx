import React from 'react'
import Home from './Home/Home';
import{ Routes, Route } from "react-router-dom"
import Houses from './Houses/Houses';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/house" element={<Houses/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>  
    </>
  )
}

export default App;
