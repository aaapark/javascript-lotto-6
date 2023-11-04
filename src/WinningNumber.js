import CheckNumber from "./Validation/WinningNumber.js";

export default class Winning {
    constructor(number) {
        this.validate(number)
        this.value = number
    }
    // winNumber(userInput) {
    //     let userLottoNumber = userInput.split(',');
    //     let newUserLottoNumber = userLottoNumber.map(Number)
    //     this.validate(newUserLottoNumber)

    // }

    validate(number) {
        CheckNumber.checkWinningNumber(number)
    }
}
