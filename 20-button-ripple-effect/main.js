;(() => {
  const bindEvent = () => {
    const btn = document.querySelector('.btn');
    const circle = document.querySelector('.btn span');

    btn.addEventListener('click', (e) => {
      if (circle.classList.contains('circle')) return;  // avoid multiple click at one time

      const oTarget = e.target;
      const x = e.clientX - oTarget.offsetLeft;
      const y = e.clientY - oTarget.offsetTop;

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      circle.classList.add('circle');
      setTimeout(() => {
        circle.classList.remove('circle');
      }, 500);
    })
  };
  const init = () => {
    bindEvent();
  };

  init();
})()
