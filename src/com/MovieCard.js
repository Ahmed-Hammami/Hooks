import React from "react";
import {Card} from "react-bootstrap"
import './Style.css'
import Movie from "./Movie";
import { Link, useNavigate } from 'react-router-dom'
import Exemple from "./Exemple";

const MovieCard = ({ movie }) => {
    
    const navigate = useNavigate();
    
    const click =()=>{
return(        
<>
<Exemple name="abcd"/>

                <Movie name={"abcd"} description={movie.description} rate={movie.rate} post={movie.posterUrl} /> 
                console.log("movie card have been clicked ON !!!!")
            </> );       
        }
             //description={movie.description} rate={movie.rate} posterUrl={movie.posterUrl}//
    return ( <><Link to={`/Movie/${movie.title}`} state={{moviz:movie}}>
        <Card  style={{ width: "18rem", marginBottom:"30px" ,cursor:"pointer"  }} >
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <Card.Text>
                    <span className="Rate"> {movie.rate}</span>
                     
                </Card.Text>
            </Card.Body>
        </Card></Link></>   
    
    );
};

export default MovieCard;