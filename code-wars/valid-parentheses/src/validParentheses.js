function validParentheses(param) {
    const stack = [];

    //if lengt is not even
    if (stack.length % 2 != 0) {
        return false;
    }

    // add opening parenthess into stack
    for (let i = 0; i < param.length; i++) {
        let element = param[i];

        if (element === '(') {
            stack.push(element);
            // console.log({ 'Pushed->': stack, index: i });
        } else if (element === ')') {
            // ") ( ( ) ) )"
            //  0 1 2 3 4 5

            // only push ( (
            // and we cna't pop 3 times, because there is only 2 open parenthsis
            // we so gotta return flse if the stack becom emepty

            if (stack.length === 0) {
                return false;
            } else {
                stack.pop();
                // console.log({
                //     'Popped->': stack,
                //     index: i,
                //     length: stack.length,
                //     'Return -> ': stack.length === 0,
                // });
                // console.log();
            }
        }
    }

    return stack.length === 0;
}

module.exports = validParentheses;
