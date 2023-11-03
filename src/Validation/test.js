
const message {

}


const checkVaule {

    money(money) {
        if (isNaN(money)) return {errorMsg}
        if (isNaN(money)) return { errorMsg: createErrorMsg.type(PURCHASE_MONEY) };

    }

    }


    




    // 입력한 금액이 1000원으로 나누었을때 정수로 떨여져야함
   static checkPurchaseAmountOnUnitValueOf1000Won(input) {
        if (! Number.isInteger(input/1000)) {
            throw new Error ('에러')
        } return true;
    }

    static returnInput () {
        console.log('리턴')
    }
