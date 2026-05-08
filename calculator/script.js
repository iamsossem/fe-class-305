const display = document.getElementById('display');

// 숫자 및 연산자 입력
function append(char) {
    display.value += char;
}

// 전체 초기화 (C 버튼)
function clearDisplay() {
    display.value = '';
}

// 마지막 글자 지우기 (← 버튼)
function backspace() {
    display.value = display.value.slice(0, -1);
}

// 계산 실행 (= 버튼)
function calculate() {
    let expression = display.value;

    if (!expression) return;

    try {
        // eval 계산을 위해 표시용 기호를 연산용 기호로 변환
        // × -> *, ÷ -> /
        let formattedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        
        // eval()을 통한 수식 계산
        let result = eval(formattedExpression);

        // 결과가 숫자가 아니거나 무한대인 경우 처리
        if (!isFinite(result)) {
            alert("계산할 수 없는 식입니다.");
            clearDisplay();
            return;
        }

        display.value = result;
    } catch (error) {
        alert("잘못된 수식입니다.");
        // 에러 발생 시 초기화하지 않고 사용자가 수정할 수 있게 둠
    }
}

// 키보드 입력 지원 (선택 사항)
window.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) append(e.key);
    if (e.key === '+') append('+');
    if (e.key === '-') append('-');
    if (e.key === '*') append('×');
    if (e.key === '/') append('÷');
    if (e.key === '(') append('(');
    if (e.key === ')') append(')');
    if (e.key === 'Enter' || e.key === '=') calculate();
    if (e.key === 'Escape') clearDisplay();
    if (e.key === 'Backspace') backspace();
});