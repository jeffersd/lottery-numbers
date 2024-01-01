// numbers:
// (no duplicates)
//
// powerball
// five: 1 - 69
// one: 1 - 26
//
// mega millions
// five: 1 - 70
// one: 1 - 25
//
// cash 5
// five: 1 - 43

function getNumber (maxNumber) {
    const baseNumber = Math.ceil((Math.random() * 100));

    return baseNumber % (maxNumber + 1);

}

function getPowerballNumbers () {
    const numbers = [];

    console.log('powerball');
    for (let i = 0; i < 5; i++) {
        console.log(getNumber(69));
    }
    console.log(getNumber(26));

    return numbers;
}

function getMegaMillionsNumbers () {
    const numbers = [];

    console.log('mega millions');
    for (let i = 0; i < 5; i++) {
        console.log(getNumber(70));
    }
    console.log(getNumber(25));

    return numbers;
}

function getCash5Numbers (runs) {
    const numbers = [];

    console.log('cash 5');
    for (let i = 0; i < 5; i++) {
        console.log(getNumber(43));
    }

    return numbers;
}


function main (lotteryNameArgument, runsArgument) {
    const errorMessage = 'error: need to run this script with an argument: <p|m|c>';

    let runs = parseInt(runsArgument);

    if (!lotteryNameArgument) {
        console.error(errorMessage);
        process.exit(1);
    }

    if (!runs) {
        runs = 1;
    }

    switch (lotteryNameArgument) {
        case 'p':
        case 'P':
        case 'powerball':
        case 'PowerBall':
            for (let i = 0; i < runs; i++) {
                getPowerballNumbers();
            }
            break;
        case 'm':
        case 'M':
        case 'megamillions':
        case 'MegaMillions':
            for (let i = 0; i < runs; i++) {
                getMegaMillionsNumbers();
            }
            break;
        case 'c':
        case 'C':
        case 'cash5':
        case 'Cash5':
            for (let i = 0; i < runs; i++) {
                getCash5Numbers();
            }
            break;
        default:
            console.error(errorMessage);
            process.exit(1);
    }
}

main(process.argv[2], process.argv[3]);
