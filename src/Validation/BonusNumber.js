

static checkNumber(input) {
    if (isNaN(Number(input))) {
        throw new Error ('[ERROR] 숫자만 입력 가능합니다.')
    } return true;
} 