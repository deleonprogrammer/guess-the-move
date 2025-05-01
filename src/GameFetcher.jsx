import { useEffect, useState } from "react";

import "./game-fetcher.css";

// Note to self:
// username: The username of the player to guess the moves of.
// rated: Whether the games are rated or not. Apart from true and false, I should have another value
// for fetching both (maybe an empty string). Same with the other data, such as color.
// color: The color of pieces the username plays in the game to be fetched ('b' or 'w').
// minimumAccuracy: The minimum accuracy of the game to be fetched. For example, 85, so that games
// where the player had 70 or 60 won't get fetched (this is because high-accuracy games make for better practice, and also
// potentially easier to guess moves, as they'll be more logical).
// timeClass: This is what chess.com calls it in their API. 'rapid', 'blitz', etc. Basically, time controls in the broader sense
// (without going into details as to how many seconds allocated to each player).
// timeControl: The amount of seconds allocated to each player. '180+1' for 3+1 blitz, for instance,
// which is what I'll use in the first place, since that will yield results from Titled Tuesday.
// openingMoves: The series of opening moves of the game to be fetched. Maybe we want something that starts with 1. d4, maybe
// something that starts with 1. e4 e5 2. Nf3 Nc6 3. Bb5 (the Ruy Lopez), or something else.
// This part about fetching according to opening moves requires manually working through the results,
// so I may skip it in the first version of the program (although I could fetch games that start with 1. d4, for instance, as that
// can be easily looked for by simply checking that the PGN string includes "1. d4" as a substring).
function GameFetcher({ onGameFetched }) {
  const [chosenPlayer, setChosenPlayer] = useState(0);

  const players = [
    {
      username: "gmbenjaminbok",
      description:
        "Grandmaster Benjamin Bok is a famous player and content creator from the Netherlands. He picked up the game at the age of six, learning from his father, and reached the grandmaster title when he was nineteen years old. He has remained one of the best players of his country ever since.",
      color: "b",
      openingMoves: "1. d4",
    },
    {
      username: "gmbenjaminfinegold",
      description:
        "Grandmaster Benjamin Finegold is an American chess player and content creator. He learned the game from his father, a chess master. He earned the grandmaster title (the highest title in chess) in 2009. As a content creator, he is known for his clear explanations and great sense of humor.",
      color: "w",
      openingMoves: "1. d4",
    },
    {
      username: "danielnaroditsky",
      description:
        'Grandmaster Daniel Naroditsky, aka Danya, aka "the sensei", is a chess player and content creator, better-known to amateurs for his highly-instructive videos. He learned the game at the age of six, and is one of the strongest players on chess.com, with a rating over 3000!',
      color: "b",
      openingMoves: "",
    },
  ];

  const username = players[chosenPlayer].username;
  const rated = true;
  const color = players[chosenPlayer].color;
  const minimumAccuracy = 85;
  const timeClass = "blitz";
  const timeControl = "180+1";
  const openingMoves = players[chosenPlayer].openingMoves;

  async function fetchGames() {
    const today = new Date();
    // Year in YYYY format.
    let fullYear = today.getFullYear();
    let month = today.getMonth();
    let start = month < 10 ? "0" : "";
    let monthInMmFormat = start + (month + 1);
    let response = await fetch(
      `https://api.chess.com/pub/player/${players[chosenPlayer].username}/games/${fullYear}/${monthInMmFormat}`
    );
    let json = await response.json();

    // Take into account that the games array can be empty, in particular at the beginning
    // of the month, when the player still hasn't played any new games! In such a case, I should just pick up the ones from the month before.
    // There's no way Bok doesn't play for an entire month, but I should also guard against
    // the case where the previous month doesn't have any games either.

    // If there are no games this month, fetch from last month.
    // If it's January, gotta change the year to the previous one and the month to December!
    if (json.games.length === 0) {
      // If it's January, make it December, and change the year as well.
      if (month === 0) {
        month = 11;
        --fullYear;
      } else {
        --month;
      }
      start = month < 10 ? "0" : "";
      console.log(month);
      monthInMmFormat = start + (month + 1);
      response = await fetch(
        `https://api.chess.com/pub/player/${players[chosenPlayer].username}/games/${fullYear}/${monthInMmFormat}`
      );
      json = await response.json();
    }

    // If still no games...
    if (json.games.length === 0) {
      console.log("No games found in the last two months.");
      onGameFetched({
        messageToDisplay: "No games found for " + username + ".",
      });
      return "";
    }

    console.log(json.games);

    const filteredGames = json.games.filter((game) => {
      let res = false;
      // For comparison purposes, transform the username to uppercase.
      const usernameInUppercase = username.toUpperCase();
      const gamesUsernameInUppercase =
        color === "b"
          ? game.black.username.toUpperCase()
          : game.white.username.toUpperCase();
      const gameWasRated = game.rated;

      let accuracy = 0;
      if (typeof game.accuracies !== "undefined") {
        accuracy =
          color === "b" ? game.accuracies.black : game.accuracies.white;
      }

      // Obtain the moves
      let pgnSeparatedBySegments = game.pgn.split('"]');
      const movesWithNumberOfMoveAndTimeStamp =
        pgnSeparatedBySegments[pgnSeparatedBySegments.length - 1].trim();
      // Regex obtained from:
      // https://typeofnan.dev/how-to-capture-between-two-characters-in-javascript-using-regex/
      let strippedMovesWithNumberOfMoveAndTimeStamp =
        movesWithNumberOfMoveAndTimeStamp.replaceAll(/\{.+?\}/g, "");

      // Other Regex made by me using this guide:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
      let withoutBlacksMoves =
        strippedMovesWithNumberOfMoveAndTimeStamp.replaceAll(
          / \d+\.\.\. /g,
          ""
        );

      // let withoutNumbers = withoutBlacksMoves.replaceAll(/\d+\. /g, "");
      let withoutResult = withoutBlacksMoves.replaceAll(/\d+\-\d+/g, "");

      let withoutExtraSpace = withoutResult.replaceAll(/\ (?=\ )/g, "");

      let withoutChecksMatesEqualsAndCaptures = withoutExtraSpace
        .replaceAll("+", "")
        .replaceAll("#", "")
        .replaceAll("=", "")
        .replaceAll("x", "");

      // const pgnAsArrayOfMoves =
      // withoutChecksMatesEqualsAndCaptures.split(" ");

      res =
        game.rules === "chess" &&
        gamesUsernameInUppercase === usernameInUppercase &&
        gameWasRated === rated &&
        accuracy >= minimumAccuracy &&
        timeClass === game.time_class &&
        timeControl === game.time_control &&
        withoutChecksMatesEqualsAndCaptures.includes(openingMoves);

      return res;
    });

    console.log(filteredGames);

    if (filteredGames.length === 0) {
      console.log("No games match the provided filters.");
      onGameFetched({
        messageToDisplay: "No games found for " + username + ".",
      });
      return "";
    }

    const randomizedWithoutFloor = Math.random() * (filteredGames.length - 1);

    console.log("randomized without floor: " + randomizedWithoutFloor);

    const randomizedIndex = Math.floor(randomizedWithoutFloor);
    console.log("randomized index: " + randomizedIndex);

    const whitesUsername = filteredGames[randomizedIndex].white.username;
    const blacksUsername = filteredGames[randomizedIndex].black.username;
    const guessWhitesMoves =
      whitesUsername.toUpperCase() === username.toUpperCase();

    const pgn = filteredGames[randomizedIndex].pgn;

    // Regex obtained from:
    // https://typeofnan.dev/how-to-capture-between-two-characters-in-javascript-using-regex/
    const gameResult = pgn.match(/(?<=\[Result \").+?(?=\"\])/g);
    console.log("gameResult: " + gameResult);

    // Obtain the moves
    let pgnSeparatedBySegments = pgn.split('"]');
    const movesWithNumberOfMoveAndTimeStamp =
      pgnSeparatedBySegments[pgnSeparatedBySegments.length - 1].trim();
    // Regex obtained from:
    // https://typeofnan.dev/how-to-capture-between-two-characters-in-javascript-using-regex/
    let strippedMovesWithNumberOfMoveAndTimeStamp =
      movesWithNumberOfMoveAndTimeStamp.replaceAll(/\{.+?\}/g, "");

    // Other Regex made by me using this guide:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    let withoutBlacksMoves =
      strippedMovesWithNumberOfMoveAndTimeStamp.replaceAll(/ \d+\.\.\. /g, "");

    let withoutNumbers = withoutBlacksMoves.replaceAll(/\d+\. /g, "");
    let withoutResult = withoutNumbers.replaceAll(/\d+\-\d+/g, "");

    let withoutExtraSpace = withoutResult.replaceAll(/\ (?=\ )/g, "");

    let withoutChecksMatesEqualsAndCaptures = withoutExtraSpace
      .replaceAll("+", "")
      .replaceAll("#", "")
      .replaceAll("=", "")
      .replaceAll("x", "");

    console.log(
      "movesWithNumberOfMoveAndTimeStamp: " + movesWithNumberOfMoveAndTimeStamp
    );

    console.log(
      "strippedMovesWithNumberOfMoveAndTimeStamp: " +
        strippedMovesWithNumberOfMoveAndTimeStamp
    );

    console.log("withoutBlacksMoves: " + withoutBlacksMoves);

    console.log("withoutResult: " + withoutResult);

    console.log("withoutExtraSpace: " + withoutExtraSpace);

    console.log(
      "withoutMatesChecksEtc: " + withoutChecksMatesEqualsAndCaptures
    );

    const pgnAsArrayOfMoves = withoutChecksMatesEqualsAndCaptures
      .trim()
      .split(" ");
    console.log("pgnAsArrayOfMoves: " + pgnAsArrayOfMoves);

    // For Black's moves, the number of moves should be calculated with Math.floor (in case the last move is only White's),
    // whereas for White's moves, the number of moves should be calculated with Math.ceiling (same reason).

    const numberOfMovesMadeByTheChosenPlayer =
      color === "b"
        ? Math.floor(pgnAsArrayOfMoves.length / 2)
        : Math.ceiling(pgnAsArrayOfMoves.length / 2);
    console.log(
      "Number of moves in the game: " + numberOfMovesMadeByTheChosenPlayer
    );

    console.log(pgn);
    console.log(json.games[0]);

    onGameFetched({
      messageToDisplay: "",
      game: {
        guessWhitesMoves,
        whitesUsername,
        blacksUsername,
        pgnAsArrayOfMoves,
        numberOfMovesMadeByTheChosenPlayer,
        gameResult,
      },
    });

    // rated: true, rules: "chess",black: { username: 'GMBenjaminBok', result: 'win' }, white: { result: ''}
  }

  return (
    <div className="game-fetcher-container">
      <div className="player-container">
        <div
          className="previous-player-button"
          onClick={() => {
            setChosenPlayer((currentChosenPlayer) =>
              currentChosenPlayer === 0
                ? players.length - 1
                : currentChosenPlayer - 1
            );
          }}
        >
          &lt;
        </div>
        <div className="player-data">
          <div
            className={
              "player-image " + "player-image-" + players[chosenPlayer].username
            }
          ></div>
          <div className="player-description">
            {players[chosenPlayer].description}
          </div>
        </div>
        <div
          className="next-player-button"
          onClick={() => {
            setChosenPlayer(
              (currentChosenPlayer) =>
                (currentChosenPlayer + 1) % players.length
            );
          }}
        >
          &gt;
        </div>
      </div>
      <div className="game-fetcher-button" onClick={fetchGames}>
        New game
      </div>
    </div>
  );
}

export default GameFetcher;
