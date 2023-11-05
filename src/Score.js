import { MissionUtils } from "@woowacourse/mission-utils";

const WINNING_MESSAGE= [
    '6개 일치 (2,000,000,000원)',
    '5개 일치, 보너스 볼 일치 (30,000,000원)',
    '5개 일치 (1,500,000원)',
    '4개 일치 (50,000원)',
    '3개 일치 (5,000원)',
]
function Test () {
    const prize = [1,2,3,4,5]
    const lottoRanks = [1,1,1,4,5,6,7,8]
    let newLottoRanks = [];

    prize.forEach((e,index) => {
        const count = lottoRanks.filter(i => i === e).length
        const mesage = WINNING_MESSAGE[index]
        newLottoRanks.push(`${mesage} - ${count}개`)
    })
    newLottoRanks.forEach((rank) => {
        MissionUtils.Console.pirnt(rank)
    })
    
}

Test()
