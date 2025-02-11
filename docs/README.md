# 로또 게임 기능 구현하기
### 체크사항
- 마크다운 이용해서 꾸미기
- 구현해야할 기능 목록을 정리하기
- 예외적인 상황도 기능 목록도 정리 - 기능을 구현하면서 계속 추가하기
- 기능목록 업데이트 
- 커밋메시지 작성시 태그 사용하기
    - feat: 새로운 기능 추가
    - fix: 버그 수정
    - docs: 문서 수정
    - refactor: 코드 리팩토링
    - test: 테스트코드 추가

---
## 게임 흐름

1. 로또 구입 금액 입력
- 구입금액 입력 문구 출력
- 구매 금액 유효성 검사
    - 금액은 숫자만 입력 가능
    - 1,000원 단위로 나누어 떨어지지 않으면 예외 처리
    - "[ERROR]"로 시작하는 에러 메시지를 출력
    - 에러 메시지 출력 후 해당 부분부터 입력 다시 받음

2. 구매한 개수만큼 로또 번호 출력
3. 당첨번호 입력
4. 보너스번호 입력
5. 당첨내역 통계 출력
6. 총 수익률 출력

---
## 게임 규칙

- 로또 번호의 숫자 범위는 1~45까지이다.
- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
    - 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
    - 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
    - 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다. 
```
예시) [ERROR] 숫자가 잘못된 형식입니다.
```

---
## 기능 목록

### 1. 로또 구입 금액 입력
- 구입금액 입력 문구 출력
- 구매 금액 유효성 검사
    - 금액은 숫자만 입력 가능
    - 1,000원 단위로 나누어 떨어지지 않으면 예외 처리
    - "[ERROR]"로 시작하는 에러 메시지를 출력
    - 에러 메시지 출력 후 해당 부분부터 입력 다시 받음

### 2. 구매한 개수만큼 로또 번호 출력
- 발생한 로또 개수 출력 ('n개를 구매했습니다.')
    - 입력한 '구매금액'을 1000으로 나눴을때 나온 몫
- 발행한 로또 번호 출력
    - 배열 형태
    - 1~45 사이의 숫자 중 중복되지 않은 6개의 숫자
    - 오름차순으로 정렬

### 3. 당첨번호 입력
- 당첨번호 입력 문구 출력
    - 번호는 쉼표(,)를 기준으로 구분
- 당첨번호 유효성 겁사
    - 숫자만 입력 가능
    - 1~45 사이의 숫자 중 6개 입력 가능
    - 6개의 숫자는 중복 불가

### 4. 보너스번호 입력
- 보너스번호 입력 문구 출력
- 보너스번호 유효성 검사
    - 숫자만 입력 가능
    - 1~45 숫자 중 1개 입력 가능
    - 이미 입력한 '당첨번호'의 숫자와 중복 불가

### 5. 당첨내역 통계 출력
- 구매한 로또번호(배열)와 입력한 당첨번호, 보너스번호와 비교하기
    - 랜덤으로 얻은 로또번호 1개씩 '당첨번호, 보너스번호' 와의 일치하는 번호 개수 확인
    - 일치하는 번호가 3개 이상인 경우에 한하여 카운트 하기
- 일치하는 숫자 별로 산정된 등수 개수 카운트하기 
    - 1등: 6개 일치
    - 2등: 5개 일치 + 보너스번호 일치
    - 3등: 5개 일치
    - 4등: 4개 일치
    - 5등: 3개 일치
- 당첨내역 출력
    - 등수 문구와 카운트한 등수 개수

### 6. 총 수익률 출력
- 당첨 금액 계산
    - '등수에 따른 상금' * '당첨된 등수 개수'
- 구매한 금액과 비교하여 퍼센트지로 출력
    - ( '총 당첨 금액' / '구매 금액' ) * 100

### 테스트코드 작성
- 유효성 검사
    - 보너스번호 입력 (숫자, 당첨번호 포함 여부, 입력범위 포함)
    - 당첨번호 입력 (숫자, 입력범위 포함, 종북 여부, 입력개수)
    - 구매금앱 입력 (숫자, 1000원 단위 구매)
