import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'  

function App() {
  const [cardNum, setcardNum] = useState(0)
  const [flip, setFlipped] = useState(false); 
  const cards = [
  {
    front:"Colombia", 
    back: "Bogota", 
    image: "https://flagcdn.com/w320/co.png" },
  {
    front:"Bolivia", 
    back: "Sucre", 
    image:"https://flagcdn.com/w320/bo.png"
  },
  {
    front: "France",
    back: "Paris",
    image: "https://flagcdn.com/w320/fr.png"
  },
  {
    front: "Japan",
    back: "Tokyo",
    image: "https://flagcdn.com/w320/jp.png"
  },
  {
    front: "Brazil",
    back: "Brasília",
    image: "https://flagcdn.com/w320/br.png"
  },
  {
    front: "Canada",
    back: "Ottawa",
    image: "https://flagcdn.com/w320/ca.png"
  },
  {
    front: "Germany",
    back: "Berlin",
    image: "https://flagcdn.com/w320/de.png"
  },
  {
    front: "Australia",
    back: "Canberra",
    image: "https://flagcdn.com/w320/au.png"
  },
  {
    front: "India",
    back: "New Delhi",
    image: "https://flagcdn.com/w320/in.png"
  },
  {
    front: "South Africa",
    back: "Pretoria",
    image: "https://flagcdn.com/w320/za.png"
  }
]

  return (
    <>
    <img id="planet-bg"src=".\planet.png"></img>
      
      <h1>Learn the Capitals</h1>
      <h3>
        Click on the flash cards to learn the capitals of various countries
      </h3>
      <h4 className ="totalCards">Total Cards: {cards.length}</h4>
       <div className="flip-card" onClick={() => setFlipped(!flip)}>
        <Card front={cards[cardNum].front} back={cards[cardNum].back} image={cards[cardNum].image} flip={flip} />
        </div>
    <div className="buttons">
    <button onClick={()=> {setFlipped(false); 
    setcardNum(Math.floor(Math.random() * cards.length)); }}>⬅️</button>
    <button onClick={()=>{setFlipped(false); 
      setcardNum(Math.floor(Math.random() * cards.length));}}>➡️</button>
    </div>
    </>
  )
}

export default App
