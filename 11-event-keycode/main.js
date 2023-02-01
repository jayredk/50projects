;(() => {
  const board = document.querySelector('#board');

  function showKeyCode(e) {
    html = `<div class="key">${e.key === ' ' ? 'Space' : e.key}<small>event.key</small></div>
      <div class="key">${e.keyCode}<small>event.keyCode</small></div>
      <div class="key">${e.code}<small>event.code</small></div>`;

    board.innerHTML = html;
  }

  window.addEventListener('keydown', showKeyCode);
})()
