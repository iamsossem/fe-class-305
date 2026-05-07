/**
 * 하나의 변수에 여러개의 데이터를 사용
 * 간접 참조형 : 배열( [] ), 객체( {} ), 함수( ()=>{} )
 */
/*
let arr = [1,2,3];
console.log( arr , typeof arr);
console.log( arr[0] );
console.log( arr[1] );
console.log( arr[2] );
console.log( arr.length );
*/

const listA = ['사과','바나나'];
console.log( 'listA', listA[1] );
// let listB = listA;
// const listB = [];
// listB[0] = listA[0];
// listB[1] = listA[1];
const listB = [...listA];  //... 스프레드 연산자(ES6)
console.log( 'listB', listB[1] );
listB[1] = '포도';   
//listB = ['사과','포도']; listA = ['사과','바나나']
console.log( 'listA' , listA );
console.log( 'listB' , listB );

//객체 : 이름(key)와 값(value)를 쌍으로 묶어서 사용
const listC = {
  userName: '홍길동',
  age:50
}
console.log( 'listC', listC.userName );
console.log( 'listC', listC.age );

// const listD = listC;
const listD = {...listC};
console.log( 'listD', listD.userName );
listD.userName = '춘향이';
console.log( 'listC', listC.userName );
console.log( 'listD', listD.userName );