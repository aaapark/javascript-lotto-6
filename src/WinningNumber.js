import CheckNumber from "./Validation/WinningNumber.js";

export default class Winning {
    constructor(number) {
        this.validate(number)
        this.value = number
    }

    validate(number) {
        CheckNumber.checkWinningNumber(number)
    }
}
