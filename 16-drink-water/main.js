;(() => {
  const cups = document.querySelector('.cups');
  const listOfSmallCup = document.querySelectorAll('.cup-small');
  const remained = document.querySelector('#remained');
  const liters = document.querySelector('#liters');
  const percentage = document.querySelector('.percentage');

  function init() {
    cups.addEventListener('click', highlightCups)
  }

  function updateBigCups(num) {
    const fullCups = num;
    const totalCups = listOfSmallCup.length;

    if (fullCups === 0) {
      percentage.style.visibility = 'hidden';
      percentage.style.height = 0;
    } else {
      percentage.style.visibility = 'visible';
      percentage.style.height = `${fullCups / totalCups * 330}px`;
      percentage.innerText = `${fullCups / totalCups * 100} %`;
    }

    if (fullCups === totalCups) {
      remained.style.visibility = 'hidden';
      remained.style.height = 0;
    } else {
      remained.style.visibility = 'visible';
      liters.innerText = `${2 - (fullCups / totalCups * 2)} L`;
    }
  }

  function highlightCups(e) {
    const oTarget = e.target;
    let num = +oTarget.getAttribute('data-num');

    if (!num) return;

    if (oTarget.classList.contains('full') && !oTarget?.nextElementSibling?.classList.contains('full')) {
      num--;
    }   //  toggle last full cup

    listOfSmallCup.forEach((cup) => {
      
      if (cup.getAttribute('data-num') <= num) {
        cup.classList.add('full');
      } else {
        cup.classList.remove('full');
      }
    })

    updateBigCups(num);
  }

  init();
})()