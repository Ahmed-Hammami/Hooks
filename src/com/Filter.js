import React, {useState} from "react";

import { Card } from "react-bootstrap";
import './MovieCard.css'


export default function Filter(movie) {
    const [searchTerm, setSearchTerm] = useState("");
    return  (
    <>
      <div>
        <div>
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="cardlist">
          {
            movie 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())   ){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="cardlist">
                       <Card style={{ width: "18rem" }}  className="box">
        <Card.Img variant="top"   src={val.posterUrl} />
        <Card.Body>
          <Card.Title>{val.title}</Card.Title>
          <Card.Text><a href={val.trailer} target="_blank"> Trailer</a></Card.Text>
          <Card.Text>{val.description}</Card.Text>
          <Card.Text><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>{val.rate}</Card.Text>
        </Card.Body>
      </Card>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}