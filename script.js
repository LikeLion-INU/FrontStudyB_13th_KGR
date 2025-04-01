//전달받은 val값을 출력창(output)의 value에 붙이는 함수
function append(val) {
    document.getElementById('output').value += val;
  }
  
 //출력창 내용 비우는 함수
  function clearOutput() {
    document.getElementById('output').value = '';
  }
 
 // 결과값 계산 함수
  function calculate() {
    const output = document.getElementById('output');
    const result = evaluateExpression(output.value);
    output.value = result;
  }
  
 // 연산 함수
  function evaluateExpression(expr) {
    expr = expr.replace(/\s+/g, ''); //공백 제거거
    const tokens = expr.match(/(\d+\.?\d*|\+|\-|\*|\/)/g);
    if (!tokens) return 'Error';
  
    const outputQueue = [];
    const operatorStack = [];
  
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
    const associativity = { '+': 'L', '-': 'L', '*': 'L', '/': 'L' };
  
    tokens.forEach(token => {
      if (!isNaN(token)) {
        outputQueue.push(token);
      } else if ('+-*/'.includes(token)) {
        while (
          operatorStack.length > 0 &&
          '+-*/'.includes(operatorStack[operatorStack.length - 1]) &&
          (
            (associativity[token] === 'L' && precedence[token] <= precedence[operatorStack[operatorStack.length - 1]]) ||
            (associativity[token] === 'R' && precedence[token] < precedence[operatorStack[operatorStack.length - 1]])
          )
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(token);
      }
    });
  
    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop());
    }
  
    const calcStack = [];
    outputQueue.forEach(token => {
      if (!isNaN(token)) {
        calcStack.push(parseFloat(token));
      } else {
        const b = calcStack.pop();
        const a = calcStack.pop();
        if (a === undefined || b === undefined) return 'Error';
        if (token === '+') calcStack.push(a + b);
        if (token === '-') calcStack.push(a - b);
        if (token === '*') calcStack.push(a * b);
        if (token === '/') calcStack.push(a / b);
      }
    });
  
    return calcStack.length === 1 ? calcStack[0] : 'Error';
  }
  