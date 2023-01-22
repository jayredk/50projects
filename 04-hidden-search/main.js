const btn = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.search input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
})