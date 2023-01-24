(function() {
  const bg = document.querySelector('.bg');
  const loading_text = document.querySelector('.loading-text');

  let load = 0;

  const intId = setInterval(blurring, 30);

  function blurring () {
    load++;
    if (load > 100) return clearInterval(intId);

    loading_text.innerHTML = `${load} %`;
    loading_text.style.opacity = `${scale(load, 'desc', 100, 1)}`;
    bg.style.filter = `blur(${scale(load, 'desc', 100, 30)}px`;

  }

  function scale(num, order, maxNum, toMaxNum) {
    if (order === 'asc') {
      return (num / maxNum) * toMaxNum;
    } else if (order = 'desc') {
      return toMaxNum - ((num / maxNum) * toMaxNum);
    }
  }

}())

