 import React, { useState } from 'react';
 import Cell from './Cell';
 import Tile from './Tile';
 import {Board} from '../helper/index'
 import useEvent from '../customHook/useEvent';
import GameOver from './GameOver';
 
 const BoardView = () => {
    const [board,setBoard] = useState(new Board());

    

    const handleKeyDown = (event) => {
        if (board.hasWon()) {
          return;
        }
      
        if (event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "ArrowRight" || event.key === "ArrowDown") {
          let direction;
          switch (event.key) {
            case "ArrowLeft":
              direction = 0;
              break;
            case "ArrowUp":
              direction = 1;
              break;
            case "ArrowRight":
              direction = 2;
              break;
            case "ArrowDown":
              direction = 3;
              break;
            default:
              return;
          }
      
          let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board);
          let newBoard = boardClone.move(direction);
          setBoard(newBoard);
        }
      };
      
 
    useEvent('keydown',handleKeyDown)
    const cells = board.cells.map((row,rowIndex)=>{
        return (
            <div key={rowIndex}>
                {row.map((col,colIndex)=>{
                    return <Cell key={colIndex}/>
                })}
            </div>
        )
    })
    const tiles = board.tiles.filter((tile)=>tile.value!==0).map((tile,index)=>{
               return <Tile key={index} tile = {tile} />
    })
    const resetGame = ()=>{
           setBoard(new Board());
    }
   return (
    <div>
        <div className="details-box">  
        <div className='resetButton' onClick={resetGame}>Reset Game</div>
        <div className='score-box'>
            <div className='score-header'>SCORE</div>
            <div>{board.score}</div>
        </div>
        </div>
     <div className='board'>{cells}{tiles}<GameOver onRestart={resetGame} board={board} /></div>
     </div>
   )
 }
 
 export default BoardView