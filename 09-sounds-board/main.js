(function () {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

  const btnGroup = document.querySelector('.btn-group');

  let lastPlay = '';

  function init() {
    const html = sounds.map((item) => `<button type="button" data-id="${item}" class="btn">${item}</button>`).join('');

    btnGroup.innerHTML = html;

    btnGroup.addEventListener('click', (e) => {
      const id = e.target.dataset.id;
      if (!id) return;

      if(lastPlay) {
        let dom = document.querySelector(`#${lastPlay}`);
        dom.pause();
        dom.currentTime = 0;
      }
      document.querySelector(`#${id}`).play();

      lastPlay = id;
    })
  }


  init();

}())

