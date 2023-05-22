import React from 'react';
import './IncorrectGuesses.css';

const IncorrectGuesses: React.FC<{incorrectGuesses: number}> = ({ incorrectGuesses }) => {
    return (
            <p className='incorrect-guesses'>Incorrect Guesses: {incorrectGuesses}</p>
    )
}

export default IncorrectGuesses