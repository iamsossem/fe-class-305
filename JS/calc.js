// let a=10;
// let b=3;
let a = Number(prompt('0-9사이의 수를 입력하세요'));
let b = Number(prompt('0-9사이의 수를 입력하세요'));
console.log( typeof a , typeof b );
/**
 * + , - , *(곱하기) , /(나누기), %(나머지) , **(제곱)
 * a%b=1
 * a**b=10*10*10=1000
 */
// 숫자+숫자=숫자, 문자열+숫자=문자열
document.write('두 수의 합은=' + (a+b) + '<br>');
//10-3=7
document.write(`${a} - ${b} = ${(a-b)} <br>`);
document.write(`${a} * ${b} = ${(a*b)} <br>`);
document.write(`${a} / ${b} = ${(a/b)} <br>`);
document.write(`${a} % ${b} = ${(a%b)} <br>`);
document.write(`${a} ** ${b} = ${(a**b)} <br>`);