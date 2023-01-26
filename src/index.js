module.exports = function toReadable(number) {

    let units = {"0":"zero", "1":"one","2":"two", "3":"three", "4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten"};
    let teenNumbers = {"10": "ten", "11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen"};
    let decimas = {"2":"twenty","3":"thirty","4":"forty","5":"fifty","6":"sixty","7":"seventy","8":"eighty","9":"ninety"};

    const stringNumber = [...number.toString()].reverse().join('');
    let result = '';
    
    if (number >= 0 && number <= 999) {
        for (let ind in stringNumber) {
            let symbol = stringNumber[ind];
            // non-zero numbers
            if (symbol !== '0' && ind == 0) {
                // avoid teen numbers
                if (stringNumber.length == 1 || (stringNumber.length > 1 && stringNumber[1] !== '1')) {
                result = units[symbol] + " " + result;
                }
            }
            // zero case
            if (symbol === "0" && stringNumber.length === 1) {
              result = units['0'] + ' ' + result;
            } 
            // handling teen numbers
            if (ind == 1 && symbol === '1') {
                let teenNumber = stringNumber.length > 2 ? stringNumber.slice(0, 2) : stringNumber;
                teenNumber = [...teenNumber].reverse().join('');
                result = teenNumbers[teenNumber] + ' ' + result;
            }
            
            // handling decimas 
            if (ind == 1 && !["0", "1"].includes(symbol)) {
              result = decimas[symbol] + " " + result;
            }

            // handling hundreds
            if (ind == 2) {
                result = units[symbol] + " hundred " + result;
            }
        }
    }
    return result.trim();
};




