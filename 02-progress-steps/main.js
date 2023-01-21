(function () {
  
  const btnGroup = document.querySelector('.btn-group');
  const btns = document.querySelectorAll('.btn');
  const circles = document.querySelectorAll('.circle');
  const progress = document.querySelector('.progress');

  let currentIndex = 1;
  
  function init() {
    currentIndex = 1;
    
    circles[currentIndex - 1].classList.add('active');
  }
  
  function updateProgress(e) {
    const oTarget = e.target;
    if (oTarget.nodeName !== 'BUTTON') return;

    const type = oTarget.textContent;

    if (type === 'prev') {
      circles[currentIndex - 1].classList.remove('active');
      currentIndex--;
    } else {
      currentIndex++;
      circles[currentIndex - 1].classList.add('active');
    }

    progress.style.width = `${(currentIndex - 1) / (circles.length - 1) * 100}%`;

    if (currentIndex === 1) {
      btns[0].disabled = true;
    } else if (currentIndex === circles.length) {
      btns[1].disabled = true;
    } else {
      btns[0].disabled = false;
      btns[1].disabled = false;
    }

  }
  
  btnGroup.addEventListener('click', updateProgress);
  
  init();

}())
