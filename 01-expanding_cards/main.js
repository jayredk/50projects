const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel')

container.addEventListener('click', expandCard);

function expandCard(e) {
  if (e.target.className === 'container') return;

  panels.forEach((item) => item.classList.remove('active'));

  e.target.classList.add('active')
}