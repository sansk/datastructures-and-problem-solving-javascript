const properDivisors = n => {
    let divisors = [1];

    // Condition can either be `i <= sqrt(n)` OR `i * i <= n`. Both are equivalent.
    // if square of `i` = `n`, then always square root of `n` = `i`
    for (let i = 2; i * i <= n; i++) {
        divisors.pop();
        if (n % i === 0) {
            divisors.push(i, n / i);
            if (i === Math.sqrt(n)) { // Condition can either be `i === sqrt(n)` OR `i * i === n`. Both are equivalent.
                divisors.pop();
            }
        }
    }
    return divisors.sort(function (a, b) { return a - b; });
}

console.time("Time-Taken:");
console.log(properDivisors(144));
console.timeEnd("Time-Taken:");