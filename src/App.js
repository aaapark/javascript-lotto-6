import { MissionUtils } from "@woowacourse/mission-utils";
import Lottos from './Lottos.js'
import Winning from  './WinningNumber.js'
import Bonus from './BonusNumber.js'
// import {WINNING_DETAIL} from './Const.js'

class App {
  constructor() {
    this.lottos = null;
    this.lotto = null
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
    try {
      const inputBonusNumber = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
      let beNumberedInputBonunsNumber = Number(inputBonusNumber)
      this.bonus = new Bonus(beNumberedInputBonunsNumber,this.winning.value)
    } catch(e) {
      MissionUtils.Console.print(e.message)
      await this.bonusNumberInput()
    } this.printWinningState(this.winning.value, this.bonus.value)
  } 

  printWinningState(win, bonus) {
    MissionUtils.Console.print('\n당첨 통계\n---')
    const lottoRanks = this.lottos.getRanks(win, bonus) 
    this.lottos.printRank(lottoRanks)

  }
}
export default App;



    