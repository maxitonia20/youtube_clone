import React from 'react'
import Youtubeimage from './Youtubeimage';
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className='flex gap-14 nav'>
      <div>      
        <Youtubeimage/>   
      </div>
      <div>
        <Searchbar/>
      </div>
    </div>
  )
}

export default Navbar
