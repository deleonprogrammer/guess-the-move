import { useEffect, useState } from "react";
import Game from "./Game";
import GameFetcher from "./GameFetcher";
import { obtainNewFen } from "./Utils";

function App() {
  const [fetchedGameData, setFetchedGameData] = useState({
    fetchedGame: false,
    messageToDisplay: "",
    gameData: false,
    gameCount: 0,
  });

  // retrievedGameData is an object with messageToDisplay and game properties.
  // messageToDisplay is a string telling the user why a game wasn't retrieved if that is the case.
  // The string will be empty if a game was retrieved.
  // game, in case gameFound is true, should have the following format:
  // game: {
  // guessWhitesMoves (e.g.: true)
  // whitesUsername (e.g.: 'GMBenjaminFinegold'),
  //  blacksUsername (e.g.: 'GMBenjaminBok'),
  // pgnAsArrayOfMoves (e.g.: ['d4', 'Nf6', 'c4', etc]),
  // numberOfMovesMadeByTheChosenPlayer (e.g.: 48),
  // gameResult (e.g.: '0-1')
  // }
  const handleGameFetched = (retrievedGameData) => {
    let fetchedGame = false;
    let messageToDisplay = "Choose a player to start guessing moves!";
    let gameData = false;
    let gameCount = fetchedGameData.gameCount + 1;
    if (retrievedGameData.messageToDisplay === "") {
      fetchedGame = retrievedGameData.game;
      gameData = getGameData(fetchedGame);
    } else {
      messageToDisplay = retrievedGameData.messageToDisplay;
    }
    setFetchedGameData({ fetchedGame, messageToDisplay, gameData, gameCount });
  };

  const getGameData = (fetchedGame) => {
    let res = { ...fetchedGame };
    // Index of the current move to guess from the array.
    // TODO: For cases where we don't want to guess the
    // game from the very beginning, which would be a good improvement
    // to the current game, but from where the opening moves stop,
    // then the plyIndex would be relative to such a number of opening moves.
    res.plyIndex = fetchedGame.guessWhitesMoves ? 0 : 1;
    // Number of moves guessed so far.
    res.score = 0;
    // Array of the positions for every ply (including those where the user doesn't have to guess).
    // Notice that this array will have one more move than the move array, since it also brings
    // the starting position of every chess game at the beginning. This must be taken into account
    // when mapping a position to a certain move.
    // This is handled as an array so that in the future a function to revisit previous positions could be added.
    let fenArray = ["rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"];
    console.log("fenArray: ", fenArray);
    console.log("fenArray 0: " + fenArray[0]);
    console.log("game: ", fetchedGame);

    // If we have to guess Black's moves, then we don't start with the initial position.
    if (res.plyIndex === 1) {
      fenArray.push(
        obtainNewFen(fenArray[0], fetchedGame.pgnAsArrayOfMoves[0])
      );
    }

    console.log("GAME: ", fetchedGame);

    res.fenArray = fenArray;

    console.log("GAME AS RES: ", res);
    return res;
  };

  return (
    <div className="main-container">
      <GameFetcher onGameFetched={handleGameFetched}></GameFetcher>
      {fetchedGameData.fetchedGame ? (
        <Game
          key={fetchedGameData.gameCount}
          game={fetchedGameData.gameData}
        ></Game>
      ) : (
        <h2>{fetchedGameData.messageToDisplay}</h2>
      )}
    </div>
  );
}

export default App;
