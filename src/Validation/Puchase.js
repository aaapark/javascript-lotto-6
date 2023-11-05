export default class CheckMoney {
    static checkPurchase(input) {
            this.checkNumber(input);
            this.checkPurchaseAmountOnUnitValueOf1000Won(input);
    }

    // 입력한 금액이 숫자여야 함.
    static checkNumber(input) {
        if (isNaN(Number(input))) {
            throw new Error ('[ERROR] 숫자만 입력 가능합니다.')
        } return true;
    } 

    // 입력한 금액이 1000원으로 나누었을때 정수로 떨여져야함
   static checkPurchaseAmountOnUnitValueOf1000Won(input) {
        if (! Number.isInteger(input/1000)) {
            throw new Error ('[ERROR] 1,000원 단위로 구매 가능합니다.')
        } return true;
    }
}
