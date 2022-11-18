const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");

describe("다리 길이 테스트", () => {
  test("다리 길이는 정수 숫자여야 한다.", () => {
    expect(() => {
      InputView.checkBridgeSize("5.1");
    }).toThrow("[ERROR]");
    expect(() => {
      InputView.checkBridgeSize("a");
    }).toThrow("[ERROR]");
  });
  test("다리 길이는 3~20이여야 한다.", () => {
    expect(() => {
      InputView.checkBridgeSize("21");
    }).toThrow("[ERROR]");
    expect(() => {
      InputView.checkBridgeSize("2");
    }).toThrow("[ERROR]");
  });
});

MissionUtils.Console.close();