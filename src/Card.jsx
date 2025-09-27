import { useState } from 'react'
import './Card.css'

function Card(props) {
//Props contains active card id, but we can set and change the card orientation here


  return (
        <div className={`flip-card-inner ${props.flip ? "back": "front"}`}  >
            <div className="flip-card-front">
                <h1>{props.front}</h1>
                <img className="flashcard-image" src={props.image}></img>
            </div>
            <div className="flip-card-back">
                <h1>{props.back}</h1>
            </div>
        </div>
  )
}

export default Card
