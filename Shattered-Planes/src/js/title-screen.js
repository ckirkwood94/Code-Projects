class TitleScreen {
  constructor() {
    this.text = 'test';
  }
}

TitleScreen.prototype.init = function () {
  console.log('init');
  let content = `
  <div id="main-menu">
    <h1>Shattered Planes</h1>
    <button>Start Game</button>
    <button>Credits</button>
  </div>
  `;

  document.getElementById('container').innerHTML = content;
};

export { TitleScreen };
