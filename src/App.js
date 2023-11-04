import { MissionUtils } from "@woowacourse/mission-utils";
import Lottos from './Lottos.js'
import Winning from  './WinningNumber.js'
import Bonus from './BonusNumber.js'

class App {
  constructor() {
    this.lottos = null;
  }

  async play() {
    await this.userInputMoney();
  }

  async userInputMoney() {
    try {
      const userValue = await MissionUtils.Console.readLineAsync("구입금액을 입력해주세요.\n")
      this.lottos = new Lottos(userValue)
    } catch(e) {
      MissionUtils.Console.print(e.message)
      await this.userInputMoney()
    } 
    this.lottos.printCount()
    this.lottos.printList()
    await this.userInputLottoNumber()
  } 

  async userInputLottoNumber() {
    try {
      const inputLottoNumber = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요. 번호는 쉼표(,)로 구분합니다.\n");
      let userLottoNumber = inputLottoNumber.split(',');
      let newUserLottoNumber = userLottoNumber.map(Number)
      this.winning = new Winning(newUserLottoNumber)
    } catch(e) {
      MissionUtils.Console.print(e.message)
      await this.userInputLottoNumber()
    }
    await this.bonusNumberInput()
  }

  async bonusNumberInput() {
    const inputBonusNumber = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    this.bonus = new Bonus(inputBonusNumber,this.winning.value)
    console.log(this.winning.value)
}
// winning넘버 어케 받지

}
export default App;



    