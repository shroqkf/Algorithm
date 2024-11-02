// 4번 문제: Check_Palindrom.js

const fs = require("fs");
const input1 = fs.readFileSync("ex1.txt").toString().trim();
const input2 = fs.readFileSync("ex2.txt").toString().trim();

const reverse1 = input1.split("").reverse().join("");
const reverse2 = input2.split("").reverse().join("");

console.log(input1 === reverse1 ? 1 : 0);
console.log(input2 === reverse2 ? 1 : 0);
