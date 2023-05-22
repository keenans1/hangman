import React from 'react';
import './GameOver.css';

interface GameOverProps {
  isGameWon: boolean;
  isGameLost: boolean;
  restartGame: () => void;
}

const GameOver: React.FC<GameOverProps> = ({ isGameWon, isGameLost, restartGame }) => {
  return (
    <div className='game-over-message'>
      {isGameWon && <p>Congratulations! You won!</p>}
      {isGameLost && <p>Oops! You lost!</p>}
      {(isGameWon || isGameLost) && (
        <button className='restart-button' onClick={restartGame}>Restart Game</button>
      )}
    </div>
  );
};

export default GameOver;