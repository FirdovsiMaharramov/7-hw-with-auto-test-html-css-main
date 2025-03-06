// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest (a,b,c) {
    let max = 0;
    if(a > b && a > c) {
        max = a;
    } else if (b > a && b > c) {
        max = b;
    } else {
        max=c;
    }
    return max;
}

const a = 5;
const b = 4;
const c = 10;

let myLargest = findLargest (a,b,c);
console.log(myLargest);