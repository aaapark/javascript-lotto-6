import { MissionUtils } from "@woowacourse/mission-utils";
import checkValue from './Validation/Puchase.js'
import App from './App.js'
import exitWithError from './Validation/Puchase.js'

  

export default class Lottos {
    constructor(money) {
        this.validation(money);
        this.count = money / 1000;
        this.list = [];
        this.print(money)
    }

    validation(money) {
        const errorMsg = new checkValue.money(money);

        if (errorMsg) {
            exitWithError(errorMsg);
        return;
        }
    }

    print(money) {
        console.log(money)
    }
}