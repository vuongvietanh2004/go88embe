import React from 'react';
import Navbar from '../components/Navbar';
import House from '../components/House';
import Footer from '../components/Footer';


function Houses() {
    
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
        <House />
    </div>    
    <Footer />
    </>
  )
}

export default Houses
