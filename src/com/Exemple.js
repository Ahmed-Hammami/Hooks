import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import './Movie.css'
const Exemple = () => {
  
  const params = useParams();
  console.log(params);
  const  location=useLocation();
  console.log(location.state.moviz.name);
  return (
      
    <div className='ggg' style={{color:"red"}}>
      <img  src={location.state.moviz.posterUrl} alt='ff'></img>
      <h1>{location.state.moviz.name}</h1>
      <h2>{location.state.moviz.description}</h2>
      <span>{location.state.moviz.rate}</span>

    </div>
    
  )
}

export default Exemple;
