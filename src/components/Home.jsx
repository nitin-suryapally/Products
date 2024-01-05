import React from 'react'
import Navbar from './Navbarr'
import Main from './Main'

const Home = () => {
  return (
    <div className='flex flex-col gap-3 bg-black ' >
      <Navbar />
      <Main />
    </div>
  )
}

export default Home
