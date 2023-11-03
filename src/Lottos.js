import { MissionUtils } from "@woowacourse/mission-utils";
import CheckMoney from './Validation/Puchase.js'
// import App from './App.js'

  

export default class Lottos {
    constructor(money) {
        this.validation(money);
        this.count = money / 1000;
        this.list = [];
        this.print(money)
    }

    // validation(money) {
    //     try {
    //         CheckMoney.checkPurchase(money)
    //     } catch(e) {
    //     throw(e)
    //     } return true;

    // }


    validation(money) {
        CheckMoney.checkPurchase(money);
    }
    

    print(money) {
        console.log(money)
    }
}