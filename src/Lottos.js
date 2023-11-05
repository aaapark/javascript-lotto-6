import { MissionUtils } from "@woowacourse/mission-utils";
import CheckMoney from './Validation/Puchase.js'
import Lotto from './Lotto.js'

  
export default class Lottos {
    constructor(money) {
        this.validation(money);
        this.count = money / 1000;
        this.list = [];
        this.createLottoNumberArray();
    }

    validation(money) {
        CheckMoney.checkPurchase(money)
    }

    createLottoNumberArray() {
        for (let i=0 ; i < this.count ; i++) {
            const newLottoNumber = this.createLottoNumber()
            this.list.push(newLottoNumber)
        }
    }

    createLottoNumber() {
        let lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        return new Lotto(lottoNumbers)
    } 
    
    printCount() {
        MissionUtils.Console.print(`\n${this.count}개를 구매했습니다.`)
    }

    printList() {
        this.list.forEach((lotto) => {
            lotto.printNumbers();
        });
    }


    getRanks(winningNumbers, bonusNumber) {
        let lottoRanks = [];
    
        this.list.forEach((lotto) => {
          lottoRanks.push(lotto.getRank(winningNumbers, bonusNumber));
        });
    
        return lottoRanks.filter((rank) => rank <= PLACE.LAST);
      }
    
    
}
