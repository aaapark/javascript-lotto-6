import { MissionUtils } from "@woowacourse/mission-utils";
// import Lotto from "./Lotto.js";
import Validation_WinningNumber from './Validation/WinningNumber.js'
import Validation_Purchase from './Validation/Puchase.js'


export default class Input {
   


    async userInputLottoNumber() {
        const inputLottoNumber = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요. 번호는 쉼표(,)로 구분합니다.\n");
        this.checkLottoNumber(inputLottoNumber)

    }

    async checkLottoNumber(userInput) {
        let userLottoNumber = userInput.split(',');
        let newUserLottoNumber = userLottoNumber.map(Number)
        try {
            Validation_WinningNumber.checkWinningNumber(newUserLottoNumber)
        } catch(e) {
          throw(e)
        } MissionUtils.Console.print(newUserLottoNumber)
    }

    
}
