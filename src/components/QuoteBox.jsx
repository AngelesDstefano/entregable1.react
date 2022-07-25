import React from 'react'

export const QuoteBox = ({randomQuoteBox, randomColors, getRandomAll}) => {
    console.log (randomQuoteBox, randomColors)

    const objectStyle = {
      color: randomColors
    }

    const objectBgStyle = {
      backgroundColor: randomColors
    }
   
  return (
    <div className='card' style={objectStyle}>
      
      <a href="#" className='card__left' style={objectStyle}><i class="fa-solid fa-quote-left"></i></a>
     <p className='card__text'>{randomQuoteBox.quote}</p> 
     <h2 className='card__title'>{randomQuoteBox.author}</h2>
     <button onClick={getRandomAll} className='card__btn'style={objectBgStyle}><i class="fa-solid fa-angle-right"></i></button>

    </div> 
  )
}
export default QuoteBox