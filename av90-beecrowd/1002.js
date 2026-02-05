//questões do site: https://judge.beecrowd.com/pt/problems/index/1

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var raio = parseFloat(input);

var pi = 3.14159;
var area = pi * (raio * raio);

console.log("A=" + area.toFixed(4));
