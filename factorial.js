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

 function factorialRecursive(value) {
    if(value <= 0) {
        return 1;
    }
 }