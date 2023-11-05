import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  printNumbers() {
    this.#numbers.sort((a, b) => a - b);
    MissionUtils.Console.print(`[${this.#numbers}]`)
  }

  getRank(winningNumbers, bonusNumber) {
    let count = 0;
  
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) count += 1;
    });

    if (count === 6) return 1;

    if (count === 5 && this.#numbers.includes(bonusNumber)) return 2;

    return 8 - count;

  }
}

export default Lotto;
