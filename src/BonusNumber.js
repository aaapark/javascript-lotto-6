import CheckBonusNumber from './Validation/BonusNumber.js'
import Lotto from './Lotto.js';
import Score from './Score.js'

export default class Bonus {
    constructor(bonusNumber, winningNumbers){
        this.validate(bonusNumber, winningNumbers)
        this.value = bonusNumber;
    }
   
    validate(bonus, win) {
        CheckBonusNumber.checkBonunsNumber(bonus, win)
    }

}


