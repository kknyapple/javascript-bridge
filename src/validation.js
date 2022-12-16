const OutputView = require("./OutputView");
const MissionUtils = require("@woowacourse/mission-utils");
const { TEXT, ERROR } = require("./constant");

const isInteger = (number) => {
  return number % 1 === 0;
};

const isBetweenThreeTwenty = (number) => {
  return number >= 3 && number <= 20;
};

const checkBridgeSize = (number) => {
  try {
    if (!isInteger(number)) throw new Error("[ERROR]");
    if (!isBetweenThreeTwenty(number)) throw new Error("[ERROR]");
  } catch {
    MissionUtils.Console.print(ERROR.BRIDGE_SIZE);
    return true;
  }
};

const checkMovement = (string) => {
  try {
    if (!(string === "U" || string === "D")) throw new Error("[ERROR] U나 D");
  } catch {
    MissionUtils.Console.print(ERROR.MOVEMENT);
    return true;
  }
};

const checkRestart = (string) => {
  try {
    if (!(string === "R" || string === "Q")) throw new Error("[ERROR] R이나 Q");
  } catch {
    MissionUtils.Console.print(ERROR.RESTART);
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
