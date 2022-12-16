const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Bridge = require("./Bridge");
const {
  checkBridgeSize,
  checkMovement,
  checkRestart,
} = require("./validation");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge;
    this.round = 0;
    this.crossing = true;
    this.success = false;
    this.attempt = 1;
    this.upResult = [];
    this.downResult = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  upMovement(bridgeUD, round) {
    if (bridgeUD[round] === "U") {
      this.upResult[round] = " O ";
      this.downResult[round] = "   ";
    } else {
      this.upResult[round] = " X ";
      this.downResult[round] = "   ";
      this.crossing = false;
    }
  }

  downMovement(bridgeUD, round) {
    if (bridgeUD[round] === "D") {
      this.upResult[round] = "   ";
      this.downResult[round] = " O ";
    } else {
      this.upResult[round] = "   ";
      this.downResult[round] = " X ";
      this.crossing = false;
    }
  }

  isCrossing() {
    if (this.crossing) {
      if (this.success) this.doQuit();
      else InputView.readMoving(this.move.bind(this));
    } else InputView.readGameCommand(this.chooseRetry.bind(this));
  }

  doRestart(restart) {
    this.retry(restart);
    InputView.readMoving(this.move.bind(this));
  }

  doQuit() {
    OutputView.printResult(
      this.downResult,
      this.upResult,
      this.success,
      this.attempt
    );
  }

  chooseRetry(restart) {
    if (checkRestart(restart)) {
      InputView.readGameCommand(this.chooseRetry.bind(this));
    }

    if (restart === "R") this.doRestart(restart);
    if (restart === "Q") this.doQuit();
  }

  isSuccess(bridgeUD) {
    if (bridgeUD.length == this.round && this.crossing == true) {
      this.success = true;
    }
  }

  move(movement) {
    if (checkMovement(movement)) {
      InputView.readMoving(this.move.bind(this));
    }

    const bridgeUD = this.bridge.getBridge();
    let round = this.round;

    if (movement === "U") this.upMovement(bridgeUD, round);
    if (movement === "D") this.downMovement(bridgeUD, round);

    this.round++;
    this.isSuccess(bridgeUD);

    OutputView.printMap(this.upResult, this.downResult);

    this.isCrossing();
  }

  reset() {
    this.round = 0;
    this.crossing = true;
    this.upResult = [];
    this.downResult = [];
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(restart) {
    if (restart === "R") {
      this.reset();
      this.attempt++;
    }
  }

  makeBridge(size) {
    const bridge = new Bridge();
    this.bridge = bridge;
    if (checkBridgeSize(size)) {
      return InputView.readBridgeSize(this.makeBridge.bind(this));
    }

    this.bridge.setBridge(size);
    console.log(this.bridge.getBridge());

    InputView.readMoving(this.move.bind(this));
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
