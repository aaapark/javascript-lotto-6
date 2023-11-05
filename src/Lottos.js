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
            
        const WINNING_MESSAGE= [
            '6개 일치 (2,000,000,000원)',
            '5개 일치, 보너스 볼 일치 (30,000,000원)',
            '5개 일치 (1,500,000원)',
            '4개 일치 (50,000원)',
            '3개 일치 (5,000원)',
        ]

        const prize = [1,2,3,4,5]
        let newLottoRanks = [];
        let calculateArray = []

        prize.forEach((e,index) => {
            const count = lottoRanks.filter(i => i === e).length
            const mesage = WINNING_MESSAGE[index]
            calculateArray.push(`${count}`)
            newLottoRanks.push(`${mesage} - ${count}개`)
        })

        newLottoRanks.forEach((rank) => {
            MissionUtils.Console.print(rank)
        })
        this.printRateOfReturn(calculateArray)
    }

    printRateOfReturn(count) {
        let rank = count.map(Number)
        const prize = [
            2000000000,
            30000000,
            1500000,
            50000,
            5000
        ]
    
        const calculateResults = rank.map((rank, index) => {
            return rank * prize[index]
        })
        // console.log(calculateResults)
        const sumCalculateResults = calculateResults.reduce((a,b) => (a+b))
        const purchaseMoney = this.count*1000
        const rateResult = (sumCalculateResults / purchaseMoney * 100).toFixed(1)
        MissionUtils.Console.print(`총 수익률은 ${rateResult}%입니다.`)        
    }
}     

