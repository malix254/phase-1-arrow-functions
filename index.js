// Function expression called divide
const divide = function() {
    return 2000 / 100;
};

// Arrow function called square
const square = (num) => {
    return num * num;
};

// Arrow function called add
const add = (a, b) => {
    return a + b;
};

// Testing the functions
console.log("Result of divide:", divide());
console.log("Square of 5:", square(5));
console.log("Addition of 3 and 7:", add(3, 7));
