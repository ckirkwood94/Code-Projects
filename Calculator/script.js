let currentNum = 0;

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

let createNumButtons = function (container) {
  for (let i = 9; i >= 0; i--) {
    let newButton = document.createElement('button');
    newButton.setAttribute('value', i);
    newButton.appendChild(document.createTextNode(i));
    container.appendChild(newButton);
  }
};

let initCalculator = function () {
  let container = document.getElementById('container');
  let calculator = document.createElement('div');
  calculator.setAttribute('id', 'calculator');

  createNumButtons(calculator);

  container.appendChild(calculator);
};
initCalculator();
