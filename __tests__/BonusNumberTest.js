import Bonus from "../src/BonusNumber.js";

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus('bonus');
    }).toThrow("[ERROR]");
  });
//
//   test("보너스 번호가 .", () => {
//     expect(() => {
//       new Bonus('bonus');
//     }).toThrow("[ERROR]");
//   });

  test("보너스 번호가 1-45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(98);
    }).toThrow("[ERROR]");
  });  
});
