/**
 * 연산자 : 1+2,-,*,/,%,**, 
 * 증감연산자(일항연산자) : ++, --
 */
let a=5, b=20;
let result = (a++)+(++b)+(--a);
// console.log( 'result=',result );  //31
// console.log( 'a=',a );  //5

result = a+b;
a+=5;  // a=a+5;
a-=5;  // a=a-5;

// 비교 연산자 : 조건(결과:true, false)
// 같다 : ==,===, !=, !==
result = 8!=='8';

//논리 연산자 : &&(그리고),or(또는),not(아니다)
console.log( '결과 : ', result );

// ?? (nullish 연산자) ,
// let login = null;  //빈값
let login = 'steve';
let userName = login ?? 'Guest';
console.log( 'userName=', userName );

// ?. (옵셔널 체이닝) : 객체
// let user = {
//   profile: {
//   age: 40
//   }
// };
// console.log( user.profile?.age );

let user = {
  // profile : null
  profile : { age: 80 }
};
let nickname = user.profile?.age ?? '익명사용자';
console.log( nickname );

