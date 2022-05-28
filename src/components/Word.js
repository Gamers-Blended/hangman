import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
        {selectedWord.split('').map( (letter, i) => {
            return (
                <span className="letter" key={i}>
                    {/* check if each letter in selected word is inside correct letters */}
                    {/* if yes, display letter in span */}
                    {/* else blank */}
                    {correctLetters.includes(letter) ? letter : ''}
                </span>
            )
        })}
    </div>
  )
}

export default Word