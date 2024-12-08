import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  // X is player is playing
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare(){
    console.log(activePlayer);
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'}></Player>
        </ol>
        <GameBoard onSelected={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
