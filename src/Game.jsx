import { useEffect, useState } from "react";
import Board from "./Board";
import "./game.css";
import { obtainNewFen } from "./Utils";

function Game(game) {
  console.log("GAME as it arrives to Game.jsx:", game);
  // game: {
  // guessWhitesMoves (e.g.: true)
  // whitesUsername (e.g.: 'GMBenjaminFinegold'),
  //  blacksUsername (e.g.: 'GMBenjaminBok'),
  // pgnAsArrayOfMoves (e.g.: ['d4', 'Nf6', 'c4', etc]),
  // numberOfMovesMadeByTheChosenPlayer (e.g.: 48),
  // gameResult (e.g.: '0-1')
  // }

  const [gameData, setGameData] = useState({ ...game }.game);

  console.log("GAME DATA: ", gameData);

  const areMovesTheSame = (text, algebraicInterpretationsOfUsersMove) => {
    return (
      text === algebraicInterpretationsOfUsersMove.normal ||
      text === algebraicInterpretationsOfUsersMove.fileDisambiguation ||
      text === algebraicInterpretationsOfUsersMove.rankDisambiguation
    );
  };

  const updateGameData = (algebraicInterpretationsOfUsersMove) => {
    // TODO:
    // It'd be nice to somehow notify the user that the game ended, visually.

    let newGameData = { ...gameData };
    if (
      areMovesTheSame(
        newGameData.pgnAsArrayOfMoves[newGameData.plyIndex],
        algebraicInterpretationsOfUsersMove
      )
    ) {
      ++newGameData.score;
    }

    console.log("NEW GAME DATA: ", newGameData);

    newGameData.fenArray.push(
      obtainNewFen(
        newGameData.fenArray[newGameData.fenArray.length - 1],
        newGameData.pgnAsArrayOfMoves[newGameData.plyIndex]
      )
    );

    console.log(
      "NEW GAME DATA FEN ARRAY WEIRD: ",
      newGameData.fenArray[newGameData.fenArray.length - 1]
    );

    console.log(
      "NEW GAME DATA MOVE STRANGE: ",
      newGameData.pgnAsArrayOfMoves[newGameData.plyIndex]
    );

    // If there is one more move by the opponent in the game, then set up the position after it.
    if (newGameData.plyIndex + 1 < newGameData.pgnAsArrayOfMoves.length) {
      newGameData.fenArray.push(
        obtainNewFen(
          newGameData.fenArray[newGameData.fenArray.length - 1],
          newGameData.pgnAsArrayOfMoves[newGameData.plyIndex + 1]
        )
      );
    }

    // If there is still one more move to be made, update the index. Otherwise it isn't necessary.
    if (newGameData.plyIndex + 2 < newGameData.pgnAsArrayOfMoves.length) {
      newGameData.plyIndex += 2;
    }

    setGameData(newGameData);
  };

  const handleMove = (moveInfo, algebraicInterpretations) => {
    console.log("ALGEBRAIC: ", algebraicInterpretations);
    updateGameData(algebraicInterpretations);
  };

  return (
    <div className="game-container">
      <Board
        fen={gameData.fenArray[gameData.fenArray.length - 1]}
        onMoveMade={handleMove}
      ></Board>
      <div className="score">
        Score: {gameData.score}/{gameData.numberOfMovesMadeByTheChosenPlayer}
      </div>
    </div>
  );
}

export default Game;
