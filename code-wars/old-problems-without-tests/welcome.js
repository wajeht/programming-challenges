// https://www.codewars.com/kata/577ff15ad648a14b780000e7/solutions/javascript
// my implementation

function database() {
    return {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso',
    };
}

function greet(language) {
    let reuslt = database()[language];
    console.log('language ->', language);

    if (
        language === 'IP_ADDRESS_INVALID' ||
        language === 'IP_ADDRESS_NOT_FOUND' ||
        language === 'IP_ADDRESS_REQUIRED' ||
        language === undefined
    ) {
        return `Welcome`;
    } else {
        return reuslt;
    }
}

console.log(greet('english'));

// best pratice
// ---------------------------------------------------------------------------------
function greet(lang) {
    return langs[lang] || langs['english'];
}

var langs = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
};
