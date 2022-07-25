import './App.css'
import quotes from './json/quotes.json'
import { QuoteBox } from './components/QuoteBox'
import { useState } from 'react'
import colors from './utils/colors'

function App() {
  
const getRandomElement = arr => {
const indexRandom = Math.floor(Math.random() * arr.length)
return arr [indexRandom]
}

let quoteRandom = getRandomElement(quotes)
let colorRandom = getRandomElement(colors)

const [randomQuoteBox, setRandomQuoteBox] = useState(quoteRandom)
const [randomColors, setRandomColors] = useState(colorRandom)

const objStyle = {
backgroundColor: randomColors 
}

 const getRandomAll = () => {
  quoteRandom = getRandomElement(quotes)
  colorRandom = getRandomElement(colors)

setRandomQuoteBox(quoteRandom)
setRandomColors(colorRandom)

 }
  return (
    <div className="App" style={objStyle}>
    <QuoteBox 
    randomQuoteBox ={randomQuoteBox} 
    randomColors ={randomColors}
    getRandomAll ={getRandomAll}
    />
    </div>
  )
}

export default App
