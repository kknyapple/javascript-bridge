const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Bridge = require("./Bridge");
const { checkBridgeSize } = require("./validation");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  makeBridge(size) {
    const bridge = new Bridge();
    this.bridge = bridge;
    if (checkBridgeSize(size)) {
      return InputView.readBridgeSize(this.makeBridge.bind(this));
    }

    this.bridge.setBridge(size);

    console.log(this.bridge.getBridge());
  }

  gameStart() {
    OutputView.printStart();

    InputView.readBridgeSize(this.makeBridge.bind(this));
  }

  game() {
    this.gameStart();
  }
}

module.exports = BridgeGame;
