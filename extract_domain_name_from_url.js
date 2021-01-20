// https://www.codewars.com/kata/514a024011ea4fb54200004b/
// my implementation

function domainName(url) {
    let domain = '';
    const http = 'http';
    const www = 'www';

    let startPosition = 0;

    // if http
    if (url.includes(http)) {
        if (url.includes(www)) {
            return url.split('.')[1]; // http://www.px83chkpxruf97qorm78o0efyg.tv/error
        } else {
            for (let i = 0; i < url.length; i++) {
                startPosition++;
                domain = url.substring(startPosition + 1); // extract domain from that positoin

                if (url[i] === '/' && url[i + 1] === '/') {
                    break;
                }
            }

            return domain.split('.')[0];
        }
    }

    // if no http
    else {
        // if www
        if (url.includes(www)) {
            return url.split('.')[1]; // www.px83chkpxruf97qorm78o0efyg.tv/error
        } else {
            return url.split('.')[0]; // px83chkpxruf97qorm78o0efyg.tv/error
        }
    }
}

console.log(domainName('http://px83chkpxruf97qorm78o0efyg.tv/error'));

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// Test.assertEquals(domainName('http://google.com'), 'google');
// Test.assertEquals(domainName('http://google.co.jp'), 'google');
// Test.assertEquals(domainName('www.xakep.ru'), 'xakep');
// Test.assertEquals(domainName('https://youtube.com'), 'youtube');

// better solution
function domainName(url) {
    url = url.replace('https://', '');
    url = url.replace('http://', '');
    url = url.replace('www.', '');
    return url.split('.')[0];
}

var person = { fname: 'John', lname: 'Doe', age: 25 };
var text = '';
var x;
for (x in person) {
    console.log(typeof x);
    console.log(typeof person[x]);
}
function domainName(url) {
    let domain = '';
    const http = 'http';
    const www = 'www';

    let startPosition = 0;

    // if http
    if (url.includes(http)) {
        if (url.includes(www)) {
            return url.split('.')[1]; // http://www.px83chkpxruf97qorm78o0efyg.tv/error
        } else {
            for (let i = 0; i < url.length; i++) {
                startPosition++;
                domain = url.substring(startPosition + 1); // extract domain from that positoin

                if (url[i] === '/' && url[i + 1] === '/') {
                    break;
                }
            }

            return domain.split('.')[0];
        }
    }

    // if no http
    else {
        // if www
        if (url.includes(www)) {
            return url.split('.')[1]; // www.px83chkpxruf97qorm78o0efyg.tv/error
        } else {
            return url.split('.')[0]; // px83chkpxruf97qorm78o0efyg.tv/error
        }
    }
}

console.log(domainName('http://px83chkpxruf97qorm78o0efyg.tv/error'));

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// Test.assertEquals(domainName('http://google.com'), 'google');
// Test.assertEquals(domainName('http://google.co.jp'), 'google');
// Test.assertEquals(domainName('www.xakep.ru'), 'xakep');
// Test.assertEquals(domainName('https://youtube.com'), 'youtube');

// -----------------------------------------------------------------------------------
// better solution
function domainName(url) {
    url = url.replace('https://', '');
    url = url.replace('http://', '');
    url = url.replace('www.', '');
    return url.split('.')[0];
}

var person = { fname: 'John', lname: 'Doe', age: 25 };
var text = '';
var x;
for (x in person) {
    console.log(typeof x);
    console.log(typeof person[x]);
}

// best practice
function domainName(url) {
    url = url.replace('https://', '');
    url = url.replace('http://', '');
    url = url.replace('www.', '');
    return url.split('.')[0];
}
