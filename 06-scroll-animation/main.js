const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxTop);

function checkBoxTop() {
  const triggerPosition = window.innerHeight * (4 / 5);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);
    if (boxTop < triggerPosition) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}