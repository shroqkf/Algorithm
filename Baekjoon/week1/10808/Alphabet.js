// 2번 문제: Alphabet.js

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);

input.forEach((i) => counts[alphabet.indexOf(i)]++);

console.log(counts.join(" "));
