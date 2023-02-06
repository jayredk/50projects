;(() => {
  const counters = document.querySelectorAll('.counter');

  function init() {
    counters.forEach((counter) => {
      counter.textContent = 0;

      const updateCounter = () => {
        const count = +counter.textContent;
        let goal = +counter.getAttribute('data-target');

        let increment = goal / 200;

        if (count < goal) {
          setTimeout(() => {
            counter.textContent = `${Math.ceil(count + increment)}`;
            updateCounter();
          }, 1)
        } else {
          counter.textContent = goal;
        }
      }
      
      updateCounter();
    })
  }

  init();
})()