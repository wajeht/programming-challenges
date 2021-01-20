// https://www.codewars.com/kata/513e08acc600c94f01000001
// my implementation
function rgb(r, g, b) {
    let R = r;
    let G = g;
    let B = b;

    console.log('Passed in value', r, g, b);

    if (r > 255 || g > 255 || b > 255) {
        R = 255;
        G = 255;
        B = 255;

        console.log('First', R, G, B);
    } else if (r <= 0 || g <= 0 || b <= 0) {
        R = 0;
        G = 0;
        B = 0;

        console.log('Second', R, G, B);
    } else {
        R = r;
        G = g;
        B = b;

        console.log('Third', R, G, B);
    }

    R = R.toString(16).toUpperCase();
    G = G.toString(16).toUpperCase();
    B = B.toString(16).toUpperCase();

    console.log('Final', R, G, B);
    console.log();

    let rgb = R + G + B;

    if (rgb === '000') {
        return '000000';
    } else {
        return rgb;
    }
}

console.log(rgb(0, 0, 0));

// -----------------------------------------------------------------------------------
// best practice
// rgb(255, 255, 255); // returns FFFFFF
// rgb(255, 255, 300); // returns FFFFFF
// rgb(0, 0, 0); // returns 000000
// rgb(148, 0, 211); // returns 9400D3

// // best practice
function rgb(r, g, b) {
    if (r < 0) r = '00';
    if (r >= 255) r = 'FF';
    r = r.toString(16).toUpperCase();
    if (r.length === 1) r = '0' + r;
    if (g < 0) g = '00';
    if (g >= 255) g = 'FF';
    g = g.toString(16).toUpperCase();
    if (g.length === 1) g = '0' + g;
    if (b < 0) b = '00';
    if (b >= 255) b = 'FF';
    b = b.toString(16).toUpperCase();
    if (b.length === 1) b = '0' + b;
    return r + g + b;
}
function rgb(r, g, b) {
    return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
    if (d < 0) {
        return '00';
    }
    if (d > 255) {
        return 'FF';
    }
    return ('0' + Number(d).toString(16)).slice(-2).toUpperCase();
}

// easier to understand
function rgb(r, g, b) {
    if (r < 0) r = '00';
    if (r >= 255) r = 'FF';
    r = r.toString(16).toUpperCase();
    if (r.length === 1) r = '0' + r;
    if (g < 0) g = '00';
    if (g >= 255) g = 'FF';
    g = g.toString(16).toUpperCase();
    if (g.length === 1) g = '0' + g;
    if (b < 0) b = '00';
    if (b >= 255) b = 'FF';
    b = b.toString(16).toUpperCase();
    if (b.length === 1) b = '0' + b;
    return r + g + b;
}
