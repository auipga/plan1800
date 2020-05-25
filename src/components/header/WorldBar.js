import React from 'react'

import WorldButton from "./WorldButton"

import worlds from "../../data/worlds"


const WorldBar = () => {
  return (<div className='WorldBar'>
    {worlds.map((world, key) => (
      <WorldButton key={key} world={world}/>
    ))}
  </div>)
}

export default WorldBar