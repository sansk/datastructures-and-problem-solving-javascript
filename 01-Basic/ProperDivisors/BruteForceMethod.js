const properDivisors = n => {
    let divisors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
console.time("Time-Taken:");
console.log(properDivisors(144));
console.timeEnd("Time-Taken:");