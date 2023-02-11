;(() => {
  const body = document.body;
  const container = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  const slideNum = slides.length;
  let index = 0;

  function updateSlideStatus(target) {
    slides.forEach((item) => item.classList.remove('active'));
    target.classList.add('active');
    setBgImage(target)
  }

  function setBgImage(target) {
    body.style.backgroundImage = target.style.backgroundImage;
  }

  function bindEvent() {
    container.addEventListener('click', (e) => {
      const oTarget = e.target;

      if (!oTarget.classList.contains('arrow')) return;

      const direction = oTarget.id;
      if (direction === 'right') {
        index += 1;
      } else {
        index -= 1;
      }

      if (index < 0) index = slideNum - 1;

      if (index >= slideNum) index = 0;
      
      updateSlideStatus(slides[index]);
    })
  }

  function init() {
    setBgImage(slides[index])
    bindEvent();
  }

  init();
})()

