"use client"

import React from 'react'
import { searchvideos } from '@/util/fetchData'
import { useState } from 'react'
import image from 'next/image'
const Searchbar = () => {

  const [ loading, setLoading ] = useState(false);
const [result, setResult] = useState([])
const [ask, setAsk] =useState ("")

const handleSearch = async (e) =>{
  e.preventDefault(),
  setLoading(true)

  const date = await searchvideos(`search/?query=${ask}`)
  console.log (date)
  setResult(date.videos)
  setLoading (false)
}
 // function update(){
    //setCount(count+1)


  return (
    <div>
      <form onSubmit={handleSearch}>
      <input type="text" placeholder='Search..'
      value={ask}
      onChange={(e) => setAsk(e.target.value
      )}/>
      <button>
     search
   </button>
   </form>

   {
  loading ? <p>loading...</p> : null
  }

{
  result.map((eachItems, index,array) => ( 
<div key={index}> <h1> {eachItems.title} </h1>
 <h1> {eachItems.number_of_vew} </h1>
 <h1> {eachItems.video_length} </h1>
 <img src= {eachItems.thumbnails[0].url}  alt="image" />
</div>
))
}
    </div>
 )
}
  


export default Searchbar
