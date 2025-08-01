import React from 'react'
import Navbar from './Components/Navbar'
import MiddleSec from './Components/MiddleSec'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div className='bg-[#151515]  w-full min-h-screen relative'>
      <Navbar/>
      <MiddleSec/>
      <Footer/>
    </div>
  )
}

export default App