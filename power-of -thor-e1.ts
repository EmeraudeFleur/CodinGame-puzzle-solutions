while (true) {
  const remainingTurns: number = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
  let action: String = "";

  if (lightY > initialTy) {
    action += "S";
    initialTy += 1;
  } else if (lightY < initialTy) {
    action += "N";
    initialTy -= 1;
  }

  if (lightX > initialTx) {
    action += "E";
    initialTx += 1;
  } else if (lightX < initialTx) {
    action += "W";
    initialTx -= 1;
  }

  // A single line providing the move to be made: N NE E SE S SW W or NW
  console.log(action);
}
