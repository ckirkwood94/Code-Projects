let numInput = 0;
let result = 0;
let lastOpPressed;

let addNum = function (num) {
  result = result + numInput;
  return result;
};

let subtractNum = function (num) {
  result = reuslt - numInput;
  return result;
};

let divideNum = function (num) {
  result = result / numInput;
  return result;
};

let multiplyNum = function (num) {
  result = result * numInput;
  return result;
};

let handleDisplay = function () {
  if (numInput === 0) {
    document.getElementById('num-view').innerHTML = result;
  } else {
    document.getElementById('num-view').innerHTML = numInput;
  }
};

let executeOperation = function (func) {
  console.log('executeOperation');
  if (lastOpPressed) {
    result = lastOpPressed(numInput);
  }
  lastOpPressed = func;
  console.log(result);
  numInput = 0;
  handleDisplay();
};

let handleOpButton = function (button) {
  // let button = button;
  console.log(button);
  // executeOperation(currentNum, button.func);
};

let handleNumInput = function (num) {
  if (numInput === 0) {
    numInput = parseInt(num);
  } else {
    let newNum = numInput.toString() + num.toString();
    newNum = parseInt(newNum);
    numInput = newNum;
  }
  handleDisplay();
  return;
};

let createNumButtons = function (container) {
  for (let i = 9; i >= 0; i--) {
    let newButton = document.createElement('button');
    newButton.setAttribute('value', i);
    newButton.setAttribute('type', 'button');
    // console.log(
    //   `createNumButtons i: ${i} typeOf: ${typeof i} newButton.value: ${
    //     newButton.value
    //   }`
    // );
    newButton.addEventListener('click', function () {
      handleNumInput(newButton.value);
    });

    newButton.appendChild(document.createTextNode(i));
    container.appendChild(newButton);
  }
};

let createFunctionButtons = function (container) {
  let buttons = [
    { button: 'add', text: '\u002B', operation: addNum },
    { button: 'subtract', text: '\u2212', operation: subtractNum },
    { button: 'multiply', text: '\u00D7', operation: multiplyNum },
    { button: 'divide', text: '\u00F7', operation: divideNum },
  ];
  // console.log('buttons length: ', buttons.length);
  for (i = 0, j = buttons.length; i < j; i++) {
    // console.log(i, j);
    let newButton = document.createElement('button');
    newButton.setAttribute('type', 'button');
    newButton.appendChild(document.createTextNode(`${buttons[i].text}`));
    newButton.operation = buttons[i].operation;
    newButton.addEventListener('click', function (evt) {
      console.log('Op Button: ', evt.currentTarget.operation);
      executeOperation(evt.currentTarget.operation);
    });

    container.appendChild(newButton);
  }
};

let initCalculator = function () {
  let container = document.getElementById('container');

  let calculator = document.createElement('div');
  calculator.setAttribute('id', 'calculator');

  let inputContainer = document.createElement('h3');
  inputContainer.setAttribute('id', 'num-view');
  inputContainer.appendChild(document.createTextNode(0));
  calculator.appendChild(inputContainer);

  createNumButtons(calculator);
  createFunctionButtons(calculator);

  container.appendChild(calculator);
};
initCalculator();
