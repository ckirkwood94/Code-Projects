let currentNum = 0;
let result = 0;

let addNum = function (num) {
  let result = num + currentNum;
  return result;
};

let subtractNum = function (num) {
  let result = currentNum - num;
  return result;
};

let divideNum = function (num) {
  let result = currentNum / num;
  return result;
};

let multiplyNum = function (num) {
  let result = currentNum * num;
  return result;
};

let handleCurrentNum = function (num) {
  if (currentNum === 0) {
    currentNum = parseInt(num);
  } else {
    let newNum = currentNum.toString() + num.toString();
    // console.log(`newNum before: ${newNum}`);
    newNum = parseInt(newNum);
    // console.log(`handleCurrentNum typeof newNum: ${newNum} ${typeof newNum}`);
    currentNum = newNum;
    // console.log(
    //   `handleCurrentNum typeof currentNum: ${currentNum} ${typeof newNum}`
    // );
  }
  console.log(`handleCurrentNum: ${currentNum} ${typeof currentNum}`);
  document.getElementById('new-number').innerHTML = currentNum;
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
      handleCurrentNum(newButton.value);
    });

    newButton.appendChild(document.createTextNode(i));
    container.appendChild(newButton);
  }
};

let initCalculator = function () {
  let container = document.getElementById('container');
  let calculator = document.createElement('div');
  calculator.setAttribute('id', 'calculator');

  let inputContainer = document.createElement('h3');
  inputContainer.setAttribute('id', 'new-number');
  inputContainer.appendChild(document.createTextNode(currentNum));
  calculator.appendChild(inputContainer);

  createNumButtons(calculator);

  container.appendChild(calculator);
};
initCalculator();
