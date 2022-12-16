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
    return true;
  }
};

module.exports = {
  checkBridgeSize,

  isInteger,
  isBetweenThreeTwenty,
};
