// Given an array of integers, can you find the sum of its elements?
// Input Format
// The first line contains an integer, , denoting the size of the array.
// The second line contains space-separated integers representing the array's elements.
// Output Format
// Print the sum of the array's elements as a single integer.
// Sample Input
// 6
// 1 2 3 4 10 11
// Sample Output
// 31

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    if(ar.length > 0){
        for(let i = 0; i < ar.length; i++){
            if(ar[i] <= 1000) sum+=ar[i];
        }
        return sum
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}