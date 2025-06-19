import { useState } from "react"
import Flashcard from './components/Flashcard'
import './App.css'

function App() {
  const cards = [
    {
      question: "Most goals scored in a single World Cup tournament (13 goals)",
      answer: "Just Fontaine (1958)",
    },
    {
      question: "Team with the most UEFA Champions League titles",
      answer: "Real Madrid (15 titles)",
    },
    {
      question: "Player with the most Ballon d'Or awards",
      answer: "Lionel Messi (8 awards)",
    },
    {
      question: "Country that has won the most FIFA World Cups",
      answer: "Brazil (5 titles)",
    },
    {
      question: "Player with the most international goals of all time",
      answer: "Cristiano Ronaldo (130+ goals)",
    },
    {
      question: "Fastest goal ever scored in World Cup history",
      answer: "Hakan Şükür (10.8 seconds, 2002)",
    },
    {
      question: "Team that went undefeated in the Premier League season",
      answer: "Arsenal (2003-04 'Invincibles')",
    },
    {
      question: "Player with the most Champions League goals",
      answer: "Cristiano Ronaldo (140+ goals)",
    },
    {
      question: "Most expensive football transfer ever",
      answer: "Neymar to PSG (€222 million)",
    },
    {
      question: "Youngest player to score in a World Cup final",
      answer: "Pelé (17 years old, 1958)",
    },
  ]

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  // alternate the side of the cards for flipping
  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  // randomly chooses a new card whenever the button is clicked
  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length)
    setCurrentCardIndex(randomIndex)
    setIsFlipped(false)
  }

  const currentCard = cards[currentCardIndex]

  return (
    <div className="app-container">
      <div className="header">
        <h1>Soccer Stats Flashcards</h1>
        <p>Test your knowledge of soccer history and records</p>
        <p className="card-count">Total Cards: {cards.length}</p>
      </div>

      <Flashcard question={currentCard.question} answer={currentCard.answer} isFlipped={isFlipped} onFlip={flipCard} />

      <div className="controls">
        <button onClick={nextCard} className="next-button">
          Next Random Card
        </button>
      </div>
    </div>
  )
}

export default App
