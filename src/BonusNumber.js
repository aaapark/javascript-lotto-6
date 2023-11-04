import CheckBonusNumber from './Validation/BonusNumber.js'
import Lotto from './Lotto.js';

export default class Bonus {
    constructor(bonusNumber, winningNumbers){
        this.validate(bonusNumber, winningNumbers)
        this.value = bonusNumber;
    }
   
    validate(bonus, win) {
        CheckBonusNumber.checkBonunsNumber(bonus, win)
    }

    // checkTheScoreUsingNumber(win,bonus) {
    //     console.log(bonus)
    //     const lotto = new Lotto()
    //     lotto.getRank(win,bonus)
    // }


}


