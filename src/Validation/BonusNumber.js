
export default class CheckBonusNumber {
    static checkBonunsNumber(number,winningNumber) {
        this.checkNumber(number)
        this.checkNumberLength(number)
        this.checkBeIncluded(number,winningNumber)
        this.checkNumberRange(number)
    } 

    static checkNumber(input) {
        if (isNaN(Number(input))) {
            throw new Error ('[ERROR] 숫자만 입력 가능합니다.')
        } return true;
    }

    static checkNumberLength(input) {
        if (input.length !== 1) {
          throw new Error("[ERROR] 보너스 번호는 1개만 입력 가능합니다.");
        }
      }

    // 왜 안될까? 
    static checkBeIncluded(number,winningNumber) {
        console.log(winningNumber)
        if (winningNumber.includes(number)) {
            throw new Error ('[ERROR] 이미 당첨번호로 입력하신 번호입니다.')
        }
    }

    static checkNumberRange(input){
        if (input < 1 || input > 45) {
            throw new Error ('[ERROR] 1에서 45 사이의 숫자만 입력 가능합니다.')
        } return true;
    }
    
    
}
