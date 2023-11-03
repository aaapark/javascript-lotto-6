import { MissionUtils } from "@woowacourse/mission-utils";
import CheckMoney from './Validation/Puchase.js'
import App from './App.js'

  

export default class Lottos {
    constructor(money) {
        this.validation(money);
        this.count = money / 1000;
        this.list = [];
        this.print(money)
    }

    validation(money) {
        const app = new App()
        try {
            CheckMoney.checkPurchase(money)
        } catch(e) {
        // throw(e)
        MissionUtils.Console.print(e)
        app.userInputMoney()
        } return true;

    }

    print(money) {
        console.log(money)
    }
}