export function add(numbersStr) {

    if (numbersStr.includes(',\n'))
        throw new Error('Invalid input')

    if (numbersStr.length === 0) return 0
    // if (! isNaN(numbersStr)) return Number(numbersStr)

    let delimiters = getDelimiters(numbersStr)
    numbersStr = deleteDelimiter(numbersStr)

    delimiters.forEach(delimiter => {
        numbersStr = numbersStr.replaceAll(delimiter, ',');
    });

    let numbers = numbersStr.replaceAll('\n', ',')
                    .split(',')
                    .map(Number)
                    .filter(elem => elem <= 1000)

    let negatives = numbers.filter(elem => elem < 0);
    if (negatives.length > 0) 
        throw Error(`Negatives not allowed. [${negatives.join(',')}]`);

    return numbers.reduce((sum, current) => sum + current, 0);
}


function hasDelimiter(numbersStr) {
    return numbersStr.includes('//')
}

function getDelimiters(numbersStr) {
    if (hasDelimiter(numbersStr)) {
        if (numbersStr.includes('[')) 
            return numbersStr.split(/\[(.*?)\]/) // Get delimiters between square brackets
                    .filter((elem, key) => (key % 2 !== 0));
        else 
            return [numbersStr.charAt(2)];
    }

    return [','];
}



function deleteDelimiter(str) {
    if (hasDelimiter(str))
        return str.split('\n', 2)[1]

    return str;
}


