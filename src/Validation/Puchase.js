
export default class checkValue {

    money(money) {
        if (isNaN(money)) return { errorMsg: createErrorMsg.type(money) };
        if (! Number.isInteger(money/1000))  return {errorMsg: createErrorMsg.integer(money)}
        // return { errorMsg: undefined };
        return true;
    } 

    
    createErrorMsg = {
    type: (name) => {
      return `[ERROR] ${name}: 숫자만 입력할 수 있습니다.`;
    },
  
    integer: (name) => {
        return `[ERROR] ${name}: 1,000원 단위로 입력할 수 있습니다.`;
    },

    // range: (name) => {
    //   return `[ERROR] ${name}: ${LOTTO.MIN_NUMBER}~${LOTTO.MAX_NUMBER} 사이의 값만 입력할 수 있습니다.`;
    // },

    // length: (name) => {
    //     return `[ERROR] ${name}: 중복되지 않은 ${LOTTO.NUMBERS_COUNT}개의 숫자로 이루어져야 합니다.`;
    //   },
    };
}
