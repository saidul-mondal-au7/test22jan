// Implement a program which will take 2 parameters as input 'a' and 'b' and return a^b as output. Eg. If a is 5 and b is 3, 
// then the output will be 5^3 = 125. Bonus - Implement this program using recursion. Constraints: 1<= a,b <= 10


const cube = (a, b) => {
    return Math.pow(a, b)
}

const a = 5;
const b = 3;
console.log(cube(a,b))