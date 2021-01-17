import React, { useEffect, useState } from 'react'
import AboveGame from './component/AboveGame'
import Header from './component/Header'
import Game from './component/Game'
import useLocalStorageNumber from './hook/userLocalStorageNumber';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorageNumber('bestScore', 0);
 
  useEffect(() => {
    if(score > bestScore) {
      setBestScore(score)
    }
  })
  
  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <AboveGame />
      <Game setScore={setScore} />
    </div>
  );
}
