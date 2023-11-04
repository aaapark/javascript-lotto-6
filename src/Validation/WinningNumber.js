export default class CheckNumber {
    
    static checkWinningNumber(input) {
            this.checkWinningNumberType(input);
            this.checkWinningNumberLength(input);
            this.checkWinningNumberRange(input);
            this.checkWinningNumberDuplication(input);
    }

    static checkWinningNumberType(input) {
        if (input.some((i)=> isNaN(Number(i)))) {
            throw new Error ('[ERROR] 숫자만 입력 가능합니다.')
        } return true;
    } 

    static checkWinningNumberLength(input) {
        if (input.length !== 6) {
          throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
        }
      }

    static checkWinningNumberRange(input){
        if (input.some((i)=> i < 1 || i > 45)) {
            throw new Error ('[ERROR] 1에서 45 사이의 숫자만 입력 가능합니다.')
        } return true;
    }

    static checkWinningNumberDuplication(input){
        const set = new Set(input)
        if(set.size !== input.length) {
            throw new Error ('[ERROR] 중복된 숫자가 있습니다.')
        }
    }
}