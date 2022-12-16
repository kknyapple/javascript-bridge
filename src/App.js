const BrideGame = require("./BridgeGame");

class App {
  play() {
    const brideGame = new BrideGame();

    brideGame.game();
  }
}

const app = new App();
app.play();

module.exports = App;
