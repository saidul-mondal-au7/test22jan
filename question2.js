// Implement a program which will take an array as an input and remove the duplicates from it. Eg. If [1,2,3,4,4,2,1,5,1,4,5] is the 
// input, then the output should be [1,2,3,4,5]. Bonus - Implement this function in O(nlogn) time complexity and O(1) space complexity. 
// Constraints: 1 <= array length <= 1000000


const removeDuplicates = (array) => {
    let mySet = new Set()
    for (let i = 0; i<array.length; i++){
        if(!mySet.has(array[i])){
            mySet.add(array[i])
        }
    }
    return [...mySet];
}

const arr = [1,2,3,4,4,2,1,5,1,4,5]

console.log(removeDuplicates(arr))