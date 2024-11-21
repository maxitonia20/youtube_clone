"use client"

import React from 'react'
import { searchvideos } from '@/util/fetchData'
import { useState } from 'react'

const Searchbar = () => {

  const [ count, setCount ] = useState(0);
  function update(){
    setCount(count+1)
  }

  return (
    <div>
      
      <form>
        <input type="text" placeholder='search..'/>
        <button>
          search
        </button>
        </form>
        <h1> {count} </h1>
        <button onClick={update} > update count </button>
        
    </div>
  )
}

export default Searchbar
