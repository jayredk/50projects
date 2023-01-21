const container = document.querySelector('.container');
const circle = document.querySelector('.circle');

circle.addEventListener('click', (e) => {
  if (e.target.nodeName === 'DIV') return;
  container.classList.toggle('show-nav');
})