function factorialTest(value) {
    if(value <= 0) {
        return 1;
    }
    let result = 1;
    for (let i = value; i >= 1; i--) {
        result *= i;
    }
    return result;
}

function factorialRecursive2(value2) {
    if(value2 <= 0) {
        return 1 ;
    }
        return value2 * factorialRecursive2(value2 - 1);

}

function factorialRecursive(value) {
    if(value <= 0) {
        return 1;
    }
    return value * factorialRecursive(value - 1);
}

function factorialTailRecursive(total, value) {
    if(value <= 0) {
        return total;
    }else {
        return factorialTailRecursive(total * value, value - 1);
    }
}

console.log(factorialTest(4));
console.log(factorialRecursive(4));
console.log(factorialTailRecursive(1,3));
console.log(factorialRecursive2(4))