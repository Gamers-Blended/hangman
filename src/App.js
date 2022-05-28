import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import {showNotification as show} from './helpers/helpers';

import './App.css';

// list of words to guess
const words = ['buzz', 'programming', 'quiz', 'abyss', 'poor', 'askew', 'avenue', 'affix'];

let selectedWord = words[Math.floor(Math.random() * words.length)];



function App() {
  // States
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // anything that's going to be a side-effect
  useEffect(() => {
    // function
    const handleKeydown = event => {
      const { key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90) { // letter keys on keyboard
          const letter = key.toLowerCase(); // get letter and make it lowercase
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) { // if selected word doesn't include letter
              setCorrectLetters(currentLetters => [...currentLetters, letter]); // create new array to add to letter
            } else {
              show(setShowNotification); // would be entering twice since included already-> show notification letter already added
            }
          } else {
            if (!wrongLetters.includes(letter)) { // if doesn't include wrong letter
              setWrongLetters(wrongLetters => [...wrongLetters, letter]); // create new array
            } else {
              show(setShowNotification);
            }
          }
        }
    }
    // everything app renders, don't add another EventListener
    // Keydown letter press
    window.addEventListener('keydown', handleKeydown);

    // function to clean up EventListener
    // at any time, there should only be 1 EventListener running
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]); // if empty, this will get called every time app renders; if empty array, will only get called on initial render

  function playAgain() {
    setPlayable(true);

    // reset with empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    // get new word
    const random = Math.floor(Math.random() * words.length); // get random index
    selectedWord = words[random]; // select via index

  }

  return (
    <>
     <Header />
     <div className="game-container">
       <Figure wrongLetters={wrongLetters}/>
       <WrongLetters wrongLetters={wrongLetters}/>
       <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
     </div>
     <Popup correctLetters={correctLetters} wrongLetters={wrongLetters}  selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
     <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
