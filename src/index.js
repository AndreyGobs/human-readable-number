module.exports = function toReadable (number) {
     
    let text = '';
    let arr = [];

    const numbersUpTo19 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }


    const dozens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
   


    if ( 0 <= number < 20) {

        for (let key in numbersUpTo19) {
            if (key == number) {
                text = numbersUpTo19[key];
            };
        };

    };
    
    if ( 20 <= number && number < 100) {
        arr = String(number).split('');
        
        let dozen = dozens[arr[0]];
        let unit = numbersUpTo19[arr[1]];

        if (arr[1] == 0) {
            text = dozen;
        } else {
            text = dozen + ' ' + unit;
        }


    };
    
    if (number >= 100) {

        arr = String(number).split('');
        let hundred = numbersUpTo19[arr[0]]
        let dozen = dozens[arr[1]];
        let unit = numbersUpTo19[arr[2]];

        text = hundred + ' ' + 'hundred' + ' ' + dozen + ' ' + unit;


        if (arr[2] == 0) {
            text = hundred + ' ' + 'hundred' + ' ' + dozen;
        }


        if (arr[1] == 0) {

            text = hundred + ' ' + 'hundred' + ' ' + unit;

            if (arr[2] == 0) {
                text = hundred + ' ' + 'hundred';
            }

        } 
        

        if (arr[1] == 1) {
            let dozenUnit = arr[1] + arr[2];
            for (let key in numbersUpTo19) {
                if (key == dozenUnit) {
                    dozenUnit = numbersUpTo19[key];
                };
            };

            text = hundred + ' ' + 'hundred' + ' ' + dozenUnit;
        }

    }

    return text;
}
