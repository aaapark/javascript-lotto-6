import { MissionUtils } from "@woowacourse/mission-utils";
import Lottos from './Lottos.js'
import CheckMoney from './Validation/Puchase.js'


class App {
  constructor() {
    this.lottos = null;
  }

  async play() {
    this.userInputMoney();
  }

  async userInputMoney() {
    const userValue = await MissionUtils.Console.readLineAsync("구입금액을 입력해주세요.\n")
    this.lotts = new Lottos(userValue)
  }  
}
export default App;
