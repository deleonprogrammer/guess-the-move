import { useState } from "react";

import Piece from "./Piece";
import PromotionOptions from "./PromotionOptions";

import { getAllPossibleAlgebraicNotationInterpretations } from "./Utils";

import "./board.css";

// Notes to self:
// Step 1: Set up position on the board given a FEN.
// Tip: When it comes to moves, what matters is identifying the origin and target
// square.
// Tip 2: Identify where every piece is, not what each square holds, as there are far
// less pieces than squares on the board.
// Tip 3: Number the squares following FEN notation: square one is a8, square two is b8,
// and so on, until square sixty-four, which is h1.
// Tip 4: For this initial program, no need to check the legality of the moves.
// We know they're legal, because they are part of chess.com's PGN. Just identify
// the original square and target properly.
// Movement of the bishop: multiples of 7 and 9.
// Movement of the pawn: +8 or +16 if Black (on the first move only, +16 available),
// -8 or -16 if White. +7 or +9 to capture if Black; -7 or -9 to capture if White.

function Board({ fen, onMoveMade }) {
  const [moveInfo, setMoveInfo] = useState({
    piece: "",
    originalFileIndex: -1,
    originalRankIndex: -1,
    targetFileIndex: -1,
    targetRankIndex: -1,
    promotionInProgress: false,
    promotionPiece: "",
  });

  const [flippedBoard, setFlippedBoard] = useState(false);

  // I consider all the options for the nomenclature of a certain move, so that it can be checked against the move made in the actual game.
  // Nd2, for instance, could be Nbd2 or Nfd2 in some cases, but in the PGN it'll show up as Nbd2 for sure,
  // so when checking for equality, the rankDisambiguation notation: Nbd2, will match the actual move, whereas the
  // ambiguous Nd2 won't. Of course, this is again relying on the fact that chess.com's notation is accurate.
  // In the future, if I check for the legality of moves and more accurate notation, this will change, but for the time being,
  // this way suits the purposes of the program.
  let moveMade = {
    normal: "",
    rankDisambiguation: "",
    fileDisambiguation: "",
    capture: "",
    captureWithRankDisambiguation: "",
    captureWithFileDisambiguation: "",
  };

  const resetState = () => {
    setMoveInfo({
      piece: "",
      originalFileIndex: -1,
      originalRankIndex: -1,
      targetFileIndex: -1,
      targetRankIndex: -1,
      promotionInProgress: false,
      promotionPiece: "",
    });
  };

  console.log("FEN: " + fen);
  let turn = "w";
  // TODO: For the purposes of the board component, we probably don't need all the extra information from the FEN.
  // Just the piece placement should be enough. The rest will be needed for calculation that has nothing with
  // displaying the board on the screen.
  let whiteCanCastleKingside;
  let whiteCanCastleQueenside;
  let blackCanCastleKingside;
  let blackCanCastleQueenside;
  let enPassantTarget;
  let halfmovesSinceLastPawnMoveOrCapture;
  let moveNumber;
  // TODO: This pieces array might be more useful for the calculation of the moves in the future,
  // not precisely in this board component, that's supposed to just display the board and pieces.
  // I'll leave it here, because it can be useful somewhere else in the future.
  // On the other hand, for displaying the pieces on the board, I think it's
  // convenient to have an array with all of the squares as they appear in the FEN.
  let pieces = [];
  let ranks = [];

  // Get information about piece placement from the corresponding segment of a FEN
  // string.
  const getPiecesFromFen = (piecesInFen) => {
    // Flip the FEN string if the board is flipped, to get the position to display.
    // The index values will be converted when handling the square selection,
    // so that the resulting algebraic notation is correct.
    const piecesInFenAsDisplayed = flippedBoard
      ? piecesInFen.split("").reverse().join("")
      : piecesInFen;

    let i = 0;
    let numberOfSlashesEncountered = 0;
    let numberOfEmptySquaresEncountered = 0;
    let currentRank = [];
    while (i < piecesInFenAsDisplayed.length) {
      let currentValue = piecesInFenAsDisplayed[i];
      if (currentValue === "/") {
        ++numberOfSlashesEncountered;
        ranks.push(currentRank);
        currentRank = [];
      } else {
        let emptySquares = parseInt(currentValue);
        if (isNaN(emptySquares)) {
          // Found an actual piece, not a slash or a number indicating empty space.
          // The count starts from square number one, not zero. Therefore, it's necessary to add one to the index to get the position.
          // On top of that, it's also necessary to add the number of empty squares encountered, and subtract the number of slashes encountered,
          // to get the right position.
          pieces.push({
            piece: currentValue,
            position:
              i +
              1 +
              numberOfEmptySquaresEncountered -
              numberOfSlashesEncountered,
          });
          currentRank.push(currentValue);
        } else {
          numberOfEmptySquaresEncountered += emptySquares;
          for (let j = 0; j < emptySquares; ++j) {
            currentRank.push("");
          }
        }
      }
      ++i;
    }
    ranks.push(currentRank);
  };

  // TODO: Use the method in utils instead of this one (it's the same method, basically,
  // but altered for generalization with a single return with all of the information)
  // CAREFUL: I just noticed the getPiecesFromFen is very different here, so that
  // also would need handling for the generalization purposes. Maybe passing the function
  // as an argument.
  // Get all the information about a position from a given FEN string.
  const getFenInfo = (fen) => {
    const arrayOfFen = fen.split(" ");
    getPiecesFromFen(arrayOfFen[0]);
    turn = arrayOfFen[1];
    whiteCanCastleKingside = arrayOfFen[2].includes("K");
    whiteCanCastleQueenside = arrayOfFen[2].includes("Q");
    blackCanCastleKingside = arrayOfFen[2].includes("k");
    blackCanCastleQueenside = arrayOfFen[2].includes("q");
    enPassantTarget = arrayOfFen[3];
    halfmovesSinceLastPawnMoveOrCapture = parseInt(arrayOfFen[4]);
    moveNumber = parseInt(arrayOfFen[5]);
  };

  // Returns true if the specified piece is of the color that has the move.
  // Lowercase letters represent black pieces, just like in FEN.
  const isPieceOfColorToMove = (piece) => {
    console.log("piece: " + piece);
    console.log("turn: " + turn);
    let res = false;
    switch (piece) {
      case "p":
      case "n":
      case "b":
      case "r":
      case "q":
      case "k":
        res = turn === "b";
        break;
      case "P":
      case "N":
      case "B":
      case "R":
      case "Q":
      case "K":
        res = turn === "w";
        break;
      default:
        res = false;
        break;
    }
    return res;
  };

  const handlePromotionPieceChosen = (promotionPiece) => {
    let newMoveInfo = { ...moveInfo };
    newMoveInfo.promotionPiece = promotionPiece;
    onMoveMade(
      newMoveInfo,
      getAllPossibleAlgebraicNotationInterpretations(
        newMoveInfo.piece,
        newMoveInfo.originalFileIndex,
        newMoveInfo.originalRankIndex,
        newMoveInfo.targetFileIndex,
        newMoveInfo.targetRankIndex,
        newMoveInfo.promotionPiece
      )
    );
    resetState();
  };

  const handleSquareClicked = (rankIndex, fileIndex, piece) => {
    let newMoveInfo = {
      ...moveInfo,
    };
    // If no move origin has been defined, and a piece of the side that has the move
    // was clicked, determine a new origin square.
    if (newMoveInfo.originalRankIndex < 0) {
      if (isPieceOfColorToMove(piece)) {
        newMoveInfo.piece = piece;
        newMoveInfo.originalFileIndex = fileIndex;
        newMoveInfo.originalRankIndex = rankIndex;
        setMoveInfo(newMoveInfo);
      }
      // Otherwise, if the origin has already been determined, select the target.
    } else {
      newMoveInfo.targetFileIndex = fileIndex;
      newMoveInfo.targetRankIndex = rankIndex;
      if (
        (newMoveInfo.piece === "p" && newMoveInfo.targetRankIndex === 7) ||
        (newMoveInfo.piece === "P" && newMoveInfo.targetRankIndex === 0)
      ) {
        newMoveInfo.promotionInProgress = true;
        setMoveInfo(newMoveInfo);
      } else {
        onMoveMade(
          newMoveInfo,
          getAllPossibleAlgebraicNotationInterpretations(
            newMoveInfo.piece,
            newMoveInfo.originalFileIndex,
            newMoveInfo.originalRankIndex,
            newMoveInfo.targetFileIndex,
            newMoveInfo.targetRankIndex,
            ""
          )
        );
        resetState();
      }
      console.log("Piece to move: " + moveInfo.piece);
    }
  };

  // Returns true if the specified square, with the specified piece on it, should be highlighted.
  // The board will highlight both the origin and target squares of a move.
  // The origin, naturally, has to always be a square occupied by a piece OF THE COLOR THAT HAS THE MOVE, whereas
  // the target can potentially be any square (I'm not checking for the legality of moves as of now, but will in the future;
  // this is a TODO)
  const isHighlightedSquare = (rankIndex, fileIndex) => {
    return (
      moveInfo.originalRankIndex === rankIndex &&
      moveInfo.originalFileIndex === fileIndex
    );
  };

  const getRowContent = (rankIndex) => {
    // If the board is flipped, the eighth rank is displayed instead of the first,
    // the seventh instead of the second, and so on. Notice that I only change
    // the values for the real ones when it comes to the logic (finding the algebraic
    // notation of the move). For the purposes of displaying the board,
    // the fake ones are used.
    const actualRankIndex = flippedBoard ? 7 - rankIndex : rankIndex;
    return (
      <div className="row" key={rankIndex}>
        {rankIndex === 3 && moveInfo.promotionInProgress ? (
          <PromotionOptions
            turn={"w"}
            onPieceChosen={handlePromotionPieceChosen}
          ></PromotionOptions>
        ) : (
          ""
        )}
        {ranks[rankIndex].map((piece, fileIndex) => (
          <div
            className={`column ${
              (rankIndex + fileIndex) % 2 === 0 ? "" : "dark-square"
            } ${fileIndex === 0 ? "leftmost-file" : ""} ${
              fileIndex === 7 ? "rightmost-file" : ""
            } ${
              isHighlightedSquare(
                actualRankIndex,
                flippedBoard ? 7 - fileIndex : fileIndex
              )
                ? "highlighted-square"
                : ""
            }`}
            key={"" + rankIndex + fileIndex + piece}
            onClick={() => {
              handleSquareClicked(
                actualRankIndex,
                flippedBoard ? 7 - fileIndex : fileIndex,
                piece,
                ""
              );
            }}
          >
            {piece === "" ? "" : <Piece pieceType={piece}></Piece>}
          </div>
        ))}
      </div>
    );
  };

  const getContentForAllRows = () => {
    let res = [];
    for (let i = 0; i < 8; ++i) {
      res.push(getRowContent(i));
    }
    return res;
  };

  getFenInfo(fen);
  console.log(ranks);

  return (
    <div className="board">
      {getContentForAllRows()}
      <div
        className="flip-board-button"
        onClick={() => {
          setFlippedBoard((flipped) => !flipped);
        }}
      >
        Flip board
      </div>
    </div>
  );
}

export default Board;
