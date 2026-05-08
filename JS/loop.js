/**
 * 반복문 : for문
 * for( 초기값; 조건식; 증감식 ){
 *  반복되서 실행되는 문장
 * }
 * 1번입니다.
 * 2번입니다.
 * 3번입니다.
 * 4번입니다.
 * 5번입니다.
 */
for( let i=1;i<=5;i++){
  console.log(`${i}번입니다.`);
}
//1~10까지 숫자 중 짝수만 출력
//2,4,6,8,10 : i=i+2
for( let i=2;i<=10;i+=2){
  console.log(i);
}
/**
 * 5
 * 4
 * 3
 * 2
 * 1
 */
for( let i=5; i>=1 ; i-- ){
  console.log( i );
}

/***
 * 구구단 : 3단
 * 3 * 1 = 3
 * 3 * 2 = 6
 * 3 * 3 = 9
 * 3 * 4 = 12
 * 3 * 5 = 15
 * ..
 * 3 * 9 = 27
 */
for( let i=1; i<=9 ; i++ ){
  console.log( `3 * ${i} = ${3*i}` );
}

/**
 * 배열과 같이 사용하는 반복문
 */
const colors = ['red','green','blue'];
// console.log( colors[0] );
// console.log( colors[1] );
// console.log( colors[2] );
// console.log( colors.length );
for( let i=0; i<colors.length ; i++ ){
  console.log( colors[i] );
}

/**
 * forEach : 하나씩 꺼내서 사용
 * map : 하나씩 꺼내서 다른 모양으로 새로 만드는 것
 */
//글자 뒤에 '붕어빵'이라는 글자를 붙여서 다시 배열을 만듬.
const data = ['팥','슈크림','초코','딸기'];
// const bread = data.map((value)=>{
//   return value+' 붕어빵';
// });
const bread = data.map(value => value+' 붕어빵');
console.log( data );
console.log( bread );
