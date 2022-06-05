import React from 'react'
import './Movie.css'
const Movie = ({name ,description ,rate ,posterUrl}) => {
  console.log(name);
  return (
    <div className='ggg' style={{color:"red"}}>
      <img  src={posterUrl} alt='ff'></img>
      <h1>{name}</h1>
      <h2>{description}</h2>
      <span>{rate}</span>

    </div>
  )
}

export default Movie;
