function solution(param1, param2) {
    const lengthOfparam1 = param1.length;
    const lengthOfParam2 = param2.length;

    // console.log({
    //     param1: param1,
    //     lengthOfparam1: lengthOfparam1,
    //     param2: param2,
    //     lengthOfParam2: lengthOfParam2,
    // });

    const startIndex = lengthOfparam1 - lengthOfParam2;
    let result = false;

    const extracted = param1.substring(startIndex);

    // console.log({ extracted: extracted, startIndex: startIndex });
    // console.log();

    if (extracted === param2) {
        result = true;
    }

    return result;
}

module.exports = solution;
