import { pieceSvgs } from "./Utils";

import "./piece.css";

// IMPORTANT: Notice how I had to change the style of the SVG to be React-compliant
// (fill-opacity becomes fillOpacity, for example, and also notice the brackets and the commas, as opposed to quotes and semicolons).
// Similarly, some stuff that was outside of the style part was also giving me trouble, such as
// stroke-width, which should be strokeWidth in react. The console helps with finding such errors, as it displays them there, and even
// gives the suggestion of the right one (all of those that aren't related to the styling; the style part I had to do on my own).
// In the style, also important was to use quotation marks around the values that require them, such as 'mitter', and those that aren't numeric in general.
// Another important thing: the SVG looked really small originally. I had to remove the width and height, and replace it with
// viewBox="0 0 [width] [height]", as specified in a reply in StackOverflow (it wasn't even the top reply of the question).
function Piece({ pieceType }) {
  let svgToShow;
  switch (pieceType) {
    case "p":
      svgToShow = pieceSvgs.blackPawnSvg;
      break;
    case "n":
      svgToShow = pieceSvgs.blackKnightSvg;
      break;
    case "b":
      svgToShow = pieceSvgs.blackBishopSvg;
      break;
    case "r":
      svgToShow = pieceSvgs.blackRookSvg;
      break;
    case "q":
      svgToShow = pieceSvgs.blackQueenSvg;
      break;
    case "k":
      svgToShow = pieceSvgs.blackKingSvg;
      break;
    case "P":
      svgToShow = pieceSvgs.whitePawnSvg;
      break;
    case "N":
      svgToShow = pieceSvgs.whiteKnightSvg;
      break;
    case "B":
      svgToShow = pieceSvgs.whiteBishopSvg;
      break;
    case "R":
      svgToShow = pieceSvgs.whiteRookSvg;
      break;
    case "Q":
      svgToShow = pieceSvgs.whiteQueenSvg;
      break;
    case "K":
      svgToShow = pieceSvgs.whiteKingSvg;
      break;
    default:
      svgToShow = <></>;
      break;
  }
  return svgToShow;
}

export default Piece;
