import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelected, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard)
    function handleSelectSquared(rowIndex, colIndex){
        
        setGameBoard((preGameboard)=>{
            console.log(preGameboard);

            const updatedBoard = [...preGameboard.map(innerArray =>[...innerArray])];
            updatedBoard[rowIndex][colIndex] =activePlayerSymbol ;
            console.log([...preGameboard, ...preGameboard[rowIndex][colIndex] = activePlayerSymbol ]); 
            // console.log([...preGameboard, ...preGameboard[rowIndex][colIndex] ='X' ]); 
            console.log(updatedBoard,'update');
            console.log(preGameboard[rowIndex]);
            return updatedBoard
        })
        onSelected();
    }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=> handleSelectSquared(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
