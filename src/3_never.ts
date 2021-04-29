/**
 * 3/ never
 */

enum Directions {
  Left,
  Right,
  Forward
}

const turn = (direction: Directions): void => {
  switch (direction) {
    case Directions.Right:
      console.log("we're going right!");
      break;
    case Directions.Left:
      console.log("Turning left!");
      break;
    default:
      const exhaustiveCheck: never = direction;
  }
};
