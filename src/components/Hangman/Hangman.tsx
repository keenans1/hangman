import React, { useState, useEffect } from 'react';
import WordDisplay from '../WordDisplay/WordDisplay';
import Keyboard from '../Keyboard/Keyboard';
import IncorrectGuesses from '../IncorrectGuesses/IncorrectGuesses';
import GameOver from '../GameOver/GameOver';
import './Hangman.css';

const Hangman = () => {
  const [hiddenWord, setHiddenWord] = useState<string>('hangman'); // The word to guess
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]); // Array of guessed letters
  const maxIncorrectGuesses = 6; // Maximum allowed incorrect guesses
  const [incorrectGuesses, setIncorrectGuesses] = useState<number>(0); // Number of incorrect guesses made

  const hiddenWords: string[] = [
    "hangman",
    "javascript",
    "react",
    "typescript",
    "openai",
    "coding",
    "computer",
    "keyboard",
    "gaming",
    "developer",
    "software",
    "hardware",
    "internet",
    "website",
    "programming",
    "python",
    "java",
  ];

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * hiddenWords.length);
    return hiddenWords[randomIndex];
  };

  useEffect(() => {
    const randomWord = getRandomWord();
    setHiddenWord(randomWord);
    console.log(randomWord);
  }, []);

  const handleGuess = (letter: string) => {
    if (!isGameWon() && !isGameLost()) {
      if (!guessedLetters.includes(letter)) {
        const isLetterCorrect = hiddenWord.includes(letter);
        const newGuessedLetters = [...guessedLetters, letter];

        setGuessedLetters(newGuessedLetters);

        if (!isLetterCorrect) {
          setIncorrectGuesses(incorrectGuesses + 1);
        }
      }
    }
  };

  const isGameWon = () => {
    return hiddenWord.split('').every((letter) => guessedLetters.includes(letter));
  };

  const isGameLost = () => {
    return incorrectGuesses >= maxIncorrectGuesses;
  };

  const restartGame = () => {
    setHiddenWord(getRandomWord());
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  };

  const renderStickFigure = () => {
    const bodyParts = [
      { name: 'head', className: 'stick-figure head' },
      { name: 'body', className: 'stick-figure body' },
      { name: 'left-arm', className: 'stick-figure left-arm' },
      { name: 'right-arm', className: 'stick-figure right-arm' },
      { name: 'left-leg', className: 'stick-figure left-leg' },
      { name: 'right-leg', className: 'stick-figure right-leg' },
    ];

    return bodyParts.map((part, index) => {
      const isDisplayed = incorrectGuesses >= index + 1 && incorrectGuesses <= maxIncorrectGuesses;

      return (
        <div
          key={part.name}
          className={`${part.className} ${isDisplayed ? '' : 'hide'}`}
        ></div>
      );
    });
  };

  return (
    <div className='hangman-container'>
      <h1 className='hangman-title'>Hangman Game</h1>
      <WordDisplay hiddenWord={hiddenWord} guessedLetters={guessedLetters} />
      <Keyboard
        guessedLetters={guessedLetters}
        handleGuess={handleGuess}
      />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses} />

      {(isGameWon() || isGameLost()) && (
        <GameOver
          isGameWon={isGameWon()}
          isGameLost={isGameLost()}
          restartGame={restartGame}
        />
      )}

      <div className="hangman-animation">
        {/* <div className="stick-figure">
          <div className="head"></div>
          <div className="body"></div>
          <div className="arms"></div>
          <div className="legs"></div>
        </div> */}
        {renderStickFigure()}
      </div>

    </div>
  );
}

export default Hangman;