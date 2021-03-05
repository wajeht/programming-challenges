function dup(param) {
    const array = [];
    let word = '';
    // ["abracadabra","allottee","assessee"]
    for (let i = 0; i < param.length; i++) {
        const element = param[i];

        // "abracadabra"
        for (let j = 0; j < element.length; j++) {
            // if adjacnet elemnt aren't same, make append word
            if (element[j] != element[j + 1]) {
                word += element[j];
            }
        }
        // console.log({ word: word });
        array.push(word); // then push it into array
        word = ''; // reset word for next iteration
    }

    return array;
}

module.exports = dup;
