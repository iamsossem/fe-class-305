/* ES6+
  들여쓰기,{ }
  HTML(대소문자 구분X A,a) , javascript(대소문자문자 구분, A,a(다른문자))
  줄바꿈(압축:공백제거) 작성자가 편하기 위해서 줄바꿈을 함
  문장의 끝에는 ;(권장) 으로 문장의 끝을 작성
  */
  // 주석
  /*
  여
  러
  줄
  */
 /*
 이름을 정할 때 : 한글 사용가능(권장X) 사용하지 않음
 특수문자 : $,-,_
 의미를 부여해서 작성
 예약어 사용 절대 안됨. console, alert, var
 */
// 변수 : 변하는 값(변하는 값을 저장하는 공간)
// let(변수), const(상수)
// let 변수명, const 상수명
// 직접 참조형, 간접 참조형
let width;  //변수선언
width="자료";  //자료형: 문자열 "",'',``
width=89;   //자료형 : 숫자
width=true;  //자료형 : booean(true, false)
            //undefined(값이 없는 상태:빈값), null(의도적으로 추가한 빈값)
console.log( width );

const data='상수';
// Data, daTa, 숫자가 앞에오면 X
// 변수명의 첫문자:영문자(_,$(jquery))
// data=12;

console.log(data);