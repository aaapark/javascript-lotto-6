import { MissionUtils } from "@woowacourse/mission-utils";


export default function exitWithError (errorMsg) {
    MissionUtils.Console.close();
    throw new Error(errorMsg);
};

