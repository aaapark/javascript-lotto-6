import { MissionUtils } from "@woowacourse/mission-utils";

function Test () {
    const prize = [1,2,3,4,5]
    const lottoRanks = [1,1,1,4,5,6,7,8]
    let newLottoRanks = [];
    prize.forEach((e) => {
        let count = lottoRanks.filter(i => i === e).length
        newLottoRanks.push(count)
    })

    MissionUtils.Console.print(`3개 일치 (5,000원) - ${newLottoRanks[4]}개`)
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${newLottoRanks[3]}개`,)
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${newLottoRanks[2]}개`,)
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${newLottoRanks[1]}개`,)
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${newLottoRanks[0]}개`,)
}

Test()
