// input 선택 : class=display
// .display인 요소의 정보를 가져와라. html(document)
const displayElem = document.querySelector('.display');
// console.log( displayElem , typeof displayElem );
// console.dir( displayElem );
// let, const
let currentTxt = '';
// 함수 구성 : 먼저 선언을 하고 사용을 할 때는 함수명
const updateDisplay = ()=>{
  displayElem.value = currentTxt;
}
                    //매개변수
const appendValue = (value)=>{
  //해야할 기능을 문장으로 추가
  currentTxt = currentTxt + value;
  updateDisplay();
}
//c버튼을 눌렀을 때 입력값을 초기화
const clearDisplay = ()=>{
  currentTxt = '';
  updateDisplay();
}
//계산실행
const calculate = ()=>{
  //문자열로 만들어진 계산식을 계산 : eval()
  const result = eval(currentTxt);
  currentTxt = result;
  updateDisplay();
}
//맨 뒤 한글자 지우기
const backspace = ()=>{
  currentTxt = currentTxt.slice(0,-1);
  updateDisplay();
}
