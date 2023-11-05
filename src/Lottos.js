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
    
        return lottoRanks.filter((rank) => rank <= 5);
      }

    printRank(lottoRanks) {
        const prize = [1,2,3,4,5]
        let newLottoRanks = [];

        prize.forEach((e) => {
            let count = lottoRanks.filter(i => i === e).length
            newLottoRanks.push(count)
        })
        
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${newLottoRanks[4]}개`)
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${newLottoRanks[3]}개`,)
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${newLottoRanks[2]}개`,)
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${newLottoRanks[1]}개`,)
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${newLottoRanks[0]}개`,)
    }
}
