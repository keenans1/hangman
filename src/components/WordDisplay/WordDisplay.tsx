import React from 'react';
import './WordDisplay.css';

interface WordDisplayProps {
    hiddenWord: string;
    guessedLetters: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({ hiddenWord, guessedLetters }) => {
    const getDisplayWord = (): string => {
      return hiddenWord
        .split('')
        .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
        .join(' ');
    };
  
    return <div className='word-display'>{getDisplayWord()}</div>;
  };
  

export default WordDisplay;