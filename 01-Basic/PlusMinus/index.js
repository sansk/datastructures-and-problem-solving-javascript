import { readFileSync } from 'fs';

let data = '';

try {
    data = readFileSync('./01-Basic/PlusMinus/sampleInput.txt', 'utf8');
    main();
} catch (err) {
    console.error(err);
}

function main() {
    const values = data.split('\r\n');
    let arr = values.pop().split(' ').map(Number);
    
    plusMinus(arr);
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
function plusMinus(arr) {
    // Write your code here
    let pos = 0,
        neg = 0,
        zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) === 1) pos += 1;
        if (Math.sign(arr[i]) === -1) neg += 1;
        if (Math.sign(arr[i]) === 0) zero += 1;
    }
    console.log((pos.toFixed(6) / (arr.length).toFixed(6)).toFixed(6));
    console.log((neg.toFixed(6) / (arr.length).toFixed(6)).toFixed(6));
    console.log((zero.toFixed(6) / (arr.length).toFixed(6)).toFixed(6));
}