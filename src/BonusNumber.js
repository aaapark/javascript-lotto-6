import CheckBonusNumber from './Validation/BonusNumber.js'

export default class Bonus {
    constructor(bonusNumber, winningNumbers){
        // this.test(bonusNumber, winningNumbers)
        this.validate(bonusNumber, winningNumbers)
    }
    // test(bonusNumber, winningNumbers) {
    //     let newBonusNumber = Number(bonusNumber)
    //     console.log(newBonusNumber)
    //     console.log(typeof(newBonusNumber))
    // }

    validate(bonus, win) {
        CheckBonusNumber.checkBonunsNumber(bonus, win)
    }
}