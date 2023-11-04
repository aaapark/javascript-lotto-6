import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    console.log(numbers)
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  printNumbers() {
    this.#numbers.sort((a, b) => a - b);
    MissionUtils.Console.print(`[${this.#numbers}]`)
  }

  
  // getRank(bonusNumber, winningNumbers) {
  //   console.log("겟랭크실행")
    // let count = 0;
  
    // this.#numbers.forEach((number) => {
    //   if (winningNumbers.includes(number)) count += 1;
    // });

    // if (count === 6) return PLACE.FIRST;

    // if (count === 5 && this.#numbers.includes(bonusNumber)) return PLACE.SECOND;

    // return 8 - count;

  }




export default Lotto;
