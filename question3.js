// Implement a program which will take 1 parameter as input and print fibonacci numbers upto that input. 
// Constraints: 1 <= n <= 1000000


const fibonacci = (num) => { 
    if(num==1) {
        return [0,1]
    } 
    let arr = fibonacci(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr; 
   
} 

const number = 10;
console.log(fibonacci(number))