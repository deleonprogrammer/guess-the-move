import { pieceSvgs } from "./Utils";
import "./promotion-options.css";

function PromotionOptions({ turn, onPieceChosen }) {
  const promoteToQueenSvg =
    turn === "b" ? pieceSvgs.blackQueenSvg : pieceSvgs.whiteQueenSvg;
  const promoteToKnightSvg =
    turn === "b" ? pieceSvgs.blackKnightSvg : pieceSvgs.whiteKnightSvg;
  const promoteToRookSvg =
    turn === "b" ? pieceSvgs.blackRookSvg : pieceSvgs.whiteRookSvg;
  const promoteToBishopSvg =
    turn === "b" ? pieceSvgs.blackBishopSvg : pieceSvgs.whiteBishopSvg;
  return (
    <>
      <div className="backdrop"></div>
      <div className="promotion-options">
        <div
          className="promotion-choice promote-queen"
          onClick={() => {
            onPieceChosen("Q");
          }}
        >
          {promoteToQueenSvg}
        </div>
        <div
          className="promotion-choice promote-knight"
          onClick={() => {
            onPieceChosen("N");
          }}
        >
          {promoteToKnightSvg}
        </div>
        <div
          className="promotion-choice promote-rook"
          onClick={() => {
            onPieceChosen("R");
          }}
        >
          {promoteToRookSvg}
        </div>
        <div
          className="promotion-choice promote-bishop"
          onClick={() => {
            onPieceChosen("B");
          }}
        >
          {promoteToBishopSvg}
        </div>
      </div>
    </>
  );
}

export default PromotionOptions;
