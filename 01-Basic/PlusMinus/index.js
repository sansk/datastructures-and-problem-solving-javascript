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

function main() {
    //const arr = .split(' ').map(arrTemp => parseInt(arrTemp, 10));
    
    plusMinus(arr);
}
