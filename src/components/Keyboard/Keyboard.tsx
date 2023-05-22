import React from 'react';
import './Keyboard.css';

interface KeyboardProps {
    guessedLetters: string[];
    handleGuess: (letter: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ guessedLetters, handleGuess}) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const handleClick = (letter: string) => {
      handleGuess(letter);
    };
  
    return (
      <div className='keyboard'>
        {alphabet.split('').map((letter) => (
          <button
            key={letter}
            onClick={() => handleClick(letter)}
            disabled={guessedLetters.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    );
}

export default Keyboard;