/**
 * 조건문 : 조건을 설정 문장
 * 만약~라면~아니면
 * if문(if-else), switch-case문
 * 조건문 : 결과값이 true/false
 * if(조건문){ 
 *    //조건문이 true일 경우만
 * } else {
 *    //조건문이 false일 경우만
 * }
 */
//a>b : true이면 a가 큰값, false : b가 큰값
let a=5, b=3;
if( a>b ){
  //true일 때 실행 문장
  console.log( 'a가 큰 값입니다.');
} else {
  //false일 때 실행 문장
  console.log( 'b가 큰 값입니다.');
}

//? (삼항 연산자, 조건 연산자)
const data = a>b ? '결과:true' : '결과:false';
console.log( data );

//switch-case : 값이 case별로 딱 정해져 있을 때
switch(a>b){
  case true:
    console.log( 'true case 입니다.' );
    break;  //아래있는 문장을 더 실행하지 말고 종료
  case false:
    console.log( 'false case 입니다' );
}

/***
 * ? 삼항연산자 사용하기
 * 숫자 num 에 저장
 * 숫자가 짝수인지 홀수인지 구별
 * num=7, 7/2---->홀수, 0:짝수
 * 나머지값 : %
 */
let num = 8;
let result = num%2 ? "홀수":"짝수";
console.log( 'result=',result );

/***
 * if문을 사용
 * 숫자 num이 양수,음수, 0(영)인지 출력
 *           >0   <0    ==0
 */
num = -9;
if(num>0){
  //true"
  console.log("양수입니다.");
} else if(num<0){
  console.log('음수입니다.');
} else{
  console.log( '영(0)입니다.' );
}

/***
 * 하나의 변수값에 따라서 다양한 결과값을 출력
 * case가 나눠져 있는 상태
 * fruit 변수가 apple로 등록이 되면 '사과를 등록했습니다.'
 * banana로 등록이 되면 '바나나를 등록했습니다.'
 * orange를 등록하면 '오렌지를 등록했습니다.'
 * 그 이외에 값이 등록되면 '등록되지 않은 내용입니다.'
 */
let fruit = 'grape';
switch(fruit){
  case 'apple':
    console.log( '사과를 등록했습니다.' );
    break;
  case 'banana':
    console.log( '바나나를 등록했습니다.');
    break;
  case 'orange':
    console.log( '오렌지를 등록했습니다.');
    break;
  default:
    console.log('등록되지 않은 내용입니다.');
}
