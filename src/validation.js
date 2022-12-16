const OutputView = require("./OutputView");

const isInteger = (number) => {
  return number % 1 === 0;
};

const isBetweenThreeTwenty = (number) => {
  return number >= 3 && number <= 20;
};

const checkBridgeSize = (number) => {
  try {
    if (!isInteger(number)) throw new Error();
    if (!isBetweenThreeTwenty(number)) throw new Error();
  } catch {
    OutputView.printBridgeSizeError();
    return true;
  }
};

const checkMovement = (string) => {
  try {
    if (!(string === "U" || string === "D")) throw new Error();
  } catch {
    OutputView.printMovementError();
    return true;
  }
};

const checkRestart = (string) => {
  try {
    if (!(string === "R" || string === "Q")) throw new Error();
  } catch {
    OutputView.printRestartError();
    return true;
  }
};

module.exports = {
  checkBridgeSize,
  checkMovement,
  isInteger,
  isBetweenThreeTwenty,
  checkRestart,
};
