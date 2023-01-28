const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

const addHoverClass = (e) => {
  const oTarget = e.target;
  container.classList.add(`hover-${oTarget.classList[1]}`);
}

const removeHoverClass = (e) => {
  const oTarget = e.target;
  container.classList.remove(`hover-${oTarget.classList[1]}`);
}

left.addEventListener('mouseenter', addHoverClass)

left.addEventListener('mouseleave', removeHoverClass)

right.addEventListener('mouseenter', addHoverClass)

right.addEventListener('mouseleave', removeHoverClass)