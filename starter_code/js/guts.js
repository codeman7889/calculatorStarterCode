// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber

// Names Emmanuel.H and Kevin.M

function divide(x,y) {
	//Write your code below this line
    var sum = x/y;
    return sum;
}

function multiply(x,y) {
    var sum = x*y;
    return sum;

}

function subtract(x,y) {
    var sum = x-y;
    return sum;

}

function add(x,y) {
    var sum = x+y;
    return sum;
}

function power(x,y) {
return  Math.pow(x, y);
  
}

function square_root(x) {
 return Math.sqrt(x);

}

function logBase10(x) {
return Math.log10(x)
}

function generateRandomNumber() {

return Math.round(Math.random()*1000000);

}
